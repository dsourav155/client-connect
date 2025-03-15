import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page
    router.push('/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Head>
        <title>Client Connect - Loading</title>
      </Head>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
} 