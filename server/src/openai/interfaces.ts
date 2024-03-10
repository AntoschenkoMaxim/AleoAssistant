export interface ChatRequest {
  content: string;
}

export interface ChatResponse {
  message: string;
}

export interface MessageContentText {
  type: 'text';
  text: {
    value: string;
    annotations: any[];
  };
}
