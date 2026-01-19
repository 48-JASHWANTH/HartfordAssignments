import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Customer } from '../../services/customer';
import { CustomerModel } from '../../models/customer.model';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-customer.html',
  styleUrl: './view-customer.css',
})
export class ViewCustomer implements OnInit {

  private customerService = inject(Customer);
  private router = inject(Router);

  customers = signal<CustomerModel[]>([]);

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe({
      next: (res) => {
        this.customers.set(res);
      },
      error: () => alert('Error fetching customers')
    });
  }

  navigateToAdd() {
    this.router.navigate(['/add']);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteCustomer(id: number) {
    if (!confirm('Are you sure you want to delete this customer?')) return;

    this.customerService.deleteCustomer(id).subscribe({
      next: () => {
        alert('Customer deleted successfully');
        this.loadCustomers();
      },
      error: () => alert('Error deleting customer')
    });
  }
}
