import {
  SiNextdotjs,
  SiVercel,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiSpringboot,
  SiTailwindcss,
  SiJetbrains,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  FaAndroid,
  FaPython,
  FaJava,
  FaCss3,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    Languages: [
      {
        name: "Python",
        icon: (
          <FaPython
            className="md:text-4xl text-2xl"
            color="#000000 dark-color=[#FFFFFF]"
          />
        ),
      },
      {
        name: "Java",
        icon: (
          <FaJava
            className="md:text-4xl text-2xl"
            color="#000000 dark-color=[#FFFFFF]"
          />
        ),
      },
      {
        name: "C",
        icon: (
          <span className="md:text-4xl text-2xl font-bold text-blue-600">
            C
          </span>
        ),
      },
      {
        name: "C++",
        icon: (
          <span className="md:text-4xl text-2xl font-bold text-red-600">
            C++
          </span>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <SiJavascript className="md:text-4xl text-2xl" color={"#F7DF1E"} />
        ),
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#3178C6" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="md:text-4xl text-2xl" color="#E34F26" />,
      },
      {
        name: "CSS",
        icon: <FaCss3 className="md:text-4xl text-2xl" color="#1572B6" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xsl" color="#4479A1" />,
      },
    ],
    Tech: [
      {
        name: "Next.js",
        icon: (
          <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "React",
        icon: <FaReact className="md:text-4xl text-2xl" color="#61DAFB" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#47A248" />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="md:text-4xl text-2xl" color="#6DB33F" />,
      },
      {
        name: "Android Studio",
        icon: <FaAndroid className="md:text-4xl text-2xl" color="#3DDC84" />,
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="md:text-4xl text-2xsl" color="#06B6D4" />
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <FaBootstrap className="md:text-4xl text-2xl" color={"#7952B3"} />
        ),
      },
    ],
    "Cloud/Tools": [
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#F05032" />,
      },
      {
        name: "GitHub",
        icon: (
          <BsGithub
            className="md:text-4xl text-2xl"
            color="#181717 dark-color=[#FFFFFF]"
          />
        ),
      },
      {
        name: "VSCode",
        icon: (
          <SiVisualstudiocode
            className="md:text-4xl text-2xl"
            color="#007ACC"
          />
        ),
      },
      {
        name: "JetBrains IDE",
        icon: (
          <SiJetbrains
            className="md:text-4xl text-2xl"
            color="#000000 dark-color=[#FFFFFF]"
          />
        ),
      },
      {
        name: "Vercel",
        icon: (
          <SiVercel
            className="md:text-4xl text-2xl"
            color="#000000 dark-color=[#FFFFFF]"
          />
        ),
      },
    ],
  },
];
