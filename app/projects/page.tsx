import { cvData } from '@/lib/data/cv';

export default function ProjectsPage() {
  const sideProjects = cvData.side_projects;

  return (
    <section className="relative mb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="inline-block">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-black text-white px-6 py-3 border-6 border-black shadow-brutal-lg">
            SIDE PROJECTS
          </h1>
        </div>
        <a
          href="https://github.com/markfchavez?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 border-4 border-black font-black text-sm hover:bg-white hover:text-black transition-all shadow-brutal-sm"
        >
          VIEW ON GITHUB →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sideProjects.map((project) => (
          <div
            key={project.name}
            className="group relative bg-white border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-2">
                    {project.web_url ? (
                      <a
                        href={project.web_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-4 underline-offset-4 hover:bg-black hover:text-white hover:no-underline px-1"
                      >
                        {project.name.toUpperCase()}
                      </a>
                    ) : (
                      project.name.toUpperCase()
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {/* Link Arrow */}
                  {project.web_url && (
                    <a href={project.web_url} target="_blank" rel="noopener noreferrer">
                      <div className="flex-shrink-0 w-10 h-10 bg-black text-white border-4 border-black flex items-center justify-center font-black text-xl hover:bg-white hover:text-black transition-all">
                        →
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
