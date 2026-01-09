import { cvData } from '@/lib/data/cv';

export default function Home() {
  const projects = cvData.side_projects;

  return (
    <div className="space-y-10">
      {/* about */}
      <section className="space-y-4">
        <h1 className="text-xl text-[#e0e0e0] pb-2">about</h1>
        <p className="leading-relaxed">
          I build web apps with Ruby on Rails, Hotwire, and Stimulus. I like server-rendered HTML, minimal JavaScript, and clean code that&apos;s easy to maintain. Lately, I&apos;ve been using agentic coding tools daily and it&apos;s made me significantly more productive. If you need help shipping something reliable, feel free to{' '}
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
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
