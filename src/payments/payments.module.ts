import { Module } from '@nestjs/common';
import { PAYMENT_GATEWAY_TOKEN } from './interfaces/payment.interface.js';
import { StripeService } from './services/stripe.service.js';
import { ChipService } from './services/chip.service.js';
import { PaymentConfigOptions, PAYMENT_CONFIG_OPTIONS } from './interfaces/payment-config.interface.js';

@Module({
  providers: [
    {
      provide: PAYMENT_GATEWAY_TOKEN,
      useClass: StripeService,
    },
    StripeService,
    ChipService,
  ],
  exports: [PAYMENT_GATEWAY_TOKEN, StripeService, ChipService],
})
export class PaymentsModule { }
