import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Head>
        <title>Forgot Password | Client Connect</title>
      </Head>

      <div className="w-full max-w-md px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <Link href="/login" className="text-primary hover:text-primary/80">
            <span className="inline-flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to login
            </span>
          </Link>
        </div>

        <ForgotPasswordForm />
      </div>
    </div>
  );
} 