import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Skills.module.css";
import {
  SiPython,
  SiR,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiSwift,
  SiLatex,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiJsonwebtokens,
  SiJunit5,
  SiPandas,
  SiNumpy,
  SiGithub,
  SiDocker,
  SiLinux,
  SiApple,
  SiSupabase,
  SiNetlify,
  SiVercel,
  SiResend,
  SiPostgresql,
  SiMysql,
  SiAmazonwebservices,
  SiVim,
  SiAndroidstudio,
  SiAndroid,
  SiRstudioide,
  SiClaude,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { FiCode, FiDatabase, FiGlobe, FiLock } from "react-icons/fi";
import { FaWindows } from "react-icons/fa";

//////////////////////////////////////////////
// 1. ICELANDIC skill data (is)
//////////////////////////////////////////////
const skillDataIS = [
  {
    title: "frontend",
    items: [
      { name: "react.js", rating: 4 },
      { name: "next.js", rating: 3 },
      { name: "vite", rating: 3 },
      { name: "html", rating: 4 },
      { name: "css", rating: 4 },
      { name: "tailwind css", rating: 3 },
      { name: "bootstrap", rating: 3 },
    ],
  },
  {
    title: "backend og gagnagrunnar",
    items: [
      { name: "node.js", rating: 4 },
      { name: "express.js", rating: 4 },
      { name: "rest api development", rating: 4 },
      { name: "postgresql", rating: 4 },
      { name: "mysql", rating: 3 },
      { name: "supabase", rating: 4 },
      { name: "django", rating: 3 },
      { name: "spring boot", rating: 2 },
    ],
  },
  {
    title: "auðkenning, tölvupóstur og þjónustur",
    items: [
      { name: "jwt", rating: 3 },
      { name: "bcrypt", rating: 3 },
      { name: "resend", rating: 3 },
      { name: "netlify", rating: 4 },
      { name: "vercel", rating: 3 },
      { name: "aws", rating: 2 },
    ],
  },
  {
    title: "farsímar og prófanir",
    items: [
      { name: "kotlin", rating: 3 },
      { name: "android studio", rating: 3 },
      { name: "jetpack compose", rating: 2 },
      { name: "junit", rating: 2 },
      { name: "swift", rating: 2 },
    ],
  },
  {
    title: "gögn og skriftur",
    items: [
      { name: "python", rating: 3 },
      { name: "pandas", rating: 3 },
      { name: "numpy", rating: 3 },
      { name: "r", rating: 2 },
      { name: "r studio", rating: 2 },
      { name: "sql", rating: 4 },
    ],
  },
  {
    title: "verkfæri og vinnuflæði",
    items: [
      { name: "git & github", rating: 4 },
      { name: "docker", rating: 3 },
      { name: "linux / unix", rating: 4 },
      { name: "macos", rating: 4 },
      { name: "windows", rating: 4 },
      { name: "vim", rating: 3 },
      { name: "cursor", rating: 4 },
      { name: "claude", rating: 3 },
      { name: "figma", rating: 2 },
      { name: "canva", rating: 3 },
      { name: "latex", rating: 3 },
    ],
  },
];

//////////////////////////////////////////////
// 2. ENGLISH skill data (en)
//////////////////////////////////////////////
const skillDataEN = [
  {
    title: "frontend",
    items: [
      { name: "react.js", rating: 4 },
      { name: "next.js", rating: 3 },
      { name: "vite", rating: 3 },
      { name: "html", rating: 4 },
      { name: "css", rating: 4 },
      { name: "tailwind css", rating: 3 },
      { name: "bootstrap", rating: 3 },
    ],
  },
  {
    title: "backend & databases",
    items: [
      { name: "node.js", rating: 4 },
      { name: "express.js", rating: 4 },
      { name: "rest api development", rating: 4 },
      { name: "postgresql", rating: 4 },
      { name: "mysql", rating: 3 },
      { name: "supabase", rating: 4 },
      { name: "django", rating: 3 },
      { name: "spring boot", rating: 2 },
    ],
  },
  {
    title: "auth, email & services",
    items: [
      { name: "jwt", rating: 3 },
      { name: "bcrypt", rating: 3 },
      { name: "resend", rating: 3 },
      { name: "netlify", rating: 4 },
      { name: "vercel", rating: 3 },
      { name: "aws", rating: 2 },
    ],
  },
  {
    title: "mobile & testing",
    items: [
      { name: "kotlin", rating: 3 },
      { name: "android studio", rating: 3 },
      { name: "jetpack compose", rating: 2 },
      { name: "junit", rating: 2 },
      { name: "swift", rating: 2 },
    ],
  },
  {
    title: "data & scripting",
    items: [
      { name: "python", rating: 3 },
      { name: "pandas", rating: 3 },
      { name: "numpy", rating: 3 },
      { name: "r", rating: 2 },
      { name: "r studio", rating: 2 },
      { name: "sql", rating: 4 },
    ],
  },
  {
    title: "tools & workflow",
    items: [
      { name: "git & github", rating: 4 },
      { name: "docker", rating: 3 },
      { name: "linux / unix", rating: 4 },
      { name: "macos", rating: 4 },
      { name: "windows", rating: 4 },
      { name: "vim", rating: 3 },
      { name: "cursor", rating: 4 },
      { name: "claude", rating: 3 },
      { name: "figma", rating: 2 },
      { name: "canva", rating: 3 },
      { name: "latex", rating: 3 },
    ],
  },
];

//////////////////////////////////////////////
// 3. SPANISH skill data (es)
//////////////////////////////////////////////
const skillDataES = [
  {
    title: "frontend",
    items: [
      { name: "react.js", rating: 4 },
      { name: "next.js", rating: 3 },
      { name: "vite", rating: 3 },
      { name: "html", rating: 4 },
      { name: "css", rating: 4 },
      { name: "tailwind css", rating: 3 },
      { name: "bootstrap", rating: 3 },
    ],
  },
  {
    title: "backend y bases de datos",
    items: [
      { name: "node.js", rating: 4 },
      { name: "express.js", rating: 4 },
      { name: "rest api development", rating: 4 },
      { name: "postgresql", rating: 4 },
      { name: "mysql", rating: 3 },
      { name: "supabase", rating: 4 },
      { name: "django", rating: 3 },
      { name: "spring boot", rating: 2 },
    ],
  },
  {
    title: "autenticación, email y servicios",
    items: [
      { name: "jwt", rating: 3 },
      { name: "bcrypt", rating: 3 },
      { name: "resend", rating: 3 },
      { name: "netlify", rating: 4 },
      { name: "vercel", rating: 3 },
      { name: "aws", rating: 2 },
    ],
  },
  {
    title: "móvil y pruebas",
    items: [
      { name: "kotlin", rating: 3 },
      { name: "android studio", rating: 3 },
      { name: "jetpack compose", rating: 2 },
      { name: "junit", rating: 2 },
      { name: "swift", rating: 2 },
    ],
  },
  {
    title: "datos y scripting",
    items: [
      { name: "python", rating: 3 },
      { name: "pandas", rating: 3 },
      { name: "numpy", rating: 3 },
      { name: "r", rating: 2 },
      { name: "r studio", rating: 2 },
      { name: "sql", rating: 4 },
    ],
  },
  {
    title: "herramientas y flujo de trabajo",
    items: [
      { name: "git & github", rating: 4 },
      { name: "docker", rating: 3 },
      { name: "linux / unix", rating: 4 },
      { name: "macos", rating: 4 },
      { name: "windows", rating: 4 },
      { name: "vim", rating: 3 },
      { name: "cursor", rating: 4 },
      { name: "claude", rating: 3 },
      { name: "figma", rating: 2 },
      { name: "canva", rating: 3 },
      { name: "latex", rating: 3 },
    ],
  },
];

const skillDataByLang = { is: skillDataIS, en: skillDataEN, es: skillDataES };
const headingByLang = { is: "hæfni", en: "skills", es: "habilidades" };

/////////////////////////////////////////////////////////////////////////
// 4. Icon map (black icons per skill) – key = normalized name
/////////////////////////////////////////////////////////////////////////
function CursorIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      aria-hidden
      {...props}
    >
      <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
    </svg>
  );
}

