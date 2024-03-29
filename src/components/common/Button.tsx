import React from 'react';
import { cn } from '@/lib/utils.ts';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant,
  size,

  className,
  children,
  ...otherProps
}: ButtonProps) => {
  const buttonType = {
    primary: 'bg-hc-blue text-hc-white',
    secondary: 'bg-gray-500'
  };
  const buttonSize = {
    sm: 'w-[89px] px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  };
  return (
    <button
      {...otherProps}
      className={cn(
        'text-lg font-semibold text-white bg-blue-500 rounded-3xl focus:outline-none w-[338px] h-[54px] flex items-center justify-center hover:bg-hc-blue-300',
        buttonType[variant],
        buttonSize[size],

        className
      )}>
      {children}
    </button>
  );
};

export default Button;
