import { Injectable } from '@nestjs/common';
import { Payment } from './interfaces/payment.interface.js';

@Injectable()
export class StripeService implements Payment {
  id: number;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;

  calculate(): string {
    return 'value from stripe';
  }
}