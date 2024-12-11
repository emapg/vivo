import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/20',
          {
            'bg-primary hover:bg-primary/90 text-white': variant === 'primary',
            'bg-white/10 hover:bg-white/20 text-white': variant === 'secondary',
            'hover:bg-white/10 text-white': variant === 'ghost',
            'px-3 py-1 text-sm': size === 'sm',
            'px-4 py-2': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);