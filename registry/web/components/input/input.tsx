import React, { useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  containerClassName?: string;
};

export function Input({
  label,
  error,
  containerClassName = "",
  className = "",
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`w-full flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label className="text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        className={`h-12 rounded-xl border ${
          focused ? "border-black" : "border-gray-300"
        } ${
          error ? "border-red-500" : ""
        } bg-white px-4 text-base text-black placeholder:text-gray-400 focus:outline-none ${className}`}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
