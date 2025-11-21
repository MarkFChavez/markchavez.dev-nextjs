import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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
        {/* Decorative background elements */}
        <div className="fixed top-10 right-10 w-64 h-64 bg-electric-pink opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-20 left-10 w-80 h-80 bg-electric-yellow opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed top-1/2 right-1/4 w-48 h-48 bg-electric-blue opacity-5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 p-2 flex items-center justify-center">
          <section className="space-y-6 my-12 w-full max-w-4xl px-2 lg:px-4">
            {/* Fixed header with bold design */}
            <div className="fixed top-0 inset-x-0 bg-white border-b-4 border-black shadow-brutal-sm z-50 backdrop-blur-sm bg-opacity-95">
              <div className="max-w-4xl mx-auto p-4">
                <Header />
              </div>
            </div>

            {/* Spacer for fixed header */}
            <div className="h-16"></div>

            {/* Navigation */}
            <Navigation />

            {/* Main content area */}
            <main className="animate-slide-up pb-16">
              {children}
            </main>
          </section>
        </div>

        <Footer />
      </body>
    </html>
  );
}
