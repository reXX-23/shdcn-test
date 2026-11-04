"use client";

interface CodeBlockProps {
  code: string;
  title?: string;
}

export function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
      {title && (
        <div className="border-b border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium dark:border-neutral-800 dark:bg-neutral-900">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto bg-neutral-100 p-4 text-sm dark:bg-neutral-950">
        <code>{code}</code>
      </pre>
    </div>
  );
}
