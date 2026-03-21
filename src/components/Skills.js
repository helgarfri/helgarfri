import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Skills.module.css";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiR,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiTypescript,
  SiSwift,
  SiLatex,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiGithub,
  SiDocker,
  SiLinux,
  SiApple,
  SiSupabase,
  SiNetlify,
  SiPostgresql,
  SiAmazonwebservices,
  SiVim,
  SiGit,
} from "react-icons/si";
import { FiCode, FiCpu, FiDatabase, FiLayers, FiTrendingUp, FiGlobe } from "react-icons/fi";

//////////////////////////////////////////////
// 1. ICELANDIC skill data (is)
//////////////////////////////////////////////
const skillDataIS = [
  {
    title: "forritunarmál",
    items: [
      { name: "javascript", rating: 4 },
      { name: "python", rating: 3 },
      { name: "java", rating: 3 },
      { name: "c", rating: 2 },
      { name: "r", rating: 3 },
      { name: "sql", rating: 4 },
      { name: "html", rating: 4 },
      { name: "css", rating: 4 },
      { name: "kotlin", rating: 3 },
      { name: "typescript", rating: 2 },
      { name: "swift", rating: 2 },
      { name: "latex", rating: 3 },

    ],
  },
  {
    title: "frameworks og libraries",
    items: [
      { name: "react.js", rating: 5 },
      { name: "next.js", rating: 3 },
      { name: "express.js", rating: 3 },
      { name: "django", rating: 3 },
      { name: "pandas", rating: 3 },
      { name: "numpy", rating: 3 },
    ],
  },
  {
    title: "græjur og tól",
    items: [
      { name: "git & github", rating: 4 },
      { name: "docker", rating: 3 },
      { name: "linux / unix", rating: 4 },
      { name: "macos", rating: 4 },
      { name: "supabse", rating: 4 },
      { name: "netlify", rating: 4 },
      { name: "postgresql/mysql", rating: 4 },
      { name: "aws", rating: 3 },
      { name: "vim", rating: 3 }
    ],
  },
  {
    title: "concepts og aðferðir",
    items: [
      { name: "object-oriented programming (oop)", rating: 4 },
      { name: "functional programming (fp)", rating: 4 },
      { name: "data structure & algorithms", rating: 3 },
      { name: "rest api development", rating: 3 },
      { name: "database management", rating: 3 },
      { name: "version control & ci/cd", rating: 4 },
      { name: "agile methodology", rating: 3 },
    ],
  },
];

//////////////////////////////////////////////
// 2. ENGLISH skill data (en)
//////////////////////////////////////////////
const skillDataEN = [
  {
    title: "programming languages",
    items: [
      { name: "javascript", rating: 4 },
      { name: "python", rating: 3 },
      { name: "java", rating: 3 },
      { name: "c", rating: 2 },
      { name: "r", rating: 3 },
      { name: "sql", rating: 4 },
      { name: "html", rating: 4 },
      { name: "css", rating: 4 },
      { name: "kotlin", rating: 3 },
      { name: "typescript", rating: 2 },
      { name: "swift", rating: 2 },
      { name: "latex", rating: 3 },

    ],
  },
  {
    title: "frameworks & libraries",
    items: [
      { name: "react.js", rating: 5 },
      { name: "next.js", rating: 3 },
      { name: "express.js", rating: 3 },
      { name: "django", rating: 3 },
      { name: "pandas", rating: 3 },
      { name: "numpy", rating: 3 },
    ],
  },
  {
    title: "tools & technology",
    items: [
      { name: "git & github", rating: 4 },
      { name: "docker", rating: 3 },
      { name: "linux / unix", rating: 4 },
      { name: "macos", rating: 4 },
      { name: "supabse", rating: 4 },
      { name: "netlify", rating: 4 },
      { name: "postgresql/mysql", rating: 4 },
      { name: "aws", rating: 3 },
      { name: "vim", rating: 3 }
    ],
  },
  {
    title: "concepts & methods",
    items: [
      { name: "object-oriented programming (oop)", rating: 4 },
      { name: "functional programming (fp)", rating: 4 },
      { name: "data structure & algorithms", rating: 3 },
      { name: "rest api development", rating: 3 },
      { name: "database management", rating: 3 },
      { name: "version control & ci/cd", rating: 4 },
      { name: "agile methodology", rating: 3 },
    ],
  },
];

