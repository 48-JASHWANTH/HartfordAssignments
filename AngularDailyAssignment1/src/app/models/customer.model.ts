export interface CustomerModel {
  id?: number;

  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';

  // Address Info
  address: {
    houseNo: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
  };

  // Insurance Info
  insuranceType: 'Health' | 'Life' | 'Vehicle' | 'Home';
  policyNumber: string;
  coverageAmount: number;
  premiumAmount: number;
  policyStartDate: string; // ISO date
  policyEndDate: string;

  // Nominee Info
  nomineeName: string;
  nomineeRelation: string;

  // Status
  isActive: boolean;
  createdAt: string;
}
