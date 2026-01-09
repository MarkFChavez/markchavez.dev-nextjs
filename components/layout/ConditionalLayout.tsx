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
  const normalizedPathname = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;
  const isCVPage = normalizedPathname === '/cv';

  return (
    <>
      <div className="relative z-10 flex items-center justify-center">
        <section className={`space-y-8 my-16 w-full ${isCVPage ? 'max-w-4xl' : 'max-w-2xl'} px-6`}>
          {!isCVPage && (
            <>
              <Header />
              <Navigation />
            </>
          )}

          <main className="animate-fade-in">
            {children}
          </main>
        </section>
      </div>

      {!isCVPage && <Footer />}
    </>
  );
}
