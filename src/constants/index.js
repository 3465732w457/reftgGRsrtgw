// central data
import {
  logo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

// импорты лого
import Qlogo1 from "../assets/Qlogo1.png";
import Qlogo2 from "../assets/Qlogo2.png";
import Qlogo3 from "../assets/Qlogo3.png";
import Qlogo4 from "../assets/Qlogo4.png";

// навигация
export const navLinks = [
  { id: "tariffs", title: "Тарифы" },
  { id: "aboutus", title: "О Нас" },
  { id: "youtube", title: "Личный кабинет" },
];

// сервисы
const services = [
  { title: "Web Developer", icon: logo },
  { title: "React Native Developer", icon: logo },
  { title: "Backend Developer", icon: logo },
  { title: "Content Creator", icon: logo },
];

// техно
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// опыт (блоки 3 и 4)
const experiences = [
  {
    title: "Цифровая свобода",
    company_name: "EVOLVE VPN",
    icon: Qlogo1,
    iconBg: "#383E56",
    date: "",
    points: [
      "Мы верим, что каждый человек имеет право свободно выражать своё мнение, развиваться, получать доступ к информации и создавать контент без лишних ограничений. Наша команда стремится сделать интернет-пространство более свободным, открытым и доступным для каждого.",
    ],
  },
  {
    title: "Связь с близкими",
    company_name: "EVOLVE VPN",
    icon: Qlogo2,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Мы делаем всё возможное, чтобы вы могли оставаться на связи с родными и близкими, где бы они ни находились. Наш продукт помогает поддерживать стабильное соединение и общаться через привычные мессенджеры, независимо от их местоположения и используемого сервиса.",
    ],
  },
  {
    title: "Что мы предлагаем",
    company_name: "EVOLVE VPN",
    icon: Qlogo3,
    iconBg: "#383E56",
    date: "",
    points: [
      "У нас нет логов.",
      "Современные протоколы и решения, которые мы регулярно дорабатываем.",
      "Анонимность в сети",
      "Доступ к неработающим в рф сервисам.",
    ],
  },
  {
    title: "Клиентоориентированность",
    company_name: "EVOLVE VPN",
    icon: Qlogo4,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Наша команда внимательно относится к каждому пользователю и постоянно адаптирует сервис под современные ограничения и потребности.",
      "Мы надеемся, что Evolve станет для вас тем сервисом, к которому приятно возвращаться.",
    ],
  },
];

// отзывы на будущее
const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// проекты
const projects = [
  {
    name: "нету",
    description: "потом вернуться",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: logo,
    source_code_link: "https://google.com/",
  },
  {
    name: "тест",
    description: "тест",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: logo,
    source_code_link: "https://google.com/",
  },
  {
    name: "тест",
    description: "тест",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: logo,
    source_code_link: "https://google.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };