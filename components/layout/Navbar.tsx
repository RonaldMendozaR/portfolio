import { heroData } from "@/data/hero";

export default function Navbar() {
    const menuItems = [
        {
            label: "Sobre mí",
            href: "#about",
        },
        {
            label: "Tecnologías",
            href: "#skills",
        },
        {
            label: "Proyectos",
            href: "#projects",
        },
        {
            label: "Contacto",
            href: "#contact",
        },
    ];

    return (

        <nav
            className="
                fixed
                top-0
                left-0
                w-full
                flex
                z-50
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
                {heroData.name}
            </h1>

            <ul className="flex gap-8 text-gray-300">

                {menuItems.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className="
                            cursor-pointer
                            hover:text-blue-400
                            transition-colors
                            duration-300
                        "
                        >
                        {item.label}
                        </a>
                    </li>
                ))}

            </ul>
 
        </nav>

    );
}