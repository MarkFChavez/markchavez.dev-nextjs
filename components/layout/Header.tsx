import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-3 bg-white/80 backdrop-blur-md">
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
      </div>
    </header>
  );
}
