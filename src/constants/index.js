import {
  c,
  contact,
  docker,
  github,
  githubActions,
  javascript,
  linkedin,
  mysql,
  nextjs,
  nodejs,
  postgresql,
  python,
  sqlite,
  tailwindcss,
} from "../assets/icons";


// Import project images
import p1 from "../assets/images/project-1.webp";
import p2 from "../assets/images/project-2.webp";
import p3 from "../assets/images/project-3.webp";
import p4 from "../assets/images/project-4.webp";

export const experiences = [
  {
    title: "Stagiaire Développeur Full-Stack",
    company: "Pupule",
    type: "Stage Professionnel",
    duration: "2025 - Présent",
    description:
      "Approfondissement des compétences en développement full-stack à travers des technologies modernes telles que Laravel, React, Django et PostgreSQL. Travail sur des projets avancés et renforcement des compétences en conception d'applications web performantes et évolutives.",
  },
  {
    title: "Stagiaire Développeur Web",
    company: "Bridges Collector",
    type: "Stage Académique",
    duration: "2024",
    description:
      "Acquisition de compétences en développement web avec les technologies PHP, HTML, CSS et JavaScript, tout en participant à la conception et à la maintenance d'applications web. Stage effectué dans le cadre de la formation BTS Génie Logiciel.",
  },
];

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  
  
  {
    imageUrl: c,
    name: "C",
    type: "Backend and System",
  },
  
  {
    imageUrl: python,
    name: "Python",
    type: "Backend and Scripting",
  },
 
  
  
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
 
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  
  
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Database",
  },
  {
    imageUrl: sqlite,
    name: "SqLite",
    type: "Database",
  },
  
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: githubActions,
    name: "Github Actions",
    type: "CI/CD",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/GourangaDasSamrat",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/yohan-dave-0b30573b3?trk=feed_main-feed-card_feed-actor-image",
  },
  {
    name: "Phone",
    iconUrl: contact,
    link: "tel:690515143",
  },
];

export const projects = [
  {
    name: "Vidéosurveillance Pro",
    description:
      "Application mobile de vidéosurveillance permettant la gestion et le monitoring de caméras en temps réel. Projet développé avec une architecture moderne orientée sécurité.",
    image: p1,
    sourceCode: "https://github.com/c4zxs56vtw-hub/videosurveillance-pro",
  },
  {
    name: "Commerce1 — E-commerce Django",
    description:
      "Application e-commerce complète développée avec Django. Gestion des produits, des commandes et des utilisateurs avec une interface web intuitive.",
    image: p2,
    sourceCode: "https://github.com/c4zxs56vtw-hub/commerce1",
  },
  {
    name: "Projet Web",
    description:
      "Projet web réalisé avec les technologies HTML, CSS et JavaScript. Mise en pratique des fondamentaux du développement front-end.",
    image: p3,
    sourceCode: "https://github.com/c4zxs56vtw-hub/web",
  },
  {
    name: "Pupule — Plateforme Full-Stack",
    description:
      "Projet professionnel développé durant mon stage chez Pupule. Application web full-stack avec React en front-end, Laravel en back-end et PostgreSQL comme base de données. Conception d'interfaces modernes et de fonctionnalités back-end performantes.",
    image: p4,
  },
];
