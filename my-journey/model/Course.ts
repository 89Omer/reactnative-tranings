// model/Course.ts
export interface Course {
    id?: string;
    name: string;
    image: string;
    price: number;
    status: 'available' | 'booked';
  }