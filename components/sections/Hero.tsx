import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
    return (

        <section
            className="
                min-h-screen
                flex
                items-center
                justify-between
                px-24
            "
        >

            <div>

                <p className="text-gray-400 text-xl">
                    Hola, soy
                </p>

                <h1 className="text-6xl font-bold text-white mt-3">
                    {personalInfo.name}
                </h1>

                <h2 className="text-3xl text-blue-400 mt-3">
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

            </div>

            <div>

                FOTO

            </div>

        </section>

    );
}