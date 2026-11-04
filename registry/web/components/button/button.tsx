import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-opacity active:opacity-85 disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-black text-white",
    outline: "bg-white border border-gray-300 text-black",
  };
  
  const sizeStyles = {
    default: "h-12 px-5 text-base",
    sm: "h-10 px-4 text-sm",
    lg: "h-14 px-7 text-lg",
  };
  
  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
