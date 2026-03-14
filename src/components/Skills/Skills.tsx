import { SKILL_CATEGORIES } from "../../data/skills";
import { SectionHeader } from "../common/SectionHeader";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-8 py-24">
      <SectionHeader
        tag="Tech Stack"
        title="Skills"
        description="Technologies I work with daily to build production-grade applications."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}
