import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center space-x-4">
        <Image
          src="/me.jpg"
          alt="Mark Chavez"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full opacity-90"
        />

        <div>
          <Link href="/" className="block">
            <span className="text-[#e0e0e0] hover:text-white transition-colors">
              @markfchavez
            </span>
            <p className="text-[#666]">
              Manila, Philippines
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
