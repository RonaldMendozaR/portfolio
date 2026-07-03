import Image from "next/image";

import Background from "@/components/common/Background";
import Button from "@/components/ui/Button";
import { heroData } from "@/data/hero";
import { skillCategories } from "@/data/skills";

export default function Hero() {
    const featuredSkills = skillCategories
        .flatMap((category) => category.skills)
        .slice(0, 5);

    return (
        <section
            className="
                relative
                min-h-screen
                flex
                items-center
                justify-between
                gap-20
                px-24
                overflow-hidden
            "
        >
            <Background />

            <div
                className="
                    absolute
                    right-20
                    top-1/2
                    -translate-y-1/2
                    w-96
                    h-96
                    bg-blue-500/20
                    rounded-full
                    blur-3xl
                "
            />

            {/* Texto */}
            <div className="relative z-10 max-w-2xl">

                <span
                    className="
                        inline-block
                        px-4
                        py-2
                        mb-6
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        text-sm
                        text-blue-400
                    "
                >
                     {heroData.status}
                </span>

                <p className="text-xl text-gray-400 mb-2">
                    {heroData.greeting}
                </p>

                <h1 className="text-7xl font-bold text-white leading-tight">
                    {heroData.name}
                </h1>

                <h2 className="mt-6 text-4xl font-semibold text-blue-400">
                    {heroData.title}
                </h2>

                <p className="mt-2 text-2xl text-gray-300">
                    {heroData.subtitle}
                </p>

                <p
                    className="
                        mt-8
                        max-w-xl
                        text-lg
                        leading-9
                        text-gray-400
                    "
                >
                    {heroData.heroDescription}
                </p>

                <div className="mt-10 flex gap-4">

                    <a href="#projects">
                        <Button text="Ver proyectos" />
                    </a>

                    <Button
                        text="Descargar CV"
                        variant="secondary"
                    />

                </div>

                <div className="mt-10">

                    <p className="mb-4 text-sm text-gray-500">
                        {heroData.technologyTitle}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {featuredSkills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                            <span
                                key={skill.name}
                                className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-slate-700
                                bg-slate-900
                                px-4
                                py-2
                                text-sm
                                text-gray-300
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-500
                                hover:text-blue-400
                                "
                            >
                                <Icon size={16} />

                                {skill.name}
                            </span>
                            );
                        })}
                    </div>

                </div>

            </div>

            {/* Imagen */}
            <div className="relative z-10 flex items-center justify-center">

                <Image
                    src="/images/profile.png"
                    alt="Foto de Ronald Mendoza"
                    width={380}
                    height={380}
                    className="
                        rounded-full
                        border-[5px]
                        border-blue-500
                        object-cover
                        shadow-[0_0_60px_rgba(59,130,246,0.45)]
                        transition-all
                        duration-500
                        hover:scale-105
                    "
                />

            </div>

        </section>
    );
}