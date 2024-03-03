import OpenAI from 'openai';

export interface ChatRequest {
  content: string;
}

export interface ChatResponse {
  success: boolean;
  result: OpenAI.ChatCompletion.Choice;
}

export interface MessageContentText {
  type: 'text';
  text: {
    value: string;
    annotations: any[];
  };
}
