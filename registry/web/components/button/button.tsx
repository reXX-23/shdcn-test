import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-opacity active:opacity-85 disabled:opacity-50",
        variant === "default" && "bg-black text-white",
        variant === "outline" && "bg-white border border-gray-300 text-black",
        size === "default" && "h-12 px-5 text-base",
        size === "sm" && "h-10 px-4 text-sm",
        size === "lg" && "h-14 px-7 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
