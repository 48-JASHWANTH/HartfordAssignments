import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Customer } from '../../services/customer';
import { CustomerModel } from '../../models/customer.model';

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-customer.html',
  styleUrl: './delete-customer.css',
})
export class DeleteCustomer {

  private customerService = inject(Customer);

  customers = signal<CustomerModel[]>([]);
  customerId = signal<number | null>(null);

  deleteById() {
    if (this.customerId() === null) {
      alert('Please enter Customer ID');
      return;
    }

    this.customerService.deleteCustomer(this.customerId()!).subscribe({
      next: () => {
        this.customers.update(list =>
          list.filter(c => c.id !== this.customerId())
        );
        alert('Customer deleted successfully');
        this.customerId.set(null);
      },
      error: () => alert('Error deleting customer')
    });
  }

  deleteAll() {
    if (!confirm('Are you sure you want to delete ALL customers?')) return;

    this.customerService.deleteAllCustomers().subscribe({
      next: () => {
        this.customers.set([]);
        alert('All customers deleted');
      },
      error: () => alert('Error deleting all customers')
    });
  }
}
