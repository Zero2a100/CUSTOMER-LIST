import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export default class CreateCustomerComponent {
  private cb = inject(FormBuilder);
  private router = inject(Router);
  private customerService = inject(CustomerService);

  form = this.cb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    city:['',[Validators.required]],
    ssn:['',[Validators.required]],
  });


  create(){
    console.log(this.form.value);
    const customer = this.form.value;
    this.customerService.create(customer)
    .subscribe(() => {
          this.router.navigate(['/']);
      });

  }
  

}
