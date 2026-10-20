/**
 * University courses (passed). Edit here to keep education data in sync.
 * `skillIds` lists skills from SKILL_CATALOG learned/practiced in the course.
 */

/** @typedef {{ is: string, en: string, es: string }} LocalizedText */

/**
 * @type {Array<{
 *   code: string,
 *   name: LocalizedText,
 *   completed: string,
 *   ects: number,
 *   grade: string,
 *   passed: boolean,
 *   mode: 'campus' | 'distance',
 *   place: LocalizedText,
 *   skillIds: string[],
 * }>}
 */
export const COURSES = [
  {
    code: "TÖL403G",
    name: {
      is: "Greining reiknirita",
      en: "Analysis of Algorithms",
      es: "Análisis de algoritmos",
    },
    completed: "2026-06",
    ects: 6,
    grade: "6,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["algorithms", "datastructures"],
  },
  {
    code: "TÖL213M",
    name: {
      is: "Hagnýt dulritunarfræði",
      en: "Applied Cryptography",
      es: "Criptografía aplicada",
    },
    completed: "2026-05",
    ects: 6,
    grade: "9,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["kali", "wireshark", "dns", "cryptography", "networksecurity"],
  },
  {
    code: "HBV403G",
    name: {
      is: "Vefforritun 2",
      en: "Web Programming 2",
      es: "Programación web 2",
    },
    completed: "2026-05",
    ects: 6,
    grade: "10,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [
      "react",
      "vue",
      "ember",
      "javascript",
      "node",
      "html",
      "css",
      "tailwindcss",
      "restapidevelopment",
    ],
  },
  {
    code: "SPÆ009G",
    name: {
      is: "Sjálfsnám í spænsku II",
      en: "Independent Study in Spanish II",
      es: "Aprendizaje autónomo de español II",
    },
    completed: "2026-05",
    ects: 4,
    grade: "8,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [],
  },
  {
    code: "REI204M",
    name: {
      is: "Forritun ofurtölva",
      en: "High-Performance Computing",
      es: "Computación de alto rendimiento",
    },
    completed: "2026-05",
    ects: 6,
    grade: "9,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["python", "hpc", "linuxunix", "gitgithub"],
  },
  {
    code: "HBV601G",
    name: {
      is: "Hugbúnaðarverkefni 2",
      en: "Software Project 2",
      es: "Proyecto de software 2",
    },
    completed: "2026-05",
    ects: 6,
    grade: "7,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [
      "kotlin",
      "androidstudio",
      "jetpackcompose",
      "gitgithub",
      "agile",
    ],
  },
  {
    code: "FOR204G",
    name: {
      is: "Forsaga",
      en: "Prehistory",
      es: "Prehistoria",
    },
    completed: "2026-05",
    ects: 10,
    grade: "6,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [],
  },
  {
    code: "TÖL301G",
    name: {
      is: "Formleg mál og reiknanleiki",
      en: "Formal Languages and Computability",
      es: "Lenguajes formales y computabilidad",
    },
    completed: "2026-01",
    ects: 6,
    grade: "6,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["latex", "computability"],
  },
  {
    code: "TÖL605M",
    name: {
      is: "Grunnatriði siðferðislegrar hökkunar",
      en: "Fundamentals of Ethical Hacking",
      es: "Fundamentos de hacking ético",
    },
    completed: "2025-12",
    ects: 6,
    grade: "6,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["kali", "wireshark", "networksecurity", "linuxunix"],
  },
  {
    code: "REI504M",
    name: {
      is: "Skýjaforritun og stórgögn",
      en: "Cloud Computing and Big Data",
      es: "Computación en la nube y big data",
    },
    completed: "2025-12",
    ects: 6,
    grade: "9,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["aws", "mapreduce", "docker", "linuxunix", "python"],
  },
  {
    code: "HBV501G",
    name: {
      is: "Hugbúnaðarverkefni 1",
      en: "Software Project 1",
      es: "Proyecto de software 1",
    },
    completed: "2025-12",
    ects: 6,
    grade: "7,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [
      "node",
      "express",
      "postgresql",
      "restapidevelopment",
      "gitgithub",
      "agile",
    ],
  },
  {
    code: "TÖL305G",
    name: {
      is: "Tölvunet og öryggi",
      en: "Computer Networks and Security",
      es: "Redes y seguridad informática",
    },
    completed: "2025-12",
    ects: 6,
    grade: "8,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["kali", "networksecurity", "linuxunix"],
  },
  {
    code: "SPÆ003G",
    name: {
      is: "Sjálfsnám í spænsku I (fjarnám)",
      en: "Independent Study in Spanish I (distance)",
      es: "Aprendizaje autónomo de español I (a distancia)",
    },
    completed: "2025-12",
    ects: 6,
    grade: "8,0",
    passed: true,
    mode: "distance",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [],
  },
  {
    code: "803292",
    name: {
      is: "Líkindafræði og tölfræði (PE)",
      en: "Probability and Statistics (PE)",
      es: "Probabilidad y Estadística (PE)",
    },
    completed: "2025-05",
    ects: 6,
    grade: "Passed",
    passed: true,
    mode: "campus",
    place: {
      is: "Complutense-háskólinn í Madríd",
      en: "Complutense University of Madrid",
      es: "Universidad Complutense de Madrid",
    },
    skillIds: ["python", "numpy", "pandas", "r"],
    group: "exchange",
    note: {
      is: "skiptinám · Grado en Ingeniería Informática",
      en: "exchange · Grado en Ingeniería Informática",
      es: "intercambio · Grado en Ingeniería Informática",
    },
  },
  {
    code: "805347",
    name: {
      is: "Hugbúnaðarverkfræði II (IS2)",
      en: "Software Engineering II (IS2)",
      es: "Ingeniería del Software II (IS2)",
    },
    completed: "2025-05",
    ects: 4.5,
    grade: "Passed",
    passed: true,
    mode: "campus",
    place: {
      is: "Complutense-háskólinn í Madríd",
      en: "Complutense University of Madrid",
      es: "Universidad Complutense de Madrid",
    },
    skillIds: ["gitgithub", "springboot", "agile"],
    group: "exchange",
    note: {
      is: "skiptinám · Grado en Ingeniería Informática",
      en: "exchange · Grado en Ingeniería Informática",
      es: "intercambio · Grado en Ingeniería Informática",
    },
  },
  {
    code: "TÖL401G",
    name: {
      is: "Stýrikerfi",
      en: "Operating Systems",
      es: "Sistemas operativos",
    },
    completed: "2025-05",
    ects: 6,
    grade: "6,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Próftaka erlendis",
      en: "Exam taken abroad",
      es: "Examen realizado en el extranjero",
    },
    skillIds: ["c", "cplusplus", "java", "linuxunix", "concurrency"],
  },
  {
    code: "TÖL029M",
    name: {
      is: "Inngangur að gagnaöryggi",
      en: "Introduction to Data Security",
      es: "Introducción a la seguridad de datos",
    },
    completed: "2024-12",
    ects: 6,
    grade: "8,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["kali", "networksecurity", "cryptography"],
  },
  {
    code: "TÖL108G",
    name: {
      is: "Tölvur, stýrikerfi og tölvufærni",
      en: "Computers, Operating Systems and Computer Skills",
      es: "Ordenadores, sistemas operativos e informática",
    },
    completed: "2024-12",
    ects: 4,
    grade: "6,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["linuxunix"],
  },
  {
    code: "TÖL309G",
    name: {
      is: "Tölvutækni og forritun",
      en: "Computer Technology and Programming",
      es: "Tecnología informática y programación",
    },
    completed: "2024-12",
    ects: 6,
    grade: "7,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["c", "assembly", "concurrency"],
  },
  {
    code: "TÖL304G",
    name: {
      is: "Forritunarmál",
      en: "Programming Languages",
      es: "Lenguajes de programación",
    },
    completed: "2024-12",
    ects: 6,
    grade: "7,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["java", "cplusplus", "haskell"],
  },
  {
    code: "TÖL303G",
    name: {
      is: "Gagnasafnsfræði",
      en: "Database Theory",
      es: "Bases de datos",
    },
    completed: "2024-12",
    ects: 6,
    grade: "9,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["postgresql", "mysql", "sql"],
  },
  {
    code: "TÖV201G",
    name: {
      is: "Greining og hönnun stafrænna rása",
      en: "Analysis and Design of Digital Circuits",
      es: "Análisis y diseño de circuitos digitales",
    },
    completed: "2024-05",
    ects: 6,
    grade: "8,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["verilog"],
  },
  {
    code: "TÖL203G",
    name: {
      is: "Tölvunarfræði 2",
      en: "Computer Science 2",
      es: "Informática 2",
    },
    completed: "2024-05",
    ects: 6,
    grade: "7,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["java", "algorithms", "datastructures"],
  },
  {
    code: "REI201G",
    name: {
      is: "Stærðfræði og reiknifræði",
      en: "Mathematics and Scientific Computing",
      es: "Matemáticas y computación científica",
    },
    completed: "2024-05",
    ects: 6,
    grade: "7,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["python", "numpy", "pandas"],
  },
  {
    code: "HBV201G",
    name: {
      is: "Viðmótsforritun",
      en: "User Interface Programming",
      es: "Programación de interfaces",
    },
    completed: "2024-05",
    ects: 8,
    grade: "7,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["java", "javafx"],
  },
  {
    code: "STÆ105G",
    name: {
      is: "Hagnýt stærðfræðigreining",
      en: "Applied Mathematical Analysis",
      es: "Análisis matemático aplicado",
    },
    completed: "2023-12",
    ects: 8,
    grade: "6,5",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: [],
  },
  {
    code: "TÖL107G",
    name: {
      is: "Vefforritun 1",
      en: "Web Programming 1",
      es: "Programación web 1",
    },
    completed: "2023-12",
    ects: 8,
    grade: "7,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["html", "css", "javascript", "gitgithub"],
  },
  {
    code: "TÖL104G",
    name: {
      is: "Stærðfræðimynstur",
      en: "Discrete Mathematics",
      es: "Matemática discreta",
    },
    completed: "2023-12",
    ects: 8,
    grade: "6,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["algorithms", "computability"],
  },
  {
    code: "TÖL101G",
    name: {
      is: "Tölvunarfræði 1",
      en: "Computer Science 1",
      es: "Informática 1",
    },
    completed: "2023-12",
    ects: 6,
    grade: "8,0",
    passed: true,
    mode: "campus",
    place: {
      is: "Háskóli Íslands — Reykjavík",
      en: "University of Iceland — Reykjavík",
      es: "Universidad de Islandia — Reikiavik",
    },
    skillIds: ["java"],
  },
];

