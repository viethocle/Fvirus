import { Customer } from '@modules/customer/customer.model';

export enum StatusOrder {
  new         = 'new',
  ready       = 'ready',
  inprogress  = 'inprogress',
  closed      = 'closed'
}

export interface Order {
  id: string;
  description: string;
  status: StatusOrder;
  created_at: string;
  due_date: string;
  price: number;
  customer?: Customer
}
