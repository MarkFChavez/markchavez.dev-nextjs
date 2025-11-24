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
    <nav className="relative py-6 bg-white border-b-8 border-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-6 py-3 font-black text-sm tracking-wider transition-all ${
                  active
                    ? 'bg-black text-white border-4 border-black shadow-brutal'
                    : 'bg-white text-black border-4 border-black shadow-brutal-sm hover:bg-black hover:text-white hover:shadow-brutal'
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
