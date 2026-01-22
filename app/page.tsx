import { cvData } from '@/lib/data/cv';

export default function Home() {
  const projects = cvData.side_projects;

  return (
    <div className="space-y-10">
      {/* about */}
      <section className="space-y-4">
        <h1 className="text-xl text-[#e0e0e0] pb-2">about</h1>
        <p className="leading-relaxed">
          I build web apps with Ruby on Rails, Hotwire, and Stimulus—but I&apos;m not locked into any stack. I favor server-rendered HTML, minimal JavaScript, and clean code that&apos;s easy to maintain. Agentic coding tools have become central to my daily workflow, making me faster and more adaptable across technologies. If you need help shipping something reliable, feel free to{' '}
          <a
            href="mailto:mjfchavez@gmail.com"
            className="text-[#e0e0e0] hover:text-white transition-colors"
          >
            reach out
          </a>.
        </p>
      </section>

      {/* projects */}
      <section className="space-y-4">
        <h2 className="text-xl text-[#e0e0e0] pb-2">projects</h2>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="text-[#e0e0e0]">{project.name}</div>
              <div className="text-[#666]">{project.description}</div>
              {project.web_url && (
                <a
                  href={project.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0a0] underline underline-offset-4 decoration-[#666] hover:text-white hover:decoration-white transition-colors"
                >
                  {project.web_url.replace(/^https?:\/\//, '').replace(/\/$/, '')} -&gt;
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
