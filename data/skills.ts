import {
  FaReact,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiAndroidstudio,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",

    skills: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend",

    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "PHP",
        icon: FaPhp,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
    ],
  },

  {
    title: "Base de Datos",

    skills: [
      {
        name: "SQL Server",
        icon: FaDatabase,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },

  {
    title: "Herramientas",

    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "VS Code",
        icon: FaCode,
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
      },
    ],
  },
];