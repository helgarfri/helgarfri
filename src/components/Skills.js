import React from "react";
import styles from "./Skills.module.css";

const skillData = [
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
      { name: "vs code", rating: 4 },
      { name: "supabse", rating: 4 },
      { name: "netlify", rating: 4 },
      { name: "postgresql/mysql", rating: 4 },
      { name: "aws", rating: 3 },
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
  {
    title: "tungumál",
    items: [
      { name: "íslenska - móðurmálið mitt", rating: 0 },
      { name: "enska - c2", rating: 0 },
      { name: "spænska - b1", rating: 0 },
      { name: "danska - skil ekki neitt", rating: 0 },
    ],
  },
];

// Up to 5 dots for each rating
function renderDots(rating) {
  const totalDots = 5;
  const dots = [];
  for (let i = 1; i <= totalDots; i++) {
    dots.push(
      <span key={i} className={i <= rating ? styles.dotFilled : styles.dotEmpty}>
        •
      </span>
    );
  }
  return dots;
}

function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>hæfni</h2>

      {/* A grid container for all categories */}
      <div className={styles.categoriesContainer}>
        {skillData.map((category, catIdx) => (
          <div className={styles.category} key={catIdx}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            
            {/* Table-like container for items */}
            <div className={styles.skillTable}>
              {category.items.map((item, itemIdx) => (
                <div className={styles.skillRow} key={itemIdx}>
                  {/* Skill name */}
                  <span className={styles.skillName}>{item.name}</span>
                  
                  {/* Rating dots (only if rating > 0) */}
                  {item.rating > 0 && (
                    <span className={styles.dotContainer}>
                      {renderDots(item.rating)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