function normalizeKey(name) {
  return name
    .toLowerCase()
    .replace(/\s*\/\s*/g, "")
    .replace(/\s*&\s*/g, "")
    .replace(/\.js/g, "")
    .replace(/\s+/g, "")
    .replace(/[()]/g, "")
    .replace(/-/g, "");
}

const iconMap = {
  python: SiPython,
  r: SiR,
  sql: FiDatabase,
  html: SiHtml5,
  css: SiCss3,
  kotlin: SiKotlin,
  swift: SiSwift,
  latex: SiLatex,
  react: SiReact,
  next: SiNextdotjs,
  vite: SiVite,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  node: SiNodedotjs,
  express: SiExpress,
  restapidevelopment: FiGlobe,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  django: SiDjango,
  springboot: SiSpringboot,
  jwt: SiJsonwebtokens,
  bcrypt: FiLock,
  resend: SiResend,
  pandas: SiPandas,
  numpy: SiNumpy,
  gitgithub: SiGithub,
  docker: SiDocker,
  linuxunix: SiLinux,
  linux: SiLinux,
  macos: SiApple,
  windows: FaWindows,
  supabase: SiSupabase,
  netlify: SiNetlify,
  vercel: SiVercel,
  aws: SiAmazonwebservices,
  vim: SiVim,
  androidstudio: SiAndroidstudio,
  jetpackcompose: SiAndroid,
  junit: SiJunit5,
  rstudio: SiRstudioide,
  cursor: CursorIcon,
  claude: SiClaude,
  figma: SiFigma,
  canva: SiCanva,
};

function getIconForSkill(name) {
  const key = normalizeKey(name);
  const Icon = iconMap[key];
  if (Icon) return Icon;
  return FiCode;
}

/////////////////////////////////////////////////////////////////////////
// 5. Dots and render
/////////////////////////////////////////////////////////////////////////

function renderDots(rating) {
  const totalDots = 5;
  const dots = [];
  for (let i = 1; i <= totalDots; i++) {
    const filled = i <= rating;
    dots.push(
      <span
        key={i}
        className={filled ? styles.dotFilled : styles.dotEmpty}
        aria-hidden
      />
    );
  }
  return dots;
}

function Skills() {
  const { language } = useContext(LanguageContext);

  const skillData = skillDataByLang[language] || skillDataEN;
  const headingText = headingByLang[language] || "skills";

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>{headingText}</h2>

      {/* A grid container for all categories */}
      <div className={styles.categoriesContainer}>
        {skillData.map((category, catIdx) => (
          <div className={styles.category} key={catIdx}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            
            {/* Table-like container for items */}
            <div className={styles.skillTable}>
              {category.items.map((item, itemIdx) => {
                const IconComponent = getIconForSkill(item.name);
                return (
                  <div className={styles.skillRow} key={itemIdx}>
                    <span className={styles.skillIcon} aria-hidden>
                      <IconComponent />
                    </span>
                    <span className={styles.skillName}>{item.name}</span>
                    {item.rating > 0 && (
                      <span className={styles.dotContainer}>
                        {renderDots(item.rating)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
