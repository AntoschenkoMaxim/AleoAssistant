import { Ctx, Hears, Message, On, Start, Update } from 'nestjs-telegraf';
import { ChatRequest, ChatResponse } from 'src/openai/interfaces';
import { OpenaiService } from 'src/openai/openai.service';
import { Scenes } from 'telegraf';
import { actionButtons } from './telegram.buttons';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService {
  constructor(private readonly openaiService: OpenaiService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    await ctx.replyWithHTML(
      `❤️Welcome to Aleo AI, <b>@${ctx.from.username}</b>!\n\nA user-friendly and secure assistant bringing ease to Aleo Ecosystem.\n\n🪧Aleo AI is an unofficial project built by the community.\n\n👇Below you can ask your personal question to our neural network, or choose one of the popular questions.`,
      actionButtons(),
    );
  }

  @Hears('blockchain')
  async replyAboutBlockchain() {
    return this.replyFromOpenAI({
      content: `Can you explain Aleo's blockchain technology?`,
    });
  }

  @Hears('tools')
  async replyAboutTools() {
    return this.replyFromOpenAI({
      content: 'What tools and programming languages does Aleo support?',
    });
  }

  @Hears('contracts')
  async replyAboutContracts() {
    return this.replyFromOpenAI({
      content:
        'What are private smart contracts, and how do they operate in Aleo?',
    });
  }

  @On('text')
  async onMessage(@Message('text') content: string) {
    return this.replyFromOpenAI({ content });
  }

  private async replyFromOpenAI(content: ChatRequest) {
    const reply = (await this.openaiService.getReplyFromOpenAI(
      content,
    )) as ChatResponse;
    return reply?.message;
  }
}
