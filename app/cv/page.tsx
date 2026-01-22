import Link from 'next/link';
import { cvData } from '@/lib/data/cv';

export default function CVPage() {
  const { work_experiences, education, skills, tools, side_projects } = cvData;

  return (
    <div className="space-y-12">
      {/* back */}
      <div>
        <Link
          href="/"
          className="text-[#e0e0e0] hover:text-white transition-colors"
        >
          &lt;- back
        </Link>
      </div>

      {/* header */}
      <header className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl text-[#e0e0e0]">Mark Chavez</h1>
          <a
            href="/mark-chavez-cv.pdf"
            download="mark-chavez-cv.pdf"
            className="text-[#e0e0e0] hover:text-white transition-colors"
          >
            download pdf -&gt;
          </a>
        </div>

        <div className="text-[#666] space-y-1">
          <p>Manila, Philippines</p>
          <p>mjfchavez@gmail.com</p>
          <p>github.com/markfchavez</p>
        </div>
      </header>

      {/* about */}
      <section>
        <p className="leading-relaxed">
          Software engineer with 10+ years of experience building web applications across childcare, healthcare,
          finance, and telecom industries. Deep expertise in Ruby on Rails, Hotwire, and Stimulus for creating modern,
          server-rendered experiences with minimal JavaScript. Agentic coding tools are now central to my workflow—making
          me faster and more adaptable across stacks. Focused on clean architecture and pragmatic solutions that scale.
        </p>
      </section>

      {/* work experience */}
      <section className="space-y-8">
        <h2 className="text-[#e0e0e0]">work experience</h2>

        <div className="space-y-8">
          {work_experiences.map((work, index) => (
            <div key={index} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="text-[#a0a0a0]">{work.employer}</h3>
                  <p className="text-[#666]">{work.role}</p>
                </div>
                <span className="text-[#666]">{work.duration}</span>
              </div>

              <ul className="space-y-2">
                {work.responsibilities.map((r, idx) => (
                  <li key={idx} className="leading-relaxed flex">
                    <span className="text-[#e0e0e0] mr-3">&gt;</span>
                    <span className="text-[#a0a0a0]">{r}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-[#1a1a1a] text-[#e0e0e0] border border-[#333]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* education */}
      <section className="space-y-6">
        <h2 className="text-[#e0e0e0]">education</h2>

        {education.map((school, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3 className="text-[#a0a0a0]">{school.name}</h3>
                <p className="text-[#666]">{school.course}</p>
                <p className="text-[#666]">{school.major}</p>
              </div>
              <span className="text-[#666]">{school.years}</span>
            </div>

            <ul className="text-[#666]">
              {school.highlights.map((h, idx) => (
                <li key={idx}>- {h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* skills & tools */}
      <div className="grid sm:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-[#e0e0e0]">skills</h2>
          <p className="text-[#666]">{skills.join(', ')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#e0e0e0]">tools</h2>
          <p className="text-[#666]">{tools.join(', ')}</p>
        </section>
      </div>

      {/* side projects */}
      <section className="space-y-6">
        <h2 className="text-[#e0e0e0]">side projects</h2>

        <div className="space-y-6">
          {side_projects.map((project) => (
            <div key={project.name} className="space-y-1">
              <h3 className="text-[#e0e0e0]">{project.name}</h3>
              <p className="text-[#666]">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* back */}
      <div>
        <Link
          href="/"
          className="text-[#e0e0e0] hover:text-white transition-colors"
        >
          &lt;- back
        </Link>
      </div>
    </div>
  );
}
