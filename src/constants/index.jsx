import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import {TbBrandDjango } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image4 from "../assets/project4.jpeg";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
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
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

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
