export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxable: boolean;
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
  method: 'credit_card' | 'bank_transfer' | 'paypal' | 'other';
  status: 'completed' | 'pending' | 'failed';
  reference?: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  projectId: string;
  client: {
    id: string;
    name: string;
    email: string;
    company: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  agency: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    logo?: string;
  };
  lineItems: LineItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
  amountPaid: number;
  amountDue: number;
  status: 'draft' | 'sent' | 'paid' | 'partially_paid' | 'overdue';
  notes?: string;
  terms?: string;
  payments: Payment[];
} 