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
  other: {
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body
        className={`${firaCode.variable} bg-[#0a0a0a] text-[#a0a0a0] min-h-screen antialiased`}
        style={{ fontFamily: 'var(--font-fira-code), monospace' }}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
