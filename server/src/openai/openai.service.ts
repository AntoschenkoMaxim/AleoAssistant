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

  async createThread() {
    return this.openAiService.beta.threads.create();
  }

  async createMessage(threadId: string, content: string) {
    return this.openAiService.beta.threads.messages.create(threadId, {
      role: 'user',
      content: content,
    });
  }

  async createRun(threadId: string) {
    return this.openAiService.beta.threads.runs.create(threadId, {
      assistant_id: this.configService.getOrThrow('OPENAI_API_ASSISTANT_ID'),
    });
  }

  async checkRunStatus(threadId: string, runId: string): Promise<object> {
    let runStatus = await this.getRunStatus(threadId, runId);

    while (runStatus.status !== 'completed') {
      // if (runStatus.status === 'failed') {
      //   throw new Error('Run failed');
      // }
      await new Promise((resolve) => setTimeout(resolve, 10000));
      runStatus = await this.getRunStatus(threadId, runId);
    }

    const messages =
      await this.openAiService.beta.threads.messages.list(threadId);

    const response = messages.data[0]?.content[0] as MessageContentText;
    console.log({ message: response?.text.value });
    return { message: response?.text.value };
  }

  async getRunStatus(threadId: string, runId: string): Promise<any> {
    const runStatus = await this.openAiService.beta.threads.runs.retrieve(
      threadId,
      runId,
    );

    return runStatus;
  }

  async getReplyFromOpenAI(request: ChatRequest): Promise<object> {
    const thread = await this.createThread();

    await this.createMessage(thread.id, request.content);

    const run = await this.createRun(thread.id);

    const messages = await this.checkRunStatus(thread.id, run.id);

    return messages;
  }
}
