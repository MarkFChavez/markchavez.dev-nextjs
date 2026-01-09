'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/'
      ? pathname.slice(0, -1)
      : pathname;
    return normalizedPathname === path;
  };

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/cv', label: 'cv' }
  ];

  return (
    <nav className="py-2">
      <div className="flex items-center gap-2">
        <span className="text-[#666]">/</span>
        {navItems.map((item, index) => {
          const active = isActive(item.path);
          return (
            <span key={item.path} className="flex items-center gap-2">
              <Link
                href={item.path}
                className={`transition-colors ${
                  active
                    ? 'text-white'
                    : 'text-[#a0a0a0] hover:text-[#e0e0e0]'
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && <span className="text-[#666]">/</span>}
            </span>
          );
        })}
        <span className="text-[#666]">/</span>
      </div>
    </nav>
  );
}
