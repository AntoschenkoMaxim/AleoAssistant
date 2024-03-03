import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private openaiService: OpenaiService) {}

  @Post('/chat')
  @HttpCode(200)
  async getThreadOpenai(@Body() request) {
    return this.openaiService.getMessagesData(request);
  }
}
