import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { OpenaiModule } from 'src/openai/openai.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from './telegram-config.factory';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TelegrafModule.forRootAsync(options()), OpenaiModule, HttpModule],
  providers: [TelegramService],
})
export class TelegramModule {}
