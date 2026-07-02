import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { skills } from "@/data/skills";

export default function Hero() {
    return (

        <section
        
            className="
                relative
                min-h-screen
                flex
                items-center
                justify-between
                px-24
                overflow-hidden
            "
            
        >
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

            <div className="relative z-10">

                <p className="text-gray-400 text-xl">
                    Hola, soy
                </p>

                <h1 className="text-7xl font-bold text-white mt-3">
                    {personalInfo.name}
                </h1>

                <h2 className="text-4xl text-blue-400 mt-3">
                    {personalInfo.role}
                </h2>

                <p
                    className="
                        text-gray-400
                        mt-8
                        max-w-xl
                        leading-8
                    "
                >
                    Desarrollo aplicaciones web modernas,
                    escalables y enfocadas en ofrecer una
                    excelente experiencia de usuario.
                </p>

                <div className="flex gap-4 mt-10">

                    <Button text="Ver proyectos" />

                    <Button text="Contáctame" />

                </div>

                <div className="flex flex-wrap gap-3 mt-10">

                    {skills.slice(0, 5).map((skill) => (

                        <span
                            key={skill}
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-slate-800
                                text-blue-400
                                text-sm
                            "
                        >
                            {skill}
                        </span>

                    ))}

                </div>
                

            </div>

            

            <div className="flex justify-center items-center relative z-10" >
                <Image
                    src="/images/profile.png"
                    alt="Foto de Ronald Mendoza"
                    width={350}
                    height={350}
                    className="
                        rounded-full
                        border-4
                        border-blue-500
                        shadow-[0_0_60px_rgba(59,130,246,0.45)]
                        object-cover
                    "
                />
            </div>

            

        </section>

    );
}