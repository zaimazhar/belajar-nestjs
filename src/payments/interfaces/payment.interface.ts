export interface Payment {
  id: number;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
  calculate(): string;
  authenticate(): string;
}

export const PAYMENT_GATEWAY_TOKEN = 'PAYMENT_GATEWAY_TOKEN';