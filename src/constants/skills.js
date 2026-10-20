/**
 * Skill catalog — edit repos / docs here.
 * `id` keys are stable; category lists below reference them.
 */

const repo = (name, extra = {}) => ({
  label: `helgarfri/${name}`,
  url: `https://github.com/helgarfri/${name}`,
  ...extra,
});

// Private repos are listed without a link (visitors would get a 404).
const privateRepo = (name) => repo(name, { private: true });

const MIC = repo("map-in-color");
const HELGARFRI = repo("helgarfri");
const ACCURATE = repo("accurate");
const GRUBBA = repo("grubba");
const DEPARTURES_KEF = repo("departures-kef");
const VEF_HOPVERKEFNI_2 = repo("vef-hopverkefni-2");
const VEF1_V9 = repo("vef1-2023-v9");
const HOPVERKEFNI_1 = repo("hopverkefni-1");
const VERKEFNI_6 = repo("verkefni_6");
const LOCA = repo("loca");
const FOKUSKLUKKA = repo("fokusklukka");
const REI_LOKAVERKEFNI = repo("rei-lokaverkefni");

const HAPPI = privateRepo("happi");
const RATATOSK = privateRepo("muna");
const MIXPATH = privateRepo("mixpath");

/** @typedef {{ label: string, url: string, private?: boolean }} SkillRepo */

/**
 * @type {Record<string, {
 *   name: string,
 *   rating: number,
 *   docs: string,
 *   repos: SkillRepo[],
 * }>}
 */
