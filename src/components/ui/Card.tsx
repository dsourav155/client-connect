import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({
  children,
  className = '',
  padding = 'md',
  bordered = true,
  shadow = 'sm',
}: CardProps) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };

  const borderClass = bordered ? 'border border-gray-200' : '';

  return (
    <div
      className={`bg-white rounded-lg ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 