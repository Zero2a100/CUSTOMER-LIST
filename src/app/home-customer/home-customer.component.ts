import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [],
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.css'
})
export default class HomeCustomerComponent implements OnInit {
  private customerService = inject(CustomerService);
  customers: Customer[] = [];
  ngOnInit(): void {
    this.customerService.allCustomers()
      .subscribe( (data: Customer[]) => { this.customers = data})

  }

}
