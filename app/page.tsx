import Link from 'next/link';
import { cvData } from '@/lib/data/cv';
import { readingData } from '@/lib/data/reading';

export default function Home() {
  const latestProject = cvData.side_projects[0];
  const currentBook = readingData.current_book;

  return (
    <>
      {/* ABOUT SECTION - LOUD INTRO */}
      <section className="relative overflow-hidden mb-12">
        {/* Decorative geometric shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-pink opacity-20 rotate-45 border-8 border-black"></div>
        <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-electric-yellow opacity-20 rounded-full border-8 border-black"></div>

        <div className="relative z-10 space-y-6">
          {/* Bold section header */}
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-electric-pink text-white px-6 py-3 border-6 border-black shadow-brutal-lg transform -rotate-1">
              ABOUT
            </h1>
            <div className="h-2 bg-gradient-electric mt-1"></div>
          </div>

          {/* Content with bold emphasis */}
          <div className="space-y-4 text-base leading-relaxed">
            <p className="bg-white border-4 border-black p-6 shadow-brutal">
              Hello, I&apos;m <span className="font-black text-electric-pink">Mark</span>. I specialize in building modern web applications with
              <span className="bg-bold-red text-white px-2 py-0.5 font-bold"> Ruby on Rails</span>,
              <span className="bg-electric-yellow text-black px-2 py-0.5 font-bold"> Hotwire</span>, and
              <span className="bg-electric-green text-black px-2 py-0.5 font-bold"> Stimulus</span>.
              My approach favors server-rendered HTML, minimal JavaScript, and leveraging the full power of Rails to deliver fast, maintainable applications. I care deeply about readable code, performance, and shipping reliable products end to end.
            </p>

            <p className="bg-electric-blue bg-opacity-10 border-4 border-electric-blue p-6 shadow-brutal-sm transform rotate-1">
              I&apos;ve worked across <span className="font-bold">childcare, healthcare, finance/crypto, and telecom</span> companies, helping teams design and deliver reliable, scalable web applications. Whether it&apos;s complex billing systems, real-time features with Turbo Streams, or interactive UI with Stimulus controllers, I focus on pragmatic solutions that scale as needs grow.
            </p>

            {/* Currently Reading Inline Badge */}
            <div className="bg-white border-4 border-electric-blue p-4 shadow-brutal-sm hover:shadow-brutal transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <span className="text-sm font-bold text-electric-blue">Currently reading:</span>
                  {currentBook.link ? (
                    <a
                      href={currentBook.link}
                      className="text-base font-black ml-2"
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
            <div className="bg-white border-4 border-electric-pink p-6 shadow-brutal hover:shadow-brutal-lg transition-all transform -rotate-1">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-lg font-black text-electric-pink tracking-tight">LATEST PROJECT</h3>
                </div>

                {/* Project Name */}
                <div>
                  {latestProject.web_url ? (
                    <a
                      href={latestProject.web_url}
                      className="text-2xl font-black hover:text-electric-pink transition-all"
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
                        className="bg-black text-electric-pink px-3 py-1 text-xs font-bold border-2 border-electric-pink"
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
                      className="inline-block bg-black text-electric-pink px-4 py-2 border-4 border-electric-pink font-black text-sm hover:bg-electric-pink hover:text-black transition-all shadow-brutal-sm hover:shadow-brutal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT →
                    </a>
                  ) : (
                    <a
                      href="https://github.com/markchavez"
                      className="inline-block bg-black text-electric-pink px-4 py-2 border-4 border-electric-pink font-black text-sm hover:bg-electric-pink hover:text-black transition-all shadow-brutal-sm hover:shadow-brutal"
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
            <div className="bg-electric-yellow bg-opacity-20 border-4 border-electric-yellow p-4 shadow-brutal-sm hover:shadow-brutal transition-all transform rotate-1">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛠️</span>
                  <span className="text-base font-bold">Curious about my tools and setup?</span>
                </div>
                <Link
                  href="/uses"
                  className="bg-black text-electric-yellow px-4 py-2 border-4 border-electric-yellow font-black text-sm hover:bg-electric-yellow hover:text-black transition-all shadow-brutal-sm hover:shadow-brutal"
                >
                  VIEW USES →
                </Link>
              </div>
            </div>

            {/* Side Projects Link */}
            <div className="bg-electric-green bg-opacity-20 border-4 border-electric-green p-4 shadow-brutal-sm hover:shadow-brutal transition-all transform -rotate-1">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-base font-bold">Want to see what I&apos;ve built?</span>
                </div>
                <Link
                  href="/projects"
                  className="bg-black text-electric-green px-4 py-2 border-4 border-electric-green font-black text-sm hover:bg-electric-green hover:text-black transition-all shadow-brutal-sm hover:shadow-brutal"
                >
                  VIEW PROJECTS →
                </Link>
              </div>
            </div>

            <div className="relative bg-gradient-electric p-1 shadow-brutal-lg">
              <div className="bg-white p-6 border-4 border-black">
                <p className="text-center text-lg font-bold">
                  Welcome and thanks for stopping by. Feel free to explore my work, and
                  <a
                    href="mailto:mjfchavez@gmail.com"
                    className="inline-block bg-black text-electric-yellow px-3 py-1 border-2 border-electric-yellow hover:bg-electric-yellow hover:text-black transition-all transform hover:scale-105 ml-1"
                  >
                    REACH OUT
                  </a>
                  {' '}if something sparks an idea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - BRUTALIST CARDS */}
      <section className="relative mb-12">
        <div className="inline-block mb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-electric-yellow text-black px-6 py-3 border-6 border-black shadow-brutal-lg transform rotate-1">
            WHAT I BRING
          </h1>
          <div className="h-2 bg-gradient-neon mt-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Rails */}
          <div className="group relative bg-bold-red border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all transform hover:-translate-y-1">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-electric-yellow border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              ⚙️
            </div>
            <div className="p-6 pt-14 text-white">
              <h3 className="text-2xl font-black mb-3 tracking-tight">RAILS-FIRST ARCHITECTURE</h3>
              <p className="text-sm leading-relaxed">
                I build with Rails conventions and patterns that stand the test of time. Clean models, purposeful
                controllers, and views that leverage Rails&apos; full capabilities without fighting the framework.
              </p>
            </div>
            <div className="h-2 bg-black"></div>
          </div>

          {/* Card 2: Hotwire */}
          <div className="group relative bg-electric-yellow border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all transform hover:-translate-y-1">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-electric-pink border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              ⚡
            </div>
            <div className="p-6 pt-14 text-black">
              <h3 className="text-2xl font-black mb-3 tracking-tight">HOTWIRE FOR MODERN UX</h3>
              <p className="text-sm leading-relaxed">
                Real-time updates with Turbo Streams, seamless navigation with Turbo Drive, and partial page updates
                with Turbo Frames. I build responsive, app-like experiences without heavy JavaScript frameworks.
              </p>
            </div>
            <div className="h-2 bg-black"></div>
          </div>

          {/* Card 3: Stimulus */}
          <div className="group relative bg-electric-blue border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all transform hover:-translate-y-1">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-electric-green border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              🎯
            </div>
            <div className="p-6 pt-14 text-black">
              <h3 className="text-2xl font-black mb-3 tracking-tight">STIMULUS INTERACTIVITY</h3>
              <p className="text-sm leading-relaxed">
                Sprinkles of JavaScript exactly where needed. I write focused Stimulus controllers that enhance HTML
                with behavior while keeping the DOM as the source of truth.
              </p>
            </div>
            <div className="h-2 bg-black"></div>
          </div>

          {/* Card 4: Problem Solving */}
          <div className="group relative bg-electric-purple border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all transform hover:-translate-y-1">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-bold-yellow border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              🧩
            </div>
            <div className="p-6 pt-14 text-white">
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
      <section className="relative overflow-hidden">
        {/* Explosive background */}
        <div className="absolute inset-0 bg-gradient-electric opacity-30"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-electric-pink opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-electric-blue opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>

        <div className="relative z-10 text-center py-12">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-black text-electric-yellow px-8 py-4 border-6 border-electric-yellow shadow-brutal-lg animate-pop">
              HIRE ME!
            </h1>
            <div className="h-2 bg-gradient-electric mt-1"></div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl font-bold">Ready to build something amazing together?</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:mjfchavez@gmail.com"
                className="group relative bg-electric-pink text-white px-8 py-4 border-4 border-black font-black text-lg hover:bg-white hover:text-electric-pink transition-all shadow-brutal hover:shadow-brutal-lg transform hover:scale-105"
              >
                <span className="relative z-10">EMAIL ME</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-electric-yellow border-2 border-black group-hover:animate-wiggle"></div>
              </a>

              <Link
                href="/cv"
                className="group relative bg-black text-electric-blue px-8 py-4 border-4 border-electric-blue font-black text-lg hover:bg-electric-blue hover:text-black transition-all shadow-brutal hover:shadow-brutal-lg transform hover:scale-105"
              >
                <span className="relative z-10">VIEW CV</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-electric-green border-2 border-black group-hover:animate-wiggle"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
