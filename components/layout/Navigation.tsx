'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    // Normalize pathname by removing trailing slash (except for root)
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/'
      ? pathname.slice(0, -1)
      : pathname;
    return normalizedPathname === path;
  };

  const navItems = [
    {
      path: '/',
      label: 'HOME'
    },
    {
      path: '/projects',
      label: 'PROJECTS'
    },
    {
      path: '/uses',
      label: 'USES'
    },
    {
      path: '/cv',
      label: 'CV'
    }
  ];

  return (
    <nav className="relative pt-2 pb-4 sm:pt-2 sm:pb-5 md:pb-6 bg-white border-b-4 sm:border-b-6 md:border-b-8 border-black">
      <div className="max-w-3xl mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 font-black text-xs sm:text-sm tracking-wider transition-all ${
                  active
                    ? 'bg-black text-white border-2 sm:border-3 md:border-4 border-black shadow-brutal-sm md:shadow-brutal'
                    : 'bg-white text-black border-2 sm:border-3 md:border-4 border-black shadow-brutal-sm hover:bg-black hover:text-white md:hover:shadow-brutal'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
