import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  private baseUrl = 'http://localhost:3000/customers';
  
  constructor(private http:HttpClient) {}

  addCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this.http.post<CustomerModel>(this.baseUrl, customer);
  }

  getAllCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.baseUrl);
  }

  getCustomerById(id:number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${this.baseUrl}/${id}`);
  }

  updateCustomer(id:number, customer: CustomerModel): Observable<CustomerModel> {
    return this.http.put<CustomerModel>(`${this.baseUrl}/${id}`, customer);
  }

  deleteCustomer(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  deleteAllCustomers(): Observable<void> {
    return this.http.delete<void>(this.baseUrl);
  }
}
