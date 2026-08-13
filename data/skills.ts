import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiDotnet,
  SiMysql,
  SiGit,
  SiGithub,
  SiAndroidstudio,
} from "react-icons/si";

import { FaJava, FaMicrosoft } from "react-icons/fa";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: SiReact,
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
        icon: SiPhp,
      },
      {
        name: "C# / .NET",
        icon: FaMicrosoft,
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
        icon: FaMicrosoft,
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
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "VS Code",
        icon: FaMicrosoft,
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
      },
    ],
  },
];