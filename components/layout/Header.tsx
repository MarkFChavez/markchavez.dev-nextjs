import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative py-6">
      <div className="text-center grid grid-cols-1 gap-4">
        {/* Profile section - brutalist styling */}
        <div className="flex items-center justify-center space-x-4">
          <div className="relative">
            <Image
              src="/me.jpg"
              alt="Mark Chavez"
              width={64}
              height={64}
              className="w-16 h-16 border-6 border-black shadow-brutal-sm"
            />
          </div>

          <div className="text-left">
            <Link href="/" className="block">
              <span className="text-2xl font-black tracking-tight text-black border-b-4 border-black hover:bg-black hover:text-white transition-colors px-1">
                @markfchavez
              </span>
            </Link>
          </div>
        </div>

        {/* Tech stack - monochrome pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          <span className="px-3 py-1.5 bg-black text-white border-4 border-black">
            RAILS
          </span>
          <span className="px-3 py-1.5 bg-white text-black border-4 border-black">
            HOTWIRE
          </span>
          <span className="px-3 py-1.5 bg-black text-white border-4 border-black">
            STIMULUS
          </span>
        </div>
      </div>
    </header>
  );
}