export const SKILL_CATALOG = {
  react: {
    name: "react.js",
    rating: 4,
    docs: "https://react.dev",
    repos: [
      MIC,
      MIXPATH,
      ACCURATE,
      GRUBBA,
      DEPARTURES_KEF,
      VEF_HOPVERKEFNI_2,
      HELGARFRI,
    ],
  },
  typescript: {
    name: "typescript",
    rating: 4,
    docs: "https://www.typescriptlang.org/docs/",
    repos: [HAPPI, RATATOSK, MIXPATH],
  },
  next: {
    name: "next.js",
    rating: 3,
    docs: "https://nextjs.org/docs",
    repos: [HAPPI, RATATOSK],
  },
  vite: {
    name: "vite",
    rating: 3,
    docs: "https://vitejs.dev/guide/",
    repos: [MIXPATH],
  },
  html: {
    name: "html",
    rating: 4,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    repos: [MIC, HELGARFRI, HOPVERKEFNI_1, VERKEFNI_6],
  },
  css: {
    name: "css",
    rating: 4,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    repos: [MIC, HELGARFRI, HOPVERKEFNI_1, VERKEFNI_6],
  },
  tailwindcss: {
    name: "tailwind css",
    rating: 3,
    docs: "https://tailwindcss.com/docs",
    repos: [HAPPI, RATATOSK, MIXPATH],
  },
  bootstrap: {
    name: "bootstrap",
    rating: 3,
    docs: "https://getbootstrap.com/docs/",
    repos: [],
  },
  javascript: {
    name: "javascript",
    rating: 4,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    repos: [MIC, ACCURATE, GRUBBA, HELGARFRI, VEF1_V9],
  },
  vue: {
    name: "vue.js",
    rating: 2,
    docs: "https://vuejs.org/guide/",
    repos: [],
  },
  ember: {
    name: "ember.js",
    rating: 2,
    docs: "https://guides.emberjs.com/",
    repos: [],
  },
  javafx: {
    name: "javafx",
    rating: 2,
    docs: "https://openjfx.io/",
    repos: [LOCA],
  },
  node: {
    name: "node.js",
    rating: 4,
    docs: "https://nodejs.org/docs/latest/api/",
    repos: [MIC, ACCURATE, GRUBBA],
  },
  express: {
    name: "express.js",
    rating: 4,
    docs: "https://expressjs.com/",
    repos: [MIC, ACCURATE, GRUBBA],
  },
  restapidevelopment: {
    name: "rest api development",
    rating: 4,
    docs: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    repos: [MIC, ACCURATE, GRUBBA],
  },
  postgresql: {
    name: "postgresql",
    rating: 4,
    docs: "https://www.postgresql.org/docs/",
    repos: [MIC, ACCURATE, HAPPI, RATATOSK, MIXPATH],
  },
  mysql: {
    name: "mysql",
    rating: 3,
    docs: "https://dev.mysql.com/doc/",
    repos: [],
  },
  supabase: {
    name: "supabase",
    rating: 4,
    docs: "https://supabase.com/docs",
    repos: [MIC, HAPPI, RATATOSK, MIXPATH],
  },
  django: {
    name: "django",
    rating: 3,
    docs: "https://docs.djangoproject.com/",
    repos: [],
  },
  springboot: {
    name: "spring boot",
    rating: 2,
    docs: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
    repos: [],
  },
  java: {
    name: "java",
    rating: 3,
    docs: "https://docs.oracle.com/en/java/",
    repos: [LOCA],
  },
  c: {
    name: "c",
    rating: 3,
    docs: "https://en.cppreference.com/w/c",
    repos: [],
  },
  cplusplus: {
    name: "c++",
    rating: 2,
    docs: "https://en.cppreference.com/w/cpp",
    repos: [],
  },
  jwt: {
    name: "jwt",
    rating: 3,
    docs: "https://jwt.io/introduction",
    repos: [MIC],
  },
  bcrypt: {
    name: "bcrypt",
    rating: 3,
    docs: "https://github.com/kelektiv/node.bcrypt.js#readme",
    repos: [MIC],
  },
  resend: {
    name: "resend",
    rating: 3,
    docs: "https://resend.com/docs",
    repos: [MIC, HAPPI, MIXPATH],
  },
  netlify: {
    name: "netlify",
    rating: 4,
    docs: "https://docs.netlify.com/",
    repos: [HELGARFRI],
  },
  render: {
    name: "render",
    rating: 3,
    docs: "https://render.com/docs",
    repos: [MIC, MIXPATH],
  },
  vercel: {
    name: "vercel",
    rating: 3,
    docs: "https://vercel.com/docs",
    repos: [HAPPI, RATATOSK],
  },
  aws: {
    name: "aws",
    rating: 2,
    docs: "https://docs.aws.amazon.com/",
    repos: [],
  },
  kali: {
    name: "kali linux",
    rating: 2,
    docs: "https://www.kali.org/docs/",
    repos: [],
  },
  wireshark: {
    name: "wireshark",
    rating: 2,
    docs: "https://www.wireshark.org/docs/",
    repos: [],
  },
  cryptography: {
    name: "cryptography",
    rating: 3,
    docs: "https://en.wikipedia.org/wiki/Cryptography",
    repos: [],
  },
  networksecurity: {
    name: "network security",
    rating: 3,
    docs: "https://en.wikipedia.org/wiki/Network_security",
    repos: [],
  },
  dns: {
    name: "dns",
    rating: 3,
    docs: "https://developer.mozilla.org/en-US/docs/Glossary/DNS",
    repos: [],
  },
  kotlin: {
    name: "kotlin",
    rating: 3,
    docs: "https://kotlinlang.org/docs/home.html",
    repos: [],
  },
  androidstudio: {
    name: "android studio",
    rating: 3,
    docs: "https://developer.android.com/studio/intro",
    repos: [],
  },
  jetpackcompose: {
    name: "jetpack compose",
    rating: 2,
    docs: "https://developer.android.com/jetpack/compose/documentation",
    repos: [],
  },
  junit: {
    name: "junit",
    rating: 2,
    docs: "https://junit.org/junit5/docs/current/user-guide/",
    repos: [LOCA],
  },
  swift: {
    name: "swift",
    rating: 2,
    docs: "https://developer.apple.com/documentation/swift",
    repos: [],
  },
  python: {
    name: "python",
    rating: 3,
    docs: "https://docs.python.org/3/",
    repos: [FOKUSKLUKKA, REI_LOKAVERKEFNI, HELGARFRI],
  },
  pandas: {
    name: "pandas",
    rating: 3,
    docs: "https://pandas.pydata.org/docs/",
    repos: [REI_LOKAVERKEFNI],
  },
  numpy: {
    name: "numpy",
    rating: 3,
    docs: "https://numpy.org/doc/",
    repos: [REI_LOKAVERKEFNI],
  },
  r: {
    name: "r",
    rating: 2,
    docs: "https://cran.r-project.org/manuals.html",
    repos: [],
  },
  rstudio: {
    name: "r studio",
    rating: 2,
    docs: "https://docs.posit.co/ide/user/",
    repos: [],
  },
  sql: {
    name: "sql",
    rating: 4,
    docs: "https://www.postgresql.org/docs/current/sql.html",
    repos: [MIC, ACCURATE],
  },
  algorithms: {
    name: "algorithms",
    rating: 3,
    docs: "https://en.wikipedia.org/wiki/Algorithm",
    repos: [],
  },
  datastructures: {
    name: "data structures",
    rating: 3,
    docs: "https://en.wikipedia.org/wiki/Data_structure",
    repos: [],
  },
  hpc: {
    name: "hpc / mpi",
    rating: 2,
    docs: "https://www.open-mpi.org/doc/",
    repos: [],
  },
  mapreduce: {
    name: "mapreduce",
    rating: 2,
    docs: "https://en.wikipedia.org/wiki/MapReduce",
    repos: [],
  },
  haskell: {
    name: "haskell",
    rating: 2,
    docs: "https://www.haskell.org/documentation/",
    repos: [],
  },
  gitgithub: {
    name: "git & github",
    rating: 4,
    docs: "https://docs.github.com/en",
    repos: [MIC, HELGARFRI],
  },
  docker: {
    name: "docker",
    rating: 3,
    docs: "https://docs.docker.com/",
    repos: [],
  },
  linuxunix: {
    name: "linux / unix",
    rating: 4,
    docs: "https://www.kernel.org/doc/html/latest/",
    repos: [],
  },
  macos: {
    name: "macos",
    rating: 4,
    docs: "https://support.apple.com/guide/mac-help/welcome/mac",
    repos: [],
  },
  windows: {
    name: "windows",
    rating: 4,
    docs: "https://learn.microsoft.com/windows/",
    repos: [],
  },
  vim: {
    name: "vim",
    rating: 3,
    docs: "https://vimhelp.org/",
    repos: [],
  },
  cursor: {
    name: "cursor",
    rating: 4,
    docs: "https://docs.cursor.com/",
    repos: [],
  },
  claude: {
    name: "claude",
    rating: 3,
    docs: "https://docs.anthropic.com/",
    repos: [],
  },
  figma: {
    name: "figma",
    rating: 2,
    docs: "https://help.figma.com/",
    repos: [],
  },
  canva: {
    name: "canva",
    rating: 3,
    docs: "https://www.canva.com/help/",
    repos: [],
  },
  latex: {
    name: "latex",
    rating: 3,
    docs: "https://www.latex-project.org/help/documentation/",
    repos: [HELGARFRI],
  },
  agile: {
    name: "agile / scrum",
    rating: 3,
    docs: "https://www.scrum.org/resources/what-scrum-module",
    repos: [],
  },
  concurrency: {
    name: "concurrency",
    rating: 3,
    docs: "https://en.wikipedia.org/wiki/Concurrent_computing",
    repos: [],
  },
  assembly: {
    name: "x86-64 assembly",
    rating: 2,
    docs: "https://en.wikipedia.org/wiki/X86-64",
    repos: [],
  },
  verilog: {
    name: "verilog",
    rating: 2,
    docs: "https://en.wikipedia.org/wiki/Verilog",
    repos: [],
  },
  computability: {
    name: "computability",
    rating: 2,
    docs: "https://en.wikipedia.org/wiki/Theory_of_computation",
    repos: [],
  },
  zod: {
    name: "zod",
    rating: 3,
    docs: "https://zod.dev/",
    repos: [HAPPI, RATATOSK],
  },
  anthropicapi: {
    name: "claude api",
    rating: 3,
    docs: "https://docs.anthropic.com/en/api/overview",
    repos: [HAPPI, RATATOSK],
  },
  mapbox: {
    name: "mapbox",
    rating: 2,
    docs: "https://docs.mapbox.com/",
    repos: [HAPPI],
  },
  expo: {
    name: "expo / react native",
    rating: 3,
    docs: "https://docs.expo.dev/",
    repos: [HAPPI, RATATOSK],
  },
  vitest: {
    name: "vitest",
    rating: 2,
    docs: "https://vitest.dev/guide/",
    repos: [RATATOSK, MIXPATH],
  },
  puppeteer: {
    name: "puppeteer",
    rating: 2,
    docs: "https://pptr.dev/",
    repos: [HAPPI],
  },
  openstreetmap: {
    name: "openstreetmap",
    rating: 2,
    docs: "https://wiki.openstreetmap.org/wiki/Overpass_API",
    repos: [HAPPI],
  },
};

