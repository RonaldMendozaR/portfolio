import SectionTitle from "@/components/ui/SectionTitle";
import SkillCategoryCard from "@/components/ui/SkillCategoryCard";
import { skillCategories } from "@/data/skills";
import SectionContainer from "../layout/SectionContainer";

export default function Skills() {
    return (
        <SectionContainer id="skills">
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
        </SectionContainer>
    );
}