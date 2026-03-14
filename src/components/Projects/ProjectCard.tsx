import { ExternalLink } from "lucide-react";
import type { Project } from "../../data/projects";
import { TechBadge } from "../common/TechBadge";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface border border-border-custom rounded-xl p-7 transition-all duration-200 hover:border-accent-border hover:-translate-y-0.5 no-underline block"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-text-primary">
          {project.title}
        </h3>
        <ExternalLink
          size={16}
          className="text-text-muted group-hover:text-accent transition-colors shrink-0"
        />
      </div>
      <p className="text-sm text-text-secondary mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </a>
  );
}
