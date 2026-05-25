"use client";

import { useState } from "react";
import { I18nText } from "@/components/ui/I18nText";
import { useLanguage } from "@/i18n/LanguageProvider";
import { experiences } from "@/data/experiences";

export function Experience() {
  const [activeId, setActiveId] = useState("e1");
  const { t } = useLanguage();

  return (
    <section id="exp">
      <div className="sec-inner">
        <I18nText k="exp_tag" as="span" className="stag reveal" />
        <I18nText k="exp_h2" as="h2" className="sh2 reveal" />
        <div className="exp-grid reveal">
          <div className="exp-timeline">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                type="button"
                className={`exp-btn${activeId === exp.id ? " active" : ""}`}
                onClick={() => setActiveId(exp.id)}
              >
                <div className="exp-co">
                  {exp.company}
                  {exp.volunteer && (
                    <>
                      {" "}
                      <I18nText k="volunteer" />
                    </>
                  )}
                </div>
                <div className="exp-period">
                  <I18nText k={exp.periodKey} />
                </div>
              </button>
            ))}
          </div>
          <div>
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`exp-detail${activeId === exp.id ? " active" : ""}`}
                id={exp.id}
              >
                <div className="exp-role">
                  <I18nText k={exp.roleKey} />
                </div>
                <div className="exp-meta">
                  {exp.metaStatic?.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {exp.metaKeys.map((key) => (
                    <span key={key}>
                      {key.includes("period") ? "📅 " : ""}
                      {t(key)}
                    </span>
                  ))}
                </div>
                <p className="exp-desc">
                  <I18nText k={exp.descKey} />
                </p>
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="etag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="exp-achs">
                  {exp.achievements.map((key) => (
                    <div key={key} className="ach">
                      <I18nText k={key} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