/** Category order + which skills appear (ids from SKILL_CATALOG). */
export const SKILL_CATEGORY_IDS = [
  {
    id: "frontend",
    titles: { is: "frontend", en: "frontend", es: "frontend" },
    skills: [
      "react",
      "typescript",
      "javascript",
      "next",
      "vite",
      "html",
      "css",
      "vue",
      "ember",
      "javafx",
      "tailwindcss",
      "bootstrap",
    ],
  },
  {
    id: "backend",
    titles: {
      is: "backend og gagnagrunnar",
      en: "backend & databases",
      es: "backend y bases de datos",
    },
    skills: [
      "node",
      "express",
      "restapidevelopment",
      "java",
      "c",
      "cplusplus",
      "postgresql",
      "mysql",
      "supabase",
      "django",
      "springboot",
      "zod",
    ],
  },
  {
    id: "services",
    titles: {
      is: "auðkenning, tölvupóstur og þjónustur",
      en: "auth, email & services",
      es: "autenticación, email y servicios",
    },
    skills: [
      "jwt",
      "bcrypt",
      "resend",
      "netlify",
      "render",
      "vercel",
      "aws",
      "anthropicapi",
      "mapbox",
      "openstreetmap",
    ],
  },
  {
    id: "security",
    titles: {
      is: "öryggi",
      en: "security",
      es: "seguridad",
    },
    skills: [
      "kali",
      "wireshark",
      "cryptography",
      "networksecurity",
      "dns",
    ],
  },
  {
    id: "mobile",
    titles: {
      is: "farsímar og prófanir",
      en: "mobile & testing",
      es: "móvil y pruebas",
    },
    skills: [
      "kotlin",
      "androidstudio",
      "jetpackcompose",
      "junit",
      "swift",
      "expo",
      "vitest",
      "puppeteer",
    ],
  },
  {
    id: "data",
    titles: {
      is: "gögn, algrím og skriftur",
      en: "data, algorithms & scripting",
      es: "datos, algoritmos y scripting",
    },
    skills: [
      "python",
      "pandas",
      "numpy",
      "r",
      "rstudio",
      "sql",
      "algorithms",
      "datastructures",
      "hpc",
      "mapreduce",
      "haskell",
    ],
  },
  {
    id: "systems",
    titles: {
      is: "kerfi og reiknifræði",
      en: "systems & theory",
      es: "sistemas y teoría",
    },
    skills: [
      "concurrency",
      "assembly",
      "verilog",
      "computability",
      "linuxunix",
      "macos",
      "windows",
    ],
  },
  {
    id: "tools",
    titles: {
      is: "verkfæri og vinnuflæði",
      en: "tools & workflow",
      es: "herramientas y flujo de trabajo",
    },
    skills: [
      "gitgithub",
      "docker",
      "agile",
      "vim",
      "cursor",
      "claude",
      "figma",
      "canva",
      "latex",
    ],
  },
];

export const SKILLS_HEADING = {
  is: "hæfni",
  en: "skills",
  es: "habilidades",
};

export function getSkill(id) {
  return SKILL_CATALOG[id] || null;
}