export const EDUCATION_PROGRAMS = [
  {
    id: "bsc-cs",
    title: {
      is: "B.Sc. í tölvunarfræði",
      en: "B.Sc. in Computer Science",
      es: "Grado en Informática",
    },
    school: {
      is: "Háskóli Íslands",
      en: "University of Iceland",
      es: "Universidad de Islandia",
    },
    period: "2023 — 2026",
    detail: {
      is: "180,5 ects",
      en: "180.5 ects",
      es: "180,5 ects",
    },
    logo: "/assets/pallas_athena_merki_hi_300921.png",
    hasCourses: true,
    courseGroup: "all",
  },
  {
    id: "exchange",
    title: {
      is: "Skiptinám í tölvunarfræði",
      en: "Exchange in Computer Science",
      es: "Intercambio en Informática",
    },
    school: {
      is: "Complutense-háskólinn í Madríd",
      en: "Complutense University of Madrid",
      es: "Universidad Complutense de Madrid",
    },
    period: "2025",
    detail: {
      is: "10,5 ects",
      en: "10.5 ects",
      es: "10,5 ects",
    },
    logo: "/assets/Escudo_de_la_Universidad_Complutense_de_Madrid.svg",
    hasCourses: true,
    courseGroup: "exchange",
  },
  {
    id: "secondary",
    title: {
      is: "Stúdent",
      en: "Matriculation exam (stúdent)",
      es: "Bachillerato (stúdent)",
    },
    school: {
      is: "Framhaldsskólinn í Mosfellsbæ",
      en: "Mosfellsbær Upper Secondary School",
      es: "Instituto de Mosfellsbær",
    },
    period: "2018 — 2022",
    detail: {
      is: "FMOS",
      en: "FMOS",
      es: "FMOS",
    },
    logo: "/assets/images.png",
    hasCourses: false,
  },
];

