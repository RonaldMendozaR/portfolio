import Image from "next/image";

import Background from "@/components/common/Background";
import Button from "@/components/ui/Button";
import SkillBadge from "@/components/ui/SkillBadge";

import { heroData } from "@/data/hero";

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
      <Background />

      <div
        className="
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          w-96
          h-96
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Contenido */}
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
          👋 {heroData.status}
        </span>

        <p className="text-xl text-gray-400">
          {heroData.greeting}
        </p>

        <h1
          className="
            mt-3
            text-7xl
            font-bold
            text-white
          "
        >
          {heroData.name}
        </h1>

        <h2
          className="
            mt-3
            text-4xl
            font-semibold
            text-blue-400
          "
        >
          {heroData.title}
        </h2>

        <p
          className="
            mt-2
            text-2xl
            text-gray-300
          "
        >
          {heroData.subtitle}
        </p>

        <p
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
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

        <div className="mt-12">
          <p
            className="
              mb-4
              text-sm
              text-gray-500
            "
          >
            {heroData.technologyTitle}
          </p>

          <div className="flex flex-wrap gap-3">
            {heroData.featuredTechnologies.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-center
        "
      >
        <Image
          src="/images/profile/profile.png"
          alt="Foto de Ronald Mendoza"
          width={360}
          height={360}
          priority
          className="
            rounded-full
            border-[5px]
            border-blue-500
            object-cover
            shadow-[0_0_60px_rgba(59,130,246,0.45)]
          "
        />
      </div>
    </section>
  );
}