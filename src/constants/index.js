import MiskoHevery from "../assets/events/MiskoHevery.jpg";
import itholic3 from "../assets/events/itholic3.jpg";
import itholic2 from "../assets/events/itholic2.png";
import itholic1 from "../assets/events/itholic1.png";
import future from "../assets/events/future.jpg";
// -----------
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
// ---------------
export const HERO_CONTENT = `EITC is not just a simple IT club, but a community of engineering students and graduates, united by their passion for IT. Our club follows the philosophy of sharing: We are both the source and the consumers of information. Each person contributes to the knowledge of others, and together we form an entity dedicated to IT and new technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "title",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "title",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "title",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "title",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    // icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    // icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    // icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    // icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    // icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    // icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
export const NAVIGATION_LINKS = [
  { label: "ABOUT US", href: "#ABOUT" },
  { label: "CELLS", href: "#CELLS" },
  { label: "FORMATIONS", href: "#FORMATIONS" },
  { label: "EVENTS", href: "#EVENTS" },
  { label: "CONTACT", href: "#CONTACT" },
  { label: "SPONSORS", href: "#SPONSORS" },
];



export const EVENTS = [
  {
    title: "ITHOLIC V.3.0",
    image: itholic3,
    description:
      "ITHOLIC this year spans three days and focuses on “The Future of ITOPS,” showcasing innovations in microservices architectures. This theme reflects the shift from monolithic to agile, adaptable microservices, which enhance market responsiveness and system security. The event will cover the benefits and challenges of microservices, current ITOPS trends, and best practices, featuring a DEVJAM and a competitive programming competition.",
    tags: ["Conference","ITOps", "DevOps", "DEVJAM", "CP"],
    link : "https://www.linkedin.com/posts/ensias-it-club_itholicabrv3-6thabrgeneration-whereabritabrmindsabrgetabrcreative-activity-7206724717267800065-wPYS?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Special Workshop - Misko Hevery ",
    image: MiskoHevery,
    description:
      "Hello Angular fans! EITC has brought you a workshop led by the mastermind behind Angular/AngularJS and Qwik, Misko Hevery. Save the date for this special event!",
    tags: ["Workshop","Misko Hevery", "Angular", "Training"],
    link : "https://www.youtube.com/watch?v=_OeaB9FLzGA",
  },
  {
    title: "ITHOLIC V.2.0",
    image: itholic2,
    description:
      "ITHOLIC is the annual flagship event of ENSIAS IT CLUB, held on February 10-11 at ENSIAS. The event includes a conference on “AR & VR” with industry experts, a workshop on “Next-gen Web3 Identity,” and a competitive programming competition open to Moroccan university students for great prizes. Additionally, technology enthusiasts can compete in the DEVJAM, showcasing innovative VR and AR ideas.",
    tags: ["Conference", "AR&VR", "Web3", "DEVJAM", "CP"],
    link : "",
  },
  {
    title: "ITHOLIC V.1.0",
    image: itholic1,
    description:
      "ITHOLIC is a meeting point for technology and IT enthusiasts. The event featured a conference on “Cloud & Linux” with top cloud engineers, a practical workshop on “Kubernetes,” and concluded with a competitive programming competition open to Moroccan university students.",
    tags: ["Conference","Cloud", "Linux", "Kubernetes", "CP"],
    link : "",
  },
  {
    title: "FUTURE OF A GRADUATE SOFTWARE ENGINEER",
    image: future,
    description:
    "As a computer engineering student, you may be uncertain about your future career. Your expectations might not align with reality. We're here to clarify your vision! Join us for a conference moderated by El ASSALI Mehdi, where industry professionals will discuss what it means to be a software engineer.",
    tags: ["Conference","Software Engineer",],
    link : "",
  },
];