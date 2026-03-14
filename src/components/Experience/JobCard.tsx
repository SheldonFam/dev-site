import type { Job } from "../../data/experience";
import { Card } from "../common/Card";
import { TechBadge } from "../common/TechBadge";

interface JobCardProps {
  readonly job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
        <div>
          <div className="text-lg font-bold text-text-primary">{job.role}</div>
          <div className="text-accent text-sm">{job.company}</div>
        </div>
        <span className="text-xs text-text-secondary bg-badge-bg px-3 py-1 rounded-full border border-border-custom whitespace-nowrap w-fit">
          {job.date}
        </span>
      </div>

      {job.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 my-4">
          {job.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      )}

      {job.bullets.length > 0 && (
        <ul className="list-none space-y-2 mt-4">
          {job.bullets.map((b, i) => (
            <li
              key={i}
              className="relative pl-4 text-sm text-text-secondary leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-accent"
            >
              {b}
            </li>
          ))}
        </ul>
      )}

      {job.projects.length > 0 && (
        <div className="mt-5 space-y-6">
          {job.projects.map((project) => (
            <div key={project.name}>
              <div className="text-sm font-semibold text-text-primary mb-2">
                {project.name}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <ul className="list-none space-y-2">
                {project.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm text-text-secondary leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-accent"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