//////////////////////////////////////////////
// 3. SPANISH skill data (es)
//////////////////////////////////////////////
const skillDataES = [
  {
    title: "lenguajes de programación",
    items: [
      { name: "javascript", rating: 4 },
      { name: "python", rating: 3 },
      { name: "java", rating: 3 },
      { name: "c", rating: 2 },
      { name: "r", rating: 3 },
      { name: "sql", rating: 4 },
      { name: "html", rating: 4 },
      { name: "css", rating: 4 },
      { name: "kotlin", rating: 3 },
      { name: "typescript", rating: 2 },
      { name: "swift", rating: 2 },
      { name: "latex", rating: 3 },
    ],
  },
  {
    title: "frameworks y librerías",
    items: [
      { name: "react.js", rating: 5 },
      { name: "next.js", rating: 3 },
      { name: "express.js", rating: 3 },
      { name: "django", rating: 3 },
      { name: "pandas", rating: 3 },
      { name: "numpy", rating: 3 },
    ],
  },
  {
    title: "herramientas y tecnología",
    items: [
      { name: "git & github", rating: 4 },
      { name: "docker", rating: 3 },
      { name: "linux / unix", rating: 4 },
      { name: "macos", rating: 4 },
      { name: "supabase", rating: 4 },
      { name: "netlify", rating: 4 },
      { name: "postgresql/mysql", rating: 4 },
      { name: "aws", rating: 3 },
      { name: "vim", rating: 3 },
    ],
  },
  {
    title: "conceptos y métodos",
    items: [
      { name: "programación orientada a objetos (oop)", rating: 4 },
      { name: "programación funcional (fp)", rating: 4 },
      { name: "estructuras de datos y algoritmos", rating: 3 },
      { name: "desarrollo de api rest", rating: 3 },
      { name: "gestión de bases de datos", rating: 3 },
      { name: "control de versiones y ci/cd", rating: 4 },
      { name: "metodología ágil", rating: 3 },
    ],
  },
];

const skillDataByLang = { is: skillDataIS, en: skillDataEN, es: skillDataES };
const headingByLang = { is: "hæfni", en: "skills", es: "habilidades" };

/////////////////////////////////////////////////////////////////////////
// 4. Icon map (black icons per skill) – key = normalized name
/////////////////////////////////////////////////////////////////////////
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
  javascript: SiJavascript,
  python: SiPython,
  java: FiCode,
  c: SiC,
  r: SiR,
  sql: FiDatabase,
  html: SiHtml5,
  css: SiCss3,
  kotlin: SiKotlin,
  typescript: SiTypescript,
  swift: SiSwift,
  latex: SiLatex,
  react: SiReact,
  next: SiNextdotjs,
  express: SiExpress,
  django: SiDjango,
  pandas: SiPandas,
  numpy: SiNumpy,
  gitgithub: SiGithub,
  docker: SiDocker,
  linuxunix: SiLinux,
  linux: SiLinux,
  macos: SiApple,
  supabase: SiSupabase,
  supabse: SiSupabase,
  netlify: SiNetlify,
  postgresqlmysql: SiPostgresql,
  aws: SiAmazonwebservices,
  vim: SiVim,
  objectorientedprogrammingoop: FiCpu,
  functionalprogrammingfp: FiCode,
  datastructurealgorithms: FiLayers,
  restapidevelopment: FiGlobe,
  databasemanagement: FiDatabase,
  versioncontrolcicd: SiGit,
  agilemethodology: FiTrendingUp,
  programaciónorientadaaobjetosoop: FiCpu,
  programaciónfuncionalfp: FiCode,
  estructurasdedatosyalgoritmos: FiLayers,
  desarrollodeapirest: FiGlobe,
  gestióndebasesdedatos: FiDatabase,
  controldeversionesycicd: SiGit,
  metodologíaágil: FiTrendingUp,
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
