import React, { useState } from 'react';
import Button from '../ui/Button';

interface OnboardingStep {
  title: string;
  description: string;
  image: string;
}

interface OnboardingModalProps {
  steps: OnboardingStep[];
  onComplete: () => void;
  isOpen: boolean;
}

const OnboardingModal = ({ steps, onComplete, isOpen }: OnboardingModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={step.image}
              alt={step.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{step.title}</h2>
          <p className="mb-6 text-center text-gray-600">{step.description}</p>

          {/* Progress dots */}
          <div className="flex justify-center mb-6 space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between w-full">
            <div>
              {currentStep > 0 ? (
                <Button variant="outline" onClick={handlePrevious}>
                  Previous
                </Button>
              ) : (
                <Button variant="outline" onClick={handleSkip}>
                  Skip
                </Button>
              )}
            </div>
            <Button onClick={handleNext}>
              {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal; 