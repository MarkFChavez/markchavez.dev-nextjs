export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#666]">
            {currentYear} Mark Chavez
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/markfchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-white transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/markchavezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-white transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:mjfchavez@gmail.com"
              className="text-[#e0e0e0] hover:text-white transition-colors"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
