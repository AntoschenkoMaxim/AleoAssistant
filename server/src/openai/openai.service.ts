import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatRequest, MessageContentText } from './interfaces';

@Injectable()
export class OpenaiService {
  private openAiService: OpenAI;

  constructor(private configService: ConfigService) {
    this.openAiService = new OpenAI({
      apiKey: this.configService.getOrThrow('OPENAI_API_KEY'),
    });
  }

  async getMessagesData(request: ChatRequest): Promise<object> {
    const thread = await this.openAiService.beta.threads.create();

    await this.openAiService.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: request.content,
    });

    const run = await this.openAiService.beta.threads.runs.create(thread.id, {
      assistant_id: this.configService.getOrThrow('OPENAI_API_ASSISTANT_ID'),
    });

    const messages = await this.checkRunStatus(thread.id, run.id);

    return messages;
  }

  async checkRunStatus(threadId: string, runId: string): Promise<object> {
    let runStatus = await this.getRunStatus(threadId, runId);

    while (runStatus.status !== 'completed') {
      await new Promise((resolve) => setTimeout(resolve, 10000)); // Ожидание 5 секунд перед следующим запросом
      runStatus = await this.getRunStatus(threadId, runId);
    }

    const messages =
      await this.openAiService.beta.threads.messages.list(threadId);

    const response = messages.data[0]?.content[0] as MessageContentText; // Приведение типа и использование optional chaining
    return { message: response?.text.value };
  }

  async getRunStatus(threadId: string, runId: string): Promise<any> {
    // Метод для получения статуса выполнения
    const runStatus = await this.openAiService.beta.threads.runs.retrieve(
      threadId,
      runId,
    );

    return runStatus;
  }
}
