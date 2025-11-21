'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Remove trailing slash for consistent comparison
  const normalizedPathname = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;
  const isCVPage = normalizedPathname === '/cv';

  return (
    <>
      {!isCVPage && (
        <>
          {/* Decorative background elements */}
          <div className="fixed top-10 right-10 w-64 h-64 bg-electric-pink opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="fixed bottom-20 left-10 w-80 h-80 bg-electric-yellow opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="fixed top-1/2 right-1/4 w-48 h-48 bg-electric-blue opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

      <div className="relative z-10 p-2 flex items-center justify-center">
        <section className={`space-y-6 my-12 w-full ${isCVPage ? 'max-w-5xl' : 'max-w-4xl'} px-2 lg:px-4`}>
          {!isCVPage && (
            <>
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
            </>
          )}

          {/* Main content area */}
          <main className="animate-slide-up pb-16">
            {children}
          </main>
        </section>
      </div>

      {!isCVPage && <Footer />}
    </>
  );
}
