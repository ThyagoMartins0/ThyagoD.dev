"use client";

import { useEffect, useRef } from "react";
import { I18nText } from "@/components/ui/I18nText";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".sk-card");
    if (!cards) return;

    cards.forEach((card) => {
      card.querySelectorAll<HTMLElement>(".sk-bar").forEach((bar) => {
        bar.style.width = "0";
      });
    });

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll<HTMLElement>(".sk-bar[data-w]").forEach((bar) => {
            bar.style.width = `${bar.dataset.w}%`;
          });
          barObs.unobserve(e.target);
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => barObs.observe(card));
    return () => barObs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="sec-inner">
        <I18nText k="skills_tag" as="span" className="stag reveal" />
        <I18nText k="skills_h2" as="h2" className="sh2 reveal" />
        <div className="skills-grid" ref={gridRef}>
          {skillCategories.map((cat) => (
            <div key={cat.titleKey} className={`sk-card reveal${cat.delay ? ` ${cat.delay}` : ""}`}>
              <div className="sk-icon">{cat.icon}</div>
              <h4>
                <I18nText k={cat.titleKey} />
              </h4>
              <p>
                <I18nText k={cat.descKey} />
              </p>
              <div className="sk-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="sk-row">
                    <span className="sk-name">{skill.name}</span>
                    <div className="sk-bar-wrap">
                      <div className="sk-bar" data-w={skill.width} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
