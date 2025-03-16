import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Loading dashboard...</p>
      </div>
    </div>
  );
}
