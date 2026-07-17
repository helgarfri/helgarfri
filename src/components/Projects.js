import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";
import micLogo from "../assets/mic-logo-2-5-text-cropped.png";
import KeepCase from "./KeepCase";
import { SKILL_CATALOG } from "../constants/skills";
import {
  defaultSkillTone,
  getSkillIcon,
  getSkillTone,
} from "../constants/skillVisuals";
import SkillDetailModal from "./SkillDetailModal";

const HEADINGS = {
  is: "verkefni",
  en: "projects",
  es: "proyectos",
};

const COPY = {
  is: { techLabel: "tækni" },
  en: { techLabel: "stack" },
  es: { techLabel: "stack" },
};

function chipTone(skillId, theme) {
  const tone = getSkillTone(skillId);
  if (
    theme === "mixpath" &&
    (tone.color === "#181b21" || tone.color === "#2a3548")
  ) {
    return { bg: "rgba(255, 255, 255, 0.1)", color: "#e0e0e0" };
  }
  if (theme === "mixpath") {
    return {
      bg: mutedWash(tone.color, 0.18),
      color: softOnDark(tone.color),
    };
  }
  return {
    bg: mutedWash(tone.color, 0.16),
    color: softOnLight(tone.color),
  };
}

function softOnDark(hex) {
  return mixToward(hex, "#f0f0f0", 0.28);
}

function softOnLight(hex) {
  return mixToward(hex, "#1b263b", 0.22);
}

function mutedWash(hex, alpha) {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(27, 38, 59, ${alpha})`;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function hexToRgb(hex) {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return null;
  return {
    r: parseInt(raw.slice(0, 2), 16),
    g: parseInt(raw.slice(2, 4), 16),
    b: parseInt(raw.slice(4, 6), 16),
  };
}

function mixToward(hex, towardHex, amount) {
  const a = hexToRgb(hex);
  const b = hexToRgb(towardHex);
  if (!a || !b) return hex;
  const mix = (x, y) => Math.round(x + (y - x) * amount);
  const toHex = (n) => n.toString(16).padStart(2, "0");
  return `#${toHex(mix(a.r, b.r))}${toHex(mix(a.g, b.g))}${toHex(mix(a.b, b.b))}`;
}

const PROJECTS = [
  {
    id: "mixpath",
    theme: "mixpath",
    logo: "/assets/mixpath-logo.png",
    logoAlt: "Mixpath",
    version: "beta",
    siteUrl: "https://mixpath.app",
    siteLabel: "mixpath.app",
    preview: "/assets/mixpath-demo.png",
    previewAlt: {
      is: "Mixpath – net af lögum og settleið",
      en: "Mixpath – track network and set route",
      es: "Mixpath – red de pistas y ruta de set",
    },
    description: {
      is: "forrit sem gerir plötusnúðum kleift að sjá safnið sitt af lögum sem net, plana sett og finna leiðir milli laga út frá hraða lagsins (bpm) og lyklinum sem það er í.",
      en: "software that lets djs see their track collection as a network, plan sets, and find paths between tracks based on bpm and musical key.",
      es: "software que permite a djs ver su colección de pistas como una red, planificar sets y encontrar rutas entre canciones según el bpm y la tonalidad.",
    },
    skillIds: ["next", "supabase", "postgresql", "netlify", "render", "resend"],
    repoUrl: "https://github.com/helgarfri/mixpath",
    repoLabel: "helgarfri/mixpath",
  },
  {
    id: "map-in-color",
    theme: "mic",
    logo: micLogo,
    logoAlt: "map in color logo",
    version: "v3.0.0",
    versionUrl:
      "https://github.com/helgarfri/map-in-color/releases/tag/v3.0.0",
    siteUrl: "https://mapincolor.com",
    siteLabel: "mapincolor.com",
    preview: "/assets/steps2.png",
    previewAlt: {
      is: "Map in Color – choropleth kortagerð",
      en: "Map in Color – choropleth map builder",
      es: "Map in Color – editor de mapas coropléticos",
    },
    description: {
      is: "v3 leggur áherslu á skýrari kortaupplifun og vettvang til að uppgötva og deila kortum. meðal eiginleika: kort eftir tölulegum eða flokkagögnum, snjallur innflutningur (csv, tsv, excel), uppgötvun og samfélag, leikvangur til að prófa án innskráningar, og einkaréttur og deiling. hjálparskjöl og lifandi síða á mapincolor.com.",
      en: "v3 focuses on a clearer, more powerful mapping experience and a dedicated place to discover and share maps. features include choropleth and categorical maps, smart data import (csv, tsv, excel), explore and community, a playground to try without signing up, and ownership and sharing controls. documentation and live site at mapincolor.com.",
      es: "v3 se centra en una experiencia de mapas más clara y potente y en un espacio para descubrir y compartir mapas. incluye mapas coropléticos y categóricos, importación inteligente (csv, tsv, excel), exploración y comunidad, playground sin registro y controles de propiedad y compartición. documentación y sitio en vivo en mapincolor.com.",
    },
    skillIds: ["react", "node", "express", "postgresql", "css", "html"],
    repoUrl: "https://github.com/helgarfri/map-in-color",
    repoLabel: "helgarfri/map-in-color",
  },
];

