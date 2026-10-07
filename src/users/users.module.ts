import { Module } from '@nestjs/common';
import { PaymentsModule } from '../payments/payments.module.js';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';

@Module({
  imports: [PaymentsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
