export interface PaymentConfigOptions {
    chipApiKey: string;
    chipBrandId: string;
    stripeSecretKey: string;
    isSandbox?: boolean;
}

export const PAYMENT_CONFIG_OPTIONS = 'PAYMENT_CONFIG_OPTIONS';