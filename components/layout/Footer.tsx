export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t-8 border-black bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="font-black text-sm">
              © {currentYear} Mark Chavez
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Rails Developer • Building web stuff.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/markfchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline decoration-2 underline-offset-4 hover:bg-black hover:text-white hover:no-underline px-2 py-1 transition-all"
            >
              GitHub
            </a>
            <span className="text-black font-bold">|</span>
            <a
              href="https://www.linkedin.com/in/markchavezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline decoration-2 underline-offset-4 hover:bg-black hover:text-white hover:no-underline px-2 py-1 transition-all"
            >
              LinkedIn
            </a>
            <span className="text-black font-bold">|</span>
            <a
              href="mailto:mjfchavez@gmail.com"
              className="text-sm font-bold underline decoration-2 underline-offset-4 hover:bg-black hover:text-white hover:no-underline px-2 py-1 transition-all"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
