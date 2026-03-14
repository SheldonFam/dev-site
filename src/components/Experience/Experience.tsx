import { JOBS } from "../../data/experience";
import { SectionHeader } from "../common/SectionHeader";
import { JobCard } from "./JobCard";

export function Experience() {
  return (
    <section id="experience" className="max-w-[1100px] mx-auto px-8 py-24">
      <SectionHeader
        tag="Career"
        title="Experience"
        description="From service engineering to shipping frontend at scale."
      />
      <div className="flex flex-col gap-5">
        {JOBS.map((job) => (
          <JobCard key={job.role + job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
