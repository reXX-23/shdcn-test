import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Mobile UI Library",
  description: "React Native components for Expo",
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
