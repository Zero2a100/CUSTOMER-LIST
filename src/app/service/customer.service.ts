import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private http = inject(HttpClient)

  allCustomers(){
    return this.http.get<Customer[]>('http://localhost:8080/api/v1/customers');
  }

}