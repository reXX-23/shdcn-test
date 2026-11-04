import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My UI Library",
  description: "Beautiful web components built with React and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
