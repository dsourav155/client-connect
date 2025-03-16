import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import PageContainer from '@/components/layout/PageContainer';
import { invoices as mockInvoices } from '@/mocks/invoices';
import { Invoice, InvoiceStatus } from '@/types/invoice';

const InvoicesPage: NextPage = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showInvoiceDetails, setShowInvoiceDetails] = useState<boolean>(false);

  useEffect(() => {
    // In a real app, this would be an API call
    setInvoices(mockInvoices);
  }, []);

  // Filtered invoices based on status and search query
  const filteredInvoices = invoices.filter(invoice => {
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    const matchesSearch = searchQuery === '' || 
      invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.client.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const handlePayInvoice = (invoiceId: string) => {
    const now = new Date().toISOString();
    
    const updatedInvoices = invoices.map(invoice => {
      if (invoice.id === invoiceId) {
        const newPayment = {
          id: `pmt-${Math.random().toString(36).substring(2, 10)}`,
          amount: invoice.amountDue,
          date: now,
          method: 'bank_transfer' as const,
          status: 'completed' as const,
          reference: `PAY-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
        };
        
        return {
          ...invoice,
          status: 'paid' as InvoiceStatus,
          amountPaid: invoice.total,
          amountDue: 0,
          payments: [...invoice.payments, newPayment]
        };
      }
      return invoice;
    });
    
    setInvoices(updatedInvoices);
    
    if (selectedInvoice && selectedInvoice.id === invoiceId) {
      const newPayment = {
        id: `pmt-${Math.random().toString(36).substring(2, 10)}`,
        amount: selectedInvoice.amountDue,
        date: now,
        method: 'bank_transfer' as const,
        status: 'completed' as const,
        reference: `PAY-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      };
      
      setSelectedInvoice({ 
        ...selectedInvoice, 
        status: 'paid' as InvoiceStatus,
        amountPaid: selectedInvoice.total,
        amountDue: 0,
        payments: [...selectedInvoice.payments, newPayment]
      });
    }
  };

  // Define sidebar links for navigation
  const sidebarLinks = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      name: 'Documents',
      href: '/documents',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Invoices',
      href: '/invoices',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ];

  // Define logo component
  const logo = (
    <div className="flex items-center">
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-900">Client Connect</span>
    </div>
  );

  return (
    <>
      <Head>
        <title>Invoices | Client Connect</title>
        <meta name="description" content="Manage client invoices" />
      </Head>
      
      <PageContainer
        title="Invoices"
        sidebarLinks={sidebarLinks}
        logo={logo}
        user={{
          name: 'John Smith',
          email: 'john@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }}
        notifications={3}
      >
        <div className="px-4 py-6 md:px-6 md:py-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Invoices</h1>
          <p className="mt-2 text-gray-600">Manage and track client invoices</p>
          
          <div className="mt-8 bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold">Invoice List</h2>
              <div className="mt-4 space-y-4">
                {filteredInvoices.slice(0, 5).map((invoice) => (
                  <div key={invoice.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                    <div className="mr-4">
                      <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                        <path d="M14 3v5h5M16 13H8M16 17H8" stroke="white" strokeWidth="1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{invoice.invoiceNumber}</h3>
                      <p className="text-sm text-gray-500">{invoice.client.name}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      ${invoice.total.toFixed(2)}
                    </div>
                    <div className="ml-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                        invoice.status === 'overdue' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {invoice.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default InvoicesPage;