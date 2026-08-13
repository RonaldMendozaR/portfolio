import SectionLayout from "@/components/layout/SectionLayout";
import SkillCategoryCard from "@/components/ui/SkillCategoryCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionLayout
      id="skills"
      title="Tecnologías"
      subtitle="Tecnologías y herramientas que utilizo para desarrollar soluciones modernas."
    >
      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >
        {skillCategories.map((category) => (
          <SkillCategoryCard
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </SectionLayout>
  );
}