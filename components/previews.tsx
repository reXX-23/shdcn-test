"use client";

import React from "react";

interface PreviewProps {
  name: string;
}

export function Preview({ name }: PreviewProps) {
  // Placeholder preview component
  // You can add actual component previews here
  return (
    <div className="text-center">
      <p className="text-neutral-600 dark:text-neutral-400">
        Preview for <strong>{name}</strong> component
      </p>
      <p className="mt-2 text-sm text-neutral-500">
        (Add your React Native component preview here)
      </p>
    </div>
  );
}
