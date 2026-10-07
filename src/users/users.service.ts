import { Get, Injectable, Inject } from '@nestjs/common';
import {
  type Payment,
  PAYMENT_GATEWAY_TOKEN,
} from '../payments/interfaces/payment.interface.js';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PAYMENT_GATEWAY_TOKEN)
    private readonly paymentGateway: Payment,
  ) {}
  @Get('/users')
  getUsers(): string {
    return `This action returns all users. Current Payment is: ${this.paymentGateway.calculate()}`;
  }
}
