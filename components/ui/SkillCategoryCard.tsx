type SkillCategoryCardProps = {
    title: string;
    skills: string[];
};

export default function SkillCategoryCard({
    title,
    skills,
}: SkillCategoryCardProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
            "
        >
            <h3
                className="
                    text-2xl
                    font-semibold
                    text-blue-400
                    mb-6
                "
            >
                {title}
            </h3>

            <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (

                    <span
                        key={skill}
                        className="
                            rounded-full
                            border
                            border-slate-700
                            bg-slate-800
                            px-4
                            py-2
                            text-sm
                            text-gray-300
                            transition-all
                            duration-300
                            hover:border-blue-500
                            hover:text-blue-400
                        "
                    >
                        {skill}
                    </span>

                ))}

            </div>

        </div>
    );
}