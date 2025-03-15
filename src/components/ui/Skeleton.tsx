import React from 'react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  circle?: boolean;
  rounded?: boolean;
  animate?: boolean;
}

const Skeleton = ({
  className = '',
  height,
  width,
  circle = false,
  rounded = true,
  animate = true,
}: SkeletonProps) => {
  const baseClasses = 'bg-gray-200';
  const animationClass = animate ? 'animate-pulse' : '';
  const roundedClass = rounded ? 'rounded' : '';
  const circleClass = circle ? 'rounded-full' : '';
  
  const style: React.CSSProperties = {
    height: height,
    width: width,
  };
  
  return (
    <div
      className={`${baseClasses} ${animationClass} ${roundedClass} ${circleClass} ${className}`}
      style={style}
    />
  );
};

export const SkeletonText = ({
  lines = 3,
  className = '',
  lineHeight = 'h-4',
  lastLineWidth = '75%',
  spacing = 'mb-2',
}: {
  lines?: number;
  className?: string;
  lineHeight?: string;
  lastLineWidth?: string;
  spacing?: string;
}) => {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={`${lineHeight} ${index !== lines - 1 ? spacing : ''}`}
          width={index === lines - 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
};

export default Skeleton; 