import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: 'swap',
  fallback: ['Monaco', 'Courier New', 'monospace'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Mark Chavez - Rails Developer",
  description: "Ruby on Rails developer specializing in Hotwire, Stimulus, and progressive enhancement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 min-h-screen antialiased`}
        style={{ fontFamily: 'var(--font-fira-code), monospace' }}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
