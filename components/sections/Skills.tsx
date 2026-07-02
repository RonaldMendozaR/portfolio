import { skillCategories } from "@/data/skills";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-24 py-24"
    >
        
      <h2 className="text-5xl font-bold mb-4">
        Tecnologías
      </h2>

      <div className="w-32 h-1 bg-blue-500 rounded-full mb-16"></div>

      <div className="space-y-12">

        {skillCategories.map((category) => (

          <div key={category.title}>

            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">

              {category.skills.map((skill) => (

                <SkillBadge
                  key={skill}
                  name={skill}
                />

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}