import { PaymentDetails } from './PaymentDetails';

export interface PurchaseCourse {
    courseId: string;
    userId: string;
    paymentDetails: PaymentDetails;
}