export const EDUCATION_HEADING = {
  is: "menntun",
  en: "education",
  es: "educación",
};

/** The program a course was taken in: exchange courses belong to Complutense, the rest to HÍ. */
export function getCourseProgram(course) {
  const id = course.group === "exchange" ? "exchange" : "bsc-cs";
  return EDUCATION_PROGRAMS.find((p) => p.id === id);
}

export function getCoursesForSkill(skillId) {
  return COURSES.filter((c) => c.skillIds.includes(skillId));
}

export function getCoursesByGroup(group) {
  if (!group || group === "all") {
    // Háskóli Íslands courses only — exchange lives under group "exchange"
    return COURSES.filter((c) => c.passed && c.group !== "exchange");
  }
  return COURSES.filter((c) => c.passed && c.group === group);
}

export function getTotalEcts(courses = COURSES) {
  return courses.reduce((sum, c) => {
    if (!c.passed || c.countsTowardTotal === false) return sum;
    return sum + c.ects;
  }, 0);
}

/** Full degree ECTS (HI + exchange transfer). */
export function getDegreeEcts() {
  return getTotalEcts(getCoursesByGroup("all")) + getTotalEcts(getCoursesByGroup("exchange"));
}

const MONTH_LABELS = {
  is: {
    "01": "jan",
    "02": "feb",
    "03": "mar",
    "04": "apr",
    "05": "maí",
    "06": "jún",
    "07": "júl",
    "08": "ágú",
    "09": "sep",
    "10": "okt",
    "11": "nóv",
    "12": "des",
  },
  en: {
    "01": "jan",
    "02": "feb",
    "03": "mar",
    "04": "apr",
    "05": "may",
    "06": "jun",
    "07": "jul",
    "08": "aug",
    "09": "sep",
    "10": "oct",
    "11": "nov",
    "12": "dec",
  },
  es: {
    "01": "ene",
    "02": "feb",
    "03": "mar",
    "04": "abr",
    "05": "may",
    "06": "jun",
    "07": "jul",
    "08": "ago",
    "09": "sep",
    "10": "oct",
    "11": "nov",
    "12": "dic",
  },
};

export function formatCourseMonth(completed, language = "en") {
  const [year, month] = completed.split("-");
  const labels = MONTH_LABELS[language] || MONTH_LABELS.en;
  return `${labels[month] || month} ${year}`;
}
