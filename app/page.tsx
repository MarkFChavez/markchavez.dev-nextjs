import Link from 'next/link';
import { cvData } from '@/lib/data/cv';
import { readingData } from '@/lib/data/reading';

export default function Home() {
  const latestProject = cvData.side_projects[0];
  const currentBook = readingData.current_book;

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="relative mb-12">
        <div className="space-y-6">
          {/* Bold section header */}
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-black text-white px-6 py-3 border-6 border-black shadow-brutal-lg">
              ABOUT
            </h1>
          </div>

          {/* Content with bold emphasis */}
          <div className="space-y-4 text-base leading-relaxed">
            <p className="bg-white border-6 border-black p-6 shadow-brutal">
              Hello, I&apos;m <span className="font-black">Mark</span>. I specialize in building modern web applications with
              <span className="bg-black text-white px-2 py-0.5 font-bold"> Ruby on Rails</span>,
              <span className="bg-black text-white px-2 py-0.5 font-bold"> Hotwire</span>, and
              <span className="bg-black text-white px-2 py-0.5 font-bold"> Stimulus</span>.
              My approach favors server-rendered HTML, minimal JavaScript, and leveraging the full power of Rails to deliver fast, maintainable applications. I care deeply about readable code, performance, and shipping reliable products end to end.
            </p>

            <p className="bg-white border-6 border-black p-6 shadow-brutal">
              I&apos;ve worked across <span className="font-bold">childcare, healthcare, finance/crypto, and telecom</span> companies, helping teams design and deliver reliable, scalable web applications. Whether it&apos;s complex billing systems, real-time features with Turbo Streams, or interactive UI with Stimulus controllers, I focus on pragmatic solutions that scale as needs grow.
            </p>

            {/* Currently Reading Inline Badge */}
            <div className="bg-white border-6 border-black p-4 shadow-brutal">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">▶</span>
                <div>
                  <span className="text-sm font-bold">Currently reading:</span>
                  {currentBook.link ? (
                    <a
                      href={currentBook.link}
                      className="text-base font-black ml-2 underline decoration-4 underline-offset-4 hover:bg-black hover:text-white hover:no-underline px-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {currentBook.title.toUpperCase()}
                    </a>
                  ) : (
                    <span className="text-base font-black ml-2">{currentBook.title.toUpperCase()}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Latest Project Featured Box */}
            <div className="bg-white border-6 border-black p-6 shadow-brutal-lg">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black">★</span>
                  <h3 className="text-lg font-black tracking-tight">LATEST PROJECT</h3>
                </div>

                {/* Project Name */}
                <div>
                  {latestProject.web_url ? (
                    <a
                      href={latestProject.web_url}
                      className="text-2xl font-black underline decoration-4 underline-offset-4 hover:bg-black hover:text-white hover:no-underline px-1 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {latestProject.name.toUpperCase()}
                    </a>
                  ) : (
                    <h4 className="text-2xl font-black">{latestProject.name.toUpperCase()}</h4>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed">{latestProject.description}</p>

                {/* Tech Stack */}
                {latestProject.stack && (
                  <div className="flex flex-wrap gap-2">
                    {latestProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-black"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Button */}
                <div className="pt-2">
                  {latestProject.web_url ? (
                    <a
                      href={latestProject.web_url}
                      className="inline-block bg-black text-white px-4 py-2 border-4 border-black font-black text-sm hover:bg-white hover:text-black transition-all shadow-brutal-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT →
                    </a>
                  ) : (
                    <a
                      href="https://github.com/markchavez"
                      className="inline-block bg-black text-white px-4 py-2 border-4 border-black font-black text-sm hover:bg-white hover:text-black transition-all shadow-brutal-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW ON GITHUB →
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Uses Link */}
            <div className="bg-white border-6 border-black p-4 shadow-brutal">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black">■</span>
                  <span className="text-base font-bold">Curious about my tools and setup?</span>
                </div>
                <Link
                  href="/uses"
                  className="bg-black text-white px-4 py-2 border-4 border-black font-black text-sm hover:bg-white hover:text-black transition-all"
                >
                  VIEW USES →
                </Link>
              </div>
            </div>

            {/* Side Projects Link */}
            <div className="bg-white border-6 border-black p-4 shadow-brutal">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black">▲</span>
                  <span className="text-base font-bold">Want to see what I&apos;ve built?</span>
                </div>
                <Link
                  href="/projects"
                  className="bg-black text-white px-4 py-2 border-4 border-black font-black text-sm hover:bg-white hover:text-black transition-all"
                >
                  VIEW PROJECTS →
                </Link>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-6 shadow-brutal-lg">
              <p className="text-center text-lg font-bold">
                Welcome and thanks for stopping by. Feel free to explore my work, and
                <a
                  href="mailto:mjfchavez@gmail.com"
                  className="inline-block bg-black text-white px-3 py-1 border-2 border-black hover:bg-white hover:text-black transition-all ml-1"
                >
                  REACH OUT
                </a>
                {' '}if something sparks an idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - BRUTALIST CARDS */}
      <section className="relative mb-12">
        <div className="inline-block mb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-black text-white px-6 py-3 border-6 border-black shadow-brutal-lg">
            WHAT I BRING
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Rails */}
          <div className="group relative bg-white border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-black border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-white font-black">■</span>
            </div>
            <div className="p-6 pt-14">
              <h3 className="text-2xl font-black mb-3 tracking-tight">RAILS-FIRST ARCHITECTURE</h3>
              <p className="text-sm leading-relaxed">
                I build with Rails conventions and patterns that stand the test of time. Clean models, purposeful
                controllers, and views that leverage Rails&apos; full capabilities without fighting the framework.
              </p>
            </div>
            <div className="h-2 bg-black"></div>
          </div>

          {/* Card 2: Hotwire */}
          <div className="group relative bg-black border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-black font-black">▲</span>
            </div>
            <div className="p-6 pt-14 text-white">
              <h3 className="text-2xl font-black mb-3 tracking-tight">HOTWIRE FOR MODERN UX</h3>
              <p className="text-sm leading-relaxed">
                Real-time updates with Turbo Streams, seamless navigation with Turbo Drive, and partial page updates
                with Turbo Frames. I build responsive, app-like experiences without heavy JavaScript frameworks.
              </p>
            </div>
            <div className="h-2 bg-white"></div>
          </div>

          {/* Card 3: Stimulus */}
          <div className="group relative bg-black border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-black font-black">●</span>
            </div>
            <div className="p-6 pt-14 text-white">
              <h3 className="text-2xl font-black mb-3 tracking-tight">STIMULUS INTERACTIVITY</h3>
              <p className="text-sm leading-relaxed">
                Sprinkles of JavaScript exactly where needed. I write focused Stimulus controllers that enhance HTML
                with behavior while keeping the DOM as the source of truth.
              </p>
            </div>
            <div className="h-2 bg-white"></div>
          </div>

          {/* Card 4: Problem Solving */}
          <div className="group relative bg-white border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-black border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-white font-black">◆</span>
            </div>
            <div className="p-6 pt-14">
              <h3 className="text-2xl font-black mb-3 tracking-tight">PRAGMATIC SOLUTIONS</h3>
              <p className="text-sm leading-relaxed">
                Whether it&apos;s migrating payment processors, building complex billing systems, or scaling background
                jobs, I focus on solutions that work today and adapt tomorrow.
              </p>
            </div>
            <div className="h-2 bg-black"></div>
          </div>
        </div>
      </section>

      {/* HIRE ME SECTION - CALL TO ACTION */}
      <section className="relative border-8 border-black bg-white p-8 shadow-brutal-xl">
        <div className="text-center py-8">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-black text-white px-8 py-4 border-6 border-black shadow-brutal-lg">
              HIRE ME!
            </h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl font-black">Ready to build something amazing together?</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:mjfchavez@gmail.com"
                className="bg-black text-white px-8 py-4 border-6 border-black font-black text-lg hover:bg-white hover:text-black transition-all shadow-brutal"
              >
                EMAIL ME
              </a>

              <Link
                href="/cv"
                className="bg-white text-black px-8 py-4 border-6 border-black font-black text-lg hover:bg-black hover:text-white transition-all shadow-brutal"
              >
                VIEW CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
