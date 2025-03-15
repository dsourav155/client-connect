import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import LoginForm from '@/components/auth/LoginForm';
import OnboardingModal from '@/components/auth/OnboardingModal';

const onboardingSteps = [
  {
    title: 'Welcome to Client Connect',
    description: 'Your all-in-one portal for managing projects, communications, and deliverables with your agency.',
    image: '/images/onboarding-1.jpg',
  },
  {
    title: 'Stay Updated',
    description: 'Track project progress, view milestones, and get notified about important updates in real-time.',
    image: '/images/onboarding-2.jpg',
  },
  {
    title: 'Seamless Communication',
    description: 'Communicate directly with your team, share files, and keep all project conversations in one place.',
    image: '/images/onboarding-3.jpg',
  },
];

export default function Login() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Head>
        <title>Login | Client Connect</title>
      </Head>

      <div className="w-full max-w-4xl px-4 py-8 mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-stretch">
          {/* Left side - Branding */}
          <div className="flex flex-col items-center justify-center w-full p-8 mb-8 text-white rounded-lg md:mb-0 md:w-1/2 md:mr-4 bg-primary">
            <div className="mb-6 text-4xl font-bold">Client Connect</div>
            <p className="mb-6 text-center">
              Your all-in-one portal for managing projects, communications, and deliverables.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Transparency</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Access</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex items-center justify-center w-full md:w-1/2 md:ml-4">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Onboarding modal */}
      <OnboardingModal
        steps={onboardingSteps}
        onComplete={handleOnboardingComplete}
        isOpen={showOnboarding}
      />
    </div>
  );
} 