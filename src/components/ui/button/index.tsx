'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none  focus:outline-none',
  {
    variants: {
      variant: {
        disable: 'bg-blue-600 text-[#fff] shadow font-semibold opacity-25',
        default: 'bg-primary text-[#fff] shadow font-semibold',
        error: 'bg-red-gradient text-[#fff] shadow font-semibold',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-blue-200 text-blue-800 bg-background font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground',
        outlineDisable:
          'border border-gray-50 text-gray-600 bg-background font-semibold shadow-sm opacity-50',
        errorOutline:
          'border border-red-200 text-red-200 bg-background font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-sm underline-offset-4 text-blue-600 ',
        disableLink: 'text-sm underline-offset-4 text-blue-200',
      },
      size: {
        default: 'h-[50px] px-2 py-2 rounded-md text-medium',
        sm: 'h-8 rounded-[160px] px-3 text-sm',
        lg: 'h-[40px] rounded-md px-8 text-sm',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        className={cn(
          buttonVariants({
            variant: disabled
              ? variant == 'link'
                ? 'disableLink'
                : variant == 'outline'
                ? 'outlineDisable'
                : 'disable'
              : variant,
            size,
            className,
          })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
