import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   private http = inject(HttpClient)

  // create(customer: Partial<{ FirstName: string | null; LastName: string | null; City: string | null; SSN: string | null; }>) {
  //   throw new Error('Method not implemented.');
  // }

  allCustomers(){
    return this.http.get<Customer[]>('http://localhost:8080/api/v1/customers');
  }

  create(customer:any){
    return this.http.post('http://localhost:8080/api/v1/customer', customer);
  }

}