import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  aws,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  uh,
  jtech,
  meals,
  metaversus,
  youtubeClone,
  threejs,
  restaurantG,
  fitness,
  gpt3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
 
  {
    title: "Front End Web Developer",
    company_name: "University of Houston",
    icon: uh,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Develops content and layout of assigned web pages, using graphics software specifically designed for publishing on the Web.",
      "Creates and edits graphics for web and print; digitizes images using scanning and digital camera equipment.",
      "Manipulate program variables such as those contained in stylesheets, JavaScript or other coded",
      "Coordinates with contacts and updates information on the assigned Web site to ensure that the university is well represented.",
      'Performs other job-related duties as assigned.',
    ],
  },
  {
    title: "Front End Web Developer",
    company_name: "J-tech Digital",
    icon: jtech,
    iconBg: "#fff",
    date: "Oct 2020 - Present",
    points: [
      "Utilized HTML, CSS, JavaScript and React JS",
      "Design, Development, and Delivery of software",
      "Decompose complex ideas and requirements into most straight forward and user friendly functionality.",
      "Tested, debugged.",
      "Reviewed information and elements regularly on websites and pages for accuracy and functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Liam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Liam does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Liam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youtube Clone",
    description:
      "My YouTube clone is a sleek and modern web application built with React, Material-UI, and API technology.  It lets users search for and watch videos, create playlists, and subscribe to channels.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "mui material",
        color: "green-text-gradient",
      },
      {
        name: "rapid API",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeClone,
    source_code_link: "https://github.com/LiamKT0910/youtube_clone",
  },
  {
    name: "Metaversus",
    description:
      "Metaversus is a dynamic website created with Next.js 13 and Tailwind CSS, with Framer Motion offering a customizable virtual world for social networking, e-commerce, gaming, and events.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link: "https://github.com/LiamKT0910/metaversus",
  },
  {
    name: "Meals",
    description:
      "The Meal website is built with Vue.js and Tailwind CSS, and utilizes API technology. Users can search for specific meals, filter results by dietary restrictions, and save their favorite recipes.",
    tags: [
      {
        name: "vueJS",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: meals,
    source_code_link: "https://github.com/LiamKT0910/search_meal",
  },
  {
    name: "Restaurant",
    description:
      "Your restaurant website, built with ReactJS, features a menu and reservation system for a seamless user experience. Users can browse the menu to select their favorite dishes and make reservations online.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: restaurantG,
    source_code_link: "https://github.com/LiamKT0910/restaurant",
  },
  {
    name: "Fitness",
    description:
      "Fitness website, built with ReactJS, API, and Tailwind CSS, lets users search exercises by muscle group. It has a comprehensive database with detailed instructions and animations, all in a user-friendly interface.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "mui material",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/LiamKT0910/fitness",
  },
  {
    name: "GPT 3",
    description:
      " The responsive design, created with ReactJS, ensures optimal viewing on various devices.. Overall provides a user-friendly interface for users to enter prompts and receive responses generated by GPT-3.",
    tags: [
      {
        name: "reactJS",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/LiamKT0910/search_meal",
  },
];

export { services, technologies, experiences, testimonials, projects };
