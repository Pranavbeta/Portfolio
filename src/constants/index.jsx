import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import {TbBrandDjango } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image4 from "../assets/project4.jpeg";


;
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "PRANAV UPADHYAY",
  info: "Full-stack developer",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Pranav Upadhyay, a full-stack developer . I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Retail Shop Management System",
    subtitle:
      "A full-stack retail shop management System built with JS,BOOTSTRAP, Django, and MySQL.",
    image: image1,
    link:"https://pranavupadhyay24.pythonanywhere.com/"
  },
  {
    title: "Code-Pen Clone",
    subtitle:
      "A Code-Pen clone using ReactJs",
    image: image2,
    link:"https://code-pen-clone-dusky.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
    link:"#"
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandDjango className="text-4xl lg:text-6xl text-white" />,
    name: "Django",
    experience: "1+ year",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-green-600" />,
    name: "MySQL",
    experience: "1.5+ years",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-green-600" />,
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "",
  award: "",
  description:
    "",
};


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Pranavbeta",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "http://www.linkedin.com/in/pranav-upadhyay-933962238",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
