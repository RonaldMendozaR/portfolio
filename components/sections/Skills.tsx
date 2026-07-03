import SectionTitle from "@/components/ui/SectionTitle";
import SkillCategoryCard from "@/components/ui/SkillCategoryCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                min-h-screen
                px-24
                py-32
            "
        >
            <div className="max-w-6xl mx-auto">

                <SectionTitle title="Tecnologías" />

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-8
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

            </div>
        </section>
    );
}