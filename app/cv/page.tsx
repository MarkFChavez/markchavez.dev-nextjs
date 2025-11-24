import Link from 'next/link';
import { cvData } from '@/lib/data/cv';

export default function CVPage() {
  const { work_experiences, education, skills, tools, side_projects } = cvData;

  return (
    <section className="grid grid-cols-1 gap-8">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all text-sm font-bold shadow-brutal-sm"
        >
          ← BACK TO HOME
        </Link>
      </div>

      {/* Header Section */}
      <div id="head" className="relative">
        <div className="border-l-8 border-black pl-6 space-y-4">
          <div className="flex items-end justify-between">
            <h1 className="font-black text-4xl tracking-tight">Mark Chavez</h1>
            <a
              href="/mark-chavez-cv.pdf"
              download="mark-chavez-cv.pdf"
              className="px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all text-xs font-bold"
            >
              DOWNLOAD PDF
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-black">■</span>
              <span className="font-medium">Manila, Philippines, PHT</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black">■</span>
              <span className="font-medium">https://markchavez.dev</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black">■</span>
              <span className="font-medium">mjfchavez@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black">■</span>
              <span className="font-medium">github.com/markfchavez</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white border-l-8 border-black pl-6 py-4">
        <p className="text-sm leading-relaxed">
          Ruby on Rails specialist with 10+ years of experience building web applications across childcare, healthcare,
          finance, and telecom industries. Expert in Hotwire and Stimulus for creating modern, interactive experiences
          with minimal JavaScript. Focused on Rails conventions, clean architecture, and pragmatic solutions that scale.
          Self-learner who enjoys diving deep into frameworks and solving complex technical challenges.
        </p>
      </div>

      {/* Work Experience Section */}
      <div id="work-experiences">
        <h2 className="font-black text-2xl tracking-tight mb-6 border-b-4 border-black pb-2">Work Experience</h2>

        <div className="space-y-6">
          {work_experiences.map((work, index) => (
            <div
              key={index}
              className="relative border-l-6 border-black hover:border-l-8 transition-all pl-6 pb-6"
            >
              {/* Duration badge */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-black border-2 border-white"></div>

              <div className="space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-lg">{work.employer}</h3>
                    <p className="text-sm font-medium">{work.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold border-2 border-black">
                    {work.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {work.responsibilities.map((r, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start">
                      <span className="mr-2 flex-shrink-0 font-bold">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white border-2 border-black text-xs font-medium hover:bg-black hover:text-white transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div id="education">
        <h2 className="font-black text-2xl tracking-tight mb-6 border-b-4 border-black pb-2">Education</h2>

        <div className="space-y-4">
          {education.map((school, index) => (
            <div
              key={index}
              className="bg-white border-l-8 border-black pl-6 py-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-lg">{school.name}</h3>
                    <p className="text-sm font-medium">{school.course}</p>
                    <p className="text-sm italic">{school.major}</p>
                  </div>
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold border-2 border-black">
                    {school.years}
                  </span>
                </div>

                <ul className="space-y-1">
                  {school.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="mr-2 flex-shrink-0 font-black">★</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Tools Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <div id="skills">
          <h2 className="font-black text-2xl tracking-tight mb-6 border-b-4 border-black pb-2">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 bg-white border-2 border-black text-xs font-medium hover:bg-black hover:text-white transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div id="tools">
          <h2 className="font-black text-2xl tracking-tight mb-6 border-b-4 border-black pb-2">Tools</h2>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-2 bg-white border-2 border-black text-xs font-medium hover:bg-black hover:text-white transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects">
        <h2 className="font-black text-2xl tracking-tight mb-6 border-b-4 border-black pb-2">Side Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {side_projects.map((project) => (
            <div
              key={project.name}
              className="relative bg-white border-4 border-black hover:shadow-brutal transition-all p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-base font-bold">{project.name}</h3>
                  {project.web_url && (
                    <a
                      href={project.web_url}
                      className="text-xs underline decoration-2 underline-offset-2 hover:bg-black hover:text-white hover:no-underline font-medium break-all px-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.web_url}
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white border-2 border-black text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
