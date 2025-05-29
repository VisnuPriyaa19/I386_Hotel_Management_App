import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    { name: 'Visnu', mobile: '9988776655', address: 'Chennai', roomNo: 101, check_in_date: new Date('2025-05-29') },
    { name: 'Rajesh', mobile: '9876543210', address: 'Trichy', roomNo: 102, check_in_date: new Date('2025-03-12')  },
    { name: 'Tina', mobile: '8976542310', address: 'Madurai', roomNo: 103, check_in_date: new Date('2025-04-13') },
    { name: 'Denila', mobile: '7789845363', address: 'Bangalore', roomNo: 104, check_in_date: new Date('2025-02-28') },
    { name: 'Niroop', mobile: '8934635412', address: 'Madurai', roomNo: 105, check_in_date: new Date('2025-08-19') }
  ];

  getCustomers(): Customer[] 
  {
    return this.customers;
  }

  addCustomer(customer: Customer): void 
  {
    this.customers.push(customer);
  }
}
