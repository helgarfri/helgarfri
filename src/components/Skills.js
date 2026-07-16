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

function renderDots(rating) {
  const dots = [];
  for (let i = 1; i <= 5; i++) {
    dots.push(
      <span
        key={i}
        className={i <= rating ? styles.dotFilled : styles.dotEmpty}
        aria-hidden
      />
    );
  }
  return dots;
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
              {category.skills.map((skillId) => {
                const skill = SKILL_CATALOG[skillId];
                if (!skill) return null;
                const IconComponent = getSkillIcon(skillId);
                const tone = getSkillTone(skillId);
                return (
                  <button
                    type="button"
                    className={styles.skillTile}
                    key={skillId}
                    style={{
                      background: tone.bg,
                      borderColor: tone.color,
                      color: tone.color,
                    }}
                    onClick={() => setSelectedId(skillId)}
                    aria-haspopup="dialog"
                  >
                    <span className={styles.skillIcon} aria-hidden>
                      <IconComponent />
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                    {skill.rating > 0 && (
                      <span className={styles.dotContainer} aria-hidden>
                        {renderDots(skill.rating)}
                      </span>
                    )}
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
