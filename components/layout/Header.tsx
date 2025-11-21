import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Bold geometric background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-electric-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center grid grid-cols-1 gap-3">
        {/* Profile section with bold styling */}
        <div className="flex items-center justify-center space-x-4">
          <div className="relative group">
            <Image
              src="/me.jpg"
              alt="Mark Chavez"
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg border-4 border-black shadow-brutal-sm transform transition-all group-hover:rotate-3 group-hover:shadow-brutal"
            />
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-electric-yellow border-2 border-black"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-electric-pink border-2 border-black"></div>
          </div>

          <div className="text-left">
            <Link href="/" className="block group">
              <span className="text-2xl font-black tracking-tight gradient-text-electric hover:animate-pulse">
                @markfchavez
              </span>
            </Link>
          </div>
        </div>

        {/* Tech stack with bold pill design */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          <span className="px-3 py-1.5 bg-bold-red text-white border-2 border-black shadow-brutal-sm transform hover:rotate-1 transition-transform">
            RAILS
          </span>
          <span className="px-3 py-1.5 bg-electric-yellow text-black border-2 border-black shadow-brutal-sm transform hover:-rotate-1 transition-transform">
            HOTWIRE
          </span>
          <span className="px-3 py-1.5 bg-electric-green text-black border-2 border-black shadow-brutal-sm transform hover:rotate-1 transition-transform">
            STIMULUS
          </span>
        </div>
      </div>
    </header>
  );
}
