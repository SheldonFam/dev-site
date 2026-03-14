import { PROJECTS } from "../../data/projects";
import { SectionHeader } from "../common/SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-8 py-24">
      <SectionHeader
        tag="Featured Work"
        title="Projects"
        description="High-impact platforms built for millions of users across Malaysia."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