function Projects() {
  const { language } = useContext(LanguageContext);
  const [selectedId, setSelectedId] = useState(null);
  const lang = language || "en";
  const heading = HEADINGS[lang] || HEADINGS.en;
  const copy = COPY[lang] || COPY.en;
  const selectedSkill = selectedId ? SKILL_CATALOG[selectedId] : null;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.projectList}>
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`${styles.card} ${styles[project.theme]}`}
            >
              <div className={styles.body}>
                <div className={styles.logoRow}>
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.logoAlt || ""}
                      className={styles.brandLogo}
                    />
                  ) : (
                    <h3 className={styles.projectTitle}>
                      <KeepCase>{project.title}</KeepCase>
                    </h3>
                  )}
                </div>

                <div className={styles.metaLinks}>
                  {project.version &&
                    (project.versionUrl ? (
                      <a
                        href={project.versionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.metaLink}
                      >
                        {project.version}
                      </a>
                    ) : (
                      <span className={styles.versionLabel}>
                        {project.version}
                      </span>
                    ))}
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    <KeepCase>{project.siteLabel}</KeepCase>
                  </a>
                </div>

                <p className={styles.description}>
                  {project.description[lang] || project.description.en}
                </p>

                {project.skillIds?.length > 0 && (
                  <div className={styles.techStack}>
                    <p className={styles.techLabel}>{copy.techLabel}</p>
                    <ul className={styles.techList}>
                      {project.skillIds.map((skillId) => {
                        const skill = SKILL_CATALOG[skillId];
                        if (!skill) return null;
                        const Icon = getSkillIcon(skillId);
                        const tone = chipTone(skillId, project.theme);
                        return (
                          <li key={skillId}>
                            <button
                              type="button"
                              className={styles.techChip}
                              style={{
                                background: tone.bg,
                                borderColor: tone.color,
                                color: tone.color,
                              }}
                              onClick={() => setSelectedId(skillId)}
                              aria-haspopup="dialog"
                            >
                              <span className={styles.techIcon} aria-hidden>
                                <Icon />
                              </span>
                              <span className={styles.techName}>
                                {skill.name}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {project.repoUrl && (
                  <div className={styles.repoLink}>
                    <FaGithub className={styles.repoIcon} aria-hidden />
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.metaLink}
                    >
                      <KeepCase>{project.repoLabel}</KeepCase>
                    </a>
                  </div>
                )}
              </div>

              <div className={styles.preview}>
                <img
                  src={project.preview}
                  alt={
                    project.previewAlt[lang] || project.previewAlt.en
                  }
                  className={styles.previewImage}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <SkillDetailModal
        open={Boolean(selectedSkill)}
        onClose={() => setSelectedId(null)}
        skill={selectedSkill}
        skillId={selectedId}
        language={lang}
        IconComponent={selectedId ? getSkillIcon(selectedId) : null}
        tone={selectedId ? getSkillTone(selectedId) : defaultSkillTone}
      />
    </section>
  );
}

export default Projects;
