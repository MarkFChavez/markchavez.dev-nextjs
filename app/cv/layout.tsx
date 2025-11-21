import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: 'swap',
  fallback: ['Monaco', 'Courier New', 'monospace'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Mark Chavez - CV",
  description: "Ruby on Rails developer specializing in Hotwire, Stimulus, and progressive enhancement",
};

export default function CVLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} bg-white text-gray-900 min-h-screen antialiased`}
        style={{ fontFamily: 'var(--font-fira-code), monospace' }}
      >
        {/* Simple container without header/nav/footer */}
        <div className="relative p-4 md:p-8 max-w-5xl mx-auto">
          <main className="animate-slide-up">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
