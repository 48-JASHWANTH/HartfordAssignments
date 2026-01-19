import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../../services/customer';
import { CustomerModel } from '../../models/customer.model';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css',
})
export class AddCustomer {

  private customerService = inject(Customer);
  private router = inject(Router);

  customers = signal<CustomerModel[]>([]);

  customer: CustomerModel = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 0,
    gender: 'Male',

    address: {
      houseNo: '',
      street: '',
      city: '',
      state: '',
      pincode: ''
    },

    insuranceType: 'Health',
    policyNumber: '',
    coverageAmount: 0,
    premiumAmount: 0,
    policyStartDate: '',
    policyEndDate: '',

    nomineeName: '',
    nomineeRelation: '',

    isActive: true,
    createdAt: new Date().toISOString()
  };

  addCustomer() {
    // Generate unique ID and policy number before posting
    this.customerService.getAllCustomers().subscribe({
      next: (customers) => {
        // Find the maximum ID and add 1, or use 1 if no customers exist
        const maxId = customers.length > 0 
          ? Math.max(...customers.map(c => c.id || 0))
          : 0;
        
        this.customer.id = maxId + 1;

        // Generate policy number: HF + current year + serial number
        const currentYear = new Date().getFullYear();
        const serialNo = String(this.customer.id).padStart(4, '0'); // Pad with zeros to make it 4 digits
        this.customer.policyNumber = `HF${currentYear}${serialNo}`;

        // Now post the customer with the unique ID and policy number
        this.customerService.addCustomer(this.customer).subscribe({
          next: (res) => {
            this.customers.update(list => [...list, res]);
            alert('Customer added successfully');
            this.router.navigate(['/customers']);
          },
          error: () => alert('Error adding customer')
        });
      },
      error: () => alert('Error generating customer ID')
    });
  }

  cancel() {
    this.router.navigate(['/customers']);
  }

  resetForm() {
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 0,
      gender: 'Male',

      address: {
        houseNo: '',
        street: '',
        city: '',
        state: '',
        pincode: ''
      },

      insuranceType: 'Health',
      policyNumber: '',
      coverageAmount: 0,
      premiumAmount: 0,
      policyStartDate: '',
      policyEndDate: '',

      nomineeName: '',
      nomineeRelation: '',

      isActive: true,
      createdAt: new Date().toISOString()
    };
  }
}
