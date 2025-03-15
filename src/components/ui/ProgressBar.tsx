import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
  valueClassName?: string;
  label?: string;
}

const ProgressBar = ({
  value,
  max = 100,
  showValue = false,
  size = 'md',
  color = 'primary',
  className = '',
  valueClassName = '',
  label,
}: ProgressBarProps) => {
  // Ensure value is between 0 and max
  const normalizedValue = Math.min(Math.max(0, value), max);
  const percentage = (normalizedValue / max) * 100;
  
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };
  
  const colorClasses = {
    primary: 'bg-primary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
  };
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showValue && (
            <span className={`text-sm font-medium text-gray-500 ${valueClassName}`}>
              {normalizedValue}/{max}
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        <div
          className={`${colorClasses[color]} rounded-full ${sizeClasses[size]}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={normalizedValue}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          {showValue && !label && size === 'lg' && (
            <span className="sr-only">{normalizedValue}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar; 