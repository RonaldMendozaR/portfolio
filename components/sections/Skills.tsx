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
            <div className="max-w-5xl mx-auto">

                <h2 className="text-5xl font-bold text-white">
                    Tecnologías
                </h2>

                <div className="w-28 h-1 bg-blue-500 rounded-full mt-4 mb-12" />

                <div className="space-y-12">

                    {skillCategories.map((category) => (

                        <div key={category.title}>

                            <h3
                                className="
                                    text-2xl
                                    font-semibold
                                    text-blue-400
                                    mb-6
                                "
                            >
                                {category.title}
                            </h3>

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    gap-4
                                "
                            >

                                {category.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="
                                            rounded-full
                                            border
                                            border-slate-700
                                            bg-slate-900
                                            px-5
                                            py-3
                                            text-gray-300
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-blue-500
                                            hover:text-blue-400
                                        "
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}