import * as React from 'react';
import classNames from 'classnames';

export enum ButtonVariant {
  PRINT = 'PRINT',
  MENU = 'MENU',
}

interface ButtonProps {
  onClick?: () => void;
  variant: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant }) => {
  const variantClassName = classNames({
    'bg-gray-700': variant === ButtonVariant.MENU,
    'bg-red-500': variant === ButtonVariant.PRINT,
  });

  return (
    <button
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-gray-200 shadow-lg sm:h-12 sm:w-12 ${variantClassName}`}
    >
      {children}
    </button>
  );
};

export default Button;
