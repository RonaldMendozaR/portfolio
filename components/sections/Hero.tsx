import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { skillCategories } from "@/data/skills";
import Background from "@/components/common/Background";

export default function Hero() {
    return (

        <section
        
            className="
                relative
                min-h-screen
                flex
                items-center
                gap-50
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
            
            <div className="relative z-10">
                <span
                    className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        text-blue-400
                        text-sm
                        mb-6
                    "
                >
                    👋 {personalInfo.status}
                </span>
                

                <p className="text-gray-400 text-xl">
                    {personalInfo.greeting}
                </p>

                
                <h1 className="text-7xl font-bold text-white mt-3">
                    {personalInfo.name}
                </h1>

                <h2 className="text-4xl font-semibold text-blue-400 mt-5">
                    {personalInfo.title}
                </h2>

                <p className="text-2xl text-gray-300 mt-2">
                    {personalInfo.subtitle}
                </p>

                <p
                    className="
                  text-gray-400
                    text-lg
                    leading-9
                    max-w-xl
                "
                >
                    {personalInfo.heroDescription}
                </p>
                
                <div className="
              text-gray-400
                text-lg
                leading-9
                max-w-xl
                mb-10
                ">

                    <a href="#projects">
                        <Button text="Ver proyectos" />
                    </a>

                    <Button
                        text="Descargar CV"
                        variant="secondary"
                    />

                </div>
        
                <p
                    className="
                        text-gray-500
                        text-sm
                        mt-5
                    "
                >
                    {personalInfo.tittletecnology}
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                    
                    {skillCategories.flatMap((category) => category.skills).slice(0, 5).map((skill) => (
                        
                        <span
                            key={skill}
                            className="
                                px-4
                                py-2
                                rounded-full
                              bg-slate-900
                                border
                              border-slate-700
                                text-sm
                              hover:border-blue-500
                              hover:text-blue-400
                                transition-all
                                duration-300
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
                    width={380} 
                    height={380}
                    className="
                        rounded-full
                        border-[5px]
                        border-blue-500
                        shadow-[0_0_60px_rgba(59,130,246,0.45)]
                        object-cover
                        
                    "
                />
            </div>

            

        </section>

    );
}