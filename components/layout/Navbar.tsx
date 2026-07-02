import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
    return (

        <nav
            className="
                fixed
                top-0
                left-0
                w-full
                flex
                justify-between
                items-center
                px-10
                py-6
                bg-slate-950/70
                backdrop-blur-md
            "
        >

            <h1
                className="
                    text-xl
                    font-bold
                    text-white
                "
            >
                {personalInfo.name}
            </h1>

            <ul
                className="
                    flex
                    gap-8
                    text-gray-300
                "
            >
                <li>Sobre mí</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>

        </nav>

    );
}