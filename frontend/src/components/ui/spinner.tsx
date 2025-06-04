import React from 'react';
import { cn } from '@/lib/utils'; // Utility function for conditional classNames
import { VariantProps, cva } from 'class-variance-authority'; // For managing class variations
import { Loader2 } from 'lucide-react'; // Icon used for the spinner

// Define spinner container styles with conditional visibility
const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',   // Display as flex when show is true
      false: 'hidden',// Hide when show is false
    },
  },
  defaultVariants: {
    show: true,       // Default to showing the spinner
  },
});

// Define spinner icon styles with size variations
const loaderVariants = cva('animate-spin text-white', {
  variants: {
    size: {
      small: 'size-6',   // Small size
      medium: 'size-8',  // Medium size
      large: 'size-12',  // Large size
    },
  },
  defaultVariants: {
    size: 'small',       // Default to small size
  },
});

// Define props for the Spinner component
interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,  // Include spinner variants (show)
    VariantProps<typeof loaderVariants> {        // Include loader variants (size)
      className?: string;                        // Optional additional className
      children?: React.ReactNode;                // Optional children content
}

// Spinner component definition
export function Spinner({ size, show, children, className }: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
        {/* Loader2 icon with conditional size and additional classNames */}
        <Loader2 className={cn(loaderVariants({ size }), className)} />
        {/* Optional child elements */}
        { children } 
    </span>
  );
}
