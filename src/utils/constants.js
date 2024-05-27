import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  {
    text: "Resume",
    path: "https://drive.google.com/file/d/1lMV2aiwE3zOay5k4N4usUK685X_wyptQ/view?usp=drive_link",
    type: "Link",
  },
];

export const interestsData = [
  // {
  //   interest: "Software Engineering",
  //   icon: BsCodeSlash,
  // },
  // {
  //   interest: "Tech Blog",
  //   icon: FaHashnode,
  // },
  // {
  //   interest: "Internet of Things",
  //   icon: FcElectronics,
  // },
  // {
  //   interest: "Market Research",
  //   icon: GiArchiveResearch,
  // },
  // {
  //   interest: "Visualization",
  //   icon: BsFileBarGraph,
  // },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  // {
  //   interest: "Robotics",
  //   icon: BsRobot,
  // },
  // {
  //   interest: "Web Scraping",
  //   icon: BsGlobe,
  // },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  // {
  //   name: "SASS",
  //   icon: FaSass,
  // },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  // {
  //   name: "C/C++",
  //   icon: TbBrandCpp,
  // },
  // {
  //   name: "Python",
  //   icon: FaPython,
  // },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  // {
  //   name: "PugJs",
  //   icon: SiPug,
  // },
  {
    name: "Express",
    icon: SiExpress,
  },
  // {
  //   name: "Docker",
  //   icon: FaDocker,
  // },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  // {
  //   name: "Git",
  //   icon: BsGit,
  // },
  {
    name: "Github",
    icon: FaGithub,
  },
  // {
  //   name: "ChatGPT",
  //   icon: GiArtificialIntelligence,
  // },
  // {
  //   name: "Bash",
  //   icon: SiGnubash,
  // },
  // {
  //   name: "Markdown",
  //   icon: BsMarkdown,
  // },
];

export const workData = [
  {
    company: "Lanatus Systems",
    designation: "Associate Software Engineer ",
    duration: "May 2023 - Present",
    companyImg: "lantus.webp",
    description: (
      <>
        <ul>
          <li>
            Web Application Development in React JS Environment Used
            Understanding React Fundamental Front-end Coding and development in
            JavaScript. Used Redux to store data globally and used any component
            in the React JS. Working with AXIOS, promise based HTTP client for
            Browser and fetching data into the app. Used Middleware, Redux-saga
            with immutable JS in application for retrieve Data from Back-end and
            Rest API
          </li>
          {/* <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li> */}
        </ul>
      </>
    ),
  },
  {
    company: "AIMS Infosoft",
    designation: "Jr. React JS Developer",
    duration: "Sep. 2022 - April 2023",
    companyImg: "aims.png",
    description: (
      <>
        <ul>
          <li>
            Web Application Development in React JS Environment Used
            Understanding React Fundamental Front-end Coding and development in
            JavaScript. Used Redux to store data globally and used any component
            in the React JS. Working with AXIOS, promise based HTTP client for
            Browser and fetching data into the app.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Survey System",
    image: "surevy-system.jpg",
    // link: "https://movie-magnet-smoky.vercel.app/",
    // source: "https://github.com/vaheedsk36/movie-magnet",
    info: "It is a use of employee and supervisor reviews. On this website creator created content for employee details and company details. Supervisor and Employee Review their Work Experience",
    technologies: "ReactJS || Redux || CSS || HTML || Node.JS || Express.JS",
  },
  {
    type: "WEB-APP",
    title: "Dimiour",
    image: "dimiour.png",
    // link: null,
    // source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
    info: "It is the use of customer requirements and business objectives. In this system, consultants add their business information and project details. In this system, users approve or disapprove client requests. It is a secure app for clients and consultants.",
    technologies: "ReactJS || Redux || CSS || HTML || Material UI",
  },
  // {
  //   type: "WEB-APP",
  //   title: "Weather App",
  //   image: "weather-app",
  //   link: "https://vaheedsk36.github.io/weather-app/",
  //   source: "https://github.com/vaheedsk36/weather-app",
  // },
  {
    type: "WEB-APP",
    title: "Driver Jobs",
    image: "driver-jobs.jpg",
    // link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    // source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
    info: "Admin to enter jobs and assign them to a driver. A driver can log in and find the jobs and actions like (Pickup and drop-off). The driver can take a picture to attach to the job. A report/dashboard with jobs filtered by driver date location",
    technologies:
      "React.JS || Redux || CSS || HTML || Node.JS || Express.JS || Next.Js || Material UI",
  },
  {
    type: "WEB-APP",
    title: "Asset management App",
    image: "asset-management.ico",
    // link: "https://vaheedsk36.github.io/guess-my-number",
    // source: "https://github.com/vaheedsk36/guess-my-number",
    info: "It was the software system to manage the energy generation plants with multi-tenant architecture.",
    technologies: "React JS|| Java|| Spring Boot|| CSS|| Material UI",
  },
  {
    type: "WEB-APP",
    title: "ETL App",
    image: "etl.webp",
    // link: "https://vaheedsk36.github.io/react-notes-app/",
    // source: "https://github.com/vaheedsk36/react-notes-app",
    info: "It is the use of customer requirements and business objectives. In this system, consultants add their business information and project details. In this system, users approve or disapprove client requests. It is a secure app for clients and consultants.",
    technologies: "React JS || CSS || Material UI",
  },
  {
    type: "WEB-APP",
    title: "Gowrk - Job Search",
    image: "gowrk.ico",
    // link: "https://vaheedsk36.github.io/dice-multiplayer",
    // source: "https://github.com/vaheedsk36/dice-multiplayer",
    info: "Gowrk aims to bridge between the blue and grey-collar candidates and employers. It includes a web app for employers to create and manage their requirements. And an Android app for candidates to search and apply for hundreds of jobs available in their area.",
    technologies:
      "React|| React Native|| NestJS|| NodeJS|| MSG91|| Firebase Messaging|| Prisma|| AWS S3",
  },
  // {
  //   type: "PROJECT",
  //   title: "Snake Game",
  //   image: "snake-game",
  //   link: "https://vaheedsk36.github.io/Snake-game",
  //   source: "",
  // },
  // {
  //   type: "PROJECT",
  //   title: "Delta Assistant",
  //   image: "delta-assistant",
  //   link: "",
  //   source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  // },
  {
    type: "WEB-APP",
    title: "NES Solar Website",
    image: "nes-solar.png",
    link: "https://nes-solar-five.vercel.app/",
    source: "https://github.com/Lanatus-Systems/nes-solar",
    info: "It is the informative website for nes solar organization. In this website I have added particles.js and other type of animations.",
    technologies: "React || Next.js || Tailwind CSS ",
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/SoanlR",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  // {
  //   href: "https://www.instagram.com/codersk36/",
  //   icon: FaInstagram,
  //   backgroundColor: "social.instagram",
  //   hoverColor: "social.instagramHover",
  // },
  {
    href: "https://www.linkedin.com/in/sonal-rathod-72b694183",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaXTwitter,
  //   backgroundColor: "gray.700",
  //   hoverColor: "gray.600",
  // },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
  // {
  //   href: "https://medium.com/@vaheedsk36",
  //   icon: FaMediumM,
  //   backgroundColor: "gray.700",
  //   hoverColor: "gray.600",
  // },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
