import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { OpenaiService } from './openai.service';
import { ChatRequest } from './interfaces';

@Controller('openai')
export class OpenaiController {
  constructor(private openaiService: OpenaiService) {}

  @Post('/chat')
  @HttpCode(200)
  async getReply(@Body() request: ChatRequest) {
    console.log(request);
    return this.openaiService.getReplyFromOpenAI(request);
  }
}
