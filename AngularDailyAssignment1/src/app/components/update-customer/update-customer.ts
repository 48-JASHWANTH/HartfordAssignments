import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../../services/customer';
import { CustomerModel } from '../../models/customer.model';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer implements OnInit {

  private customerService = inject(Customer);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  customerId = signal<number | null>(null);
  customer = signal<CustomerModel | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerId.set(+id);
      this.fetchCustomer();
    }
  }

  fetchCustomer() {
    if (this.customerId() === null) {
      alert('Invalid Customer ID');
      return;
    }

    this.customerService.getCustomerById(this.customerId()!).subscribe({
      next: (res) => this.customer.set(res),
      error: () => {
        alert('Customer not found');
        this.router.navigate(['/customers']);
      }
    });
  }

  updateCustomer() {
    if (!this.customer() || this.customerId() === null) return;

    this.customerService.updateCustomer(this.customerId()!, this.customer()!).subscribe({
      next: () => {
        alert('Customer updated successfully');
        this.router.navigate(['/customers']);
      },
      error: () => alert('Error updating customer')
    });
  }

  cancel() {
    this.router.navigate(['/customers']);
  }
}
