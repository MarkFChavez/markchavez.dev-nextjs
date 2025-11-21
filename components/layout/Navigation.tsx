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
      label: 'HOME',
      activeColor: 'bg-electric-pink text-white',
      hoverColor: 'hover:bg-electric-pink hover:text-white',
      accentColor: 'bg-electric-yellow'
    },
    {
      path: '/projects',
      label: 'PROJECTS',
      activeColor: 'bg-electric-green text-black',
      hoverColor: 'hover:bg-electric-green',
      accentColor: 'bg-electric-pink'
    },
    {
      path: '/uses',
      label: 'USES',
      activeColor: 'bg-electric-yellow text-black',
      hoverColor: 'hover:bg-electric-yellow',
      accentColor: 'bg-electric-pink'
    },
    {
      path: '/cv',
      label: 'CV',
      activeColor: 'bg-electric-blue text-black',
      hoverColor: 'hover:bg-electric-blue',
      accentColor: 'bg-electric-green'
    }
  ];

  return (
    <nav className="relative py-4 overflow-hidden">
      {/* Diagonal stripe background */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-pink via-electric-yellow to-electric-blue opacity-20 transform skew-y-2"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative px-5 py-2.5 font-black text-sm tracking-wider transition-all ${
                  active
                    ? `${item.activeColor} border-4 border-black shadow-brutal-sm`
                    : `bg-white text-black border-4 border-black ${item.hoverColor} hover:shadow-brutal-sm`
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <div className={`absolute -top-1 -right-1 w-3 h-3 ${item.accentColor} border-2 border-black animate-pulse`}></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-electric"></div>
    </nav>
  );
}
