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
      <div className="relative z-10 p-2 flex items-center justify-center">
        <section className={`space-y-6 my-12 w-full ${isCVPage ? 'max-w-5xl' : 'max-w-4xl'} px-2 lg:px-4`}>
          {!isCVPage && (
            <>
              {/* Fixed header with bold design */}
              <div className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b-4 sm:border-b-6 md:border-b-8 border-black shadow-brutal-sm md:shadow-brutal z-50">
                <div className="max-w-4xl mx-auto p-3 sm:p-4">
                  <Header />
                </div>
              </div>

              {/* Spacer for fixed header */}
              <div className="h-18"></div>

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
