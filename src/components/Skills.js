import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  SKILL_CATALOG,
  SKILL_CATEGORY_IDS,
  SKILLS_HEADING,
} from "../constants/skills";
import {
  defaultSkillTone,
  getSkillIcon,
  getSkillTone,
} from "../constants/skillVisuals";
import SkillDetailModal from "./SkillDetailModal";
import styles from "./Skills.module.css";

/** Strongest skills first; ties keep the order they're listed in. */
function byRating(skillIds) {
  return skillIds
    .filter((id) => SKILL_CATALOG[id])
    .sort((a, b) => SKILL_CATALOG[b].rating - SKILL_CATALOG[a].rating);
}

function Skills() {
  const { language } = useContext(LanguageContext);
  const [selectedId, setSelectedId] = useState(null);

  const headingText = SKILLS_HEADING[language] || SKILLS_HEADING.en;
  const selectedSkill = selectedId ? SKILL_CATALOG[selectedId] : null;
  const lang = language || "en";

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>{headingText}</h2>

      <div className={styles.categoriesContainer}>
        {SKILL_CATEGORY_IDS.map((category) => (
          <div className={styles.category} key={category.id}>
            <h3 className={styles.categoryTitle}>
              {category.titles[lang] || category.titles.en}
            </h3>

            <div className={styles.skillRow}>
              {byRating(category.skills).map((skillId) => {
                const skill = SKILL_CATALOG[skillId];
                const IconComponent = getSkillIcon(skillId);
                const tone = getSkillTone(skillId);
                return (
                  <button
                    type="button"
                    className={styles.skillTile}
                    key={skillId}
                    style={{ "--tone": tone.color, "--tone-bg": tone.bg }}
                    onClick={() => setSelectedId(skillId)}
                    aria-haspopup="dialog"
                  >
                    <span className={styles.skillIcon} aria-hidden>
                      <IconComponent />
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
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

export default Skills;
