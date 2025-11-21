export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t-4 border-black bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="font-bold text-sm">
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
              className="text-sm font-bold hover:text-electric-pink transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://www.linkedin.com/in/markchavezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:text-electric-blue transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:mjfchavez@gmail.com"
              className="text-sm font-bold hover:text-electric-green transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
