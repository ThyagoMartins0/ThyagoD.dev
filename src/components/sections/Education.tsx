"use client";

import { I18nText } from "@/components/ui/I18nText";
import { CertCarousel } from "@/components/sections/CertCarousel";
import { FeaturedCerts } from "@/components/sections/FeaturedCerts";

const education = [
  {
    year: "2019–2024",
    degreeKey: "edu1_deg" as const,
    school: "ESAMC — São Paulo",
    descKey: "edu1_desc" as const,
    delay: "",
  },
  {
    year: "2016–2018",
    degreeKey: "edu2_deg" as const,
    school: "ETEC — São Paulo",
    descKey: "edu2_desc" as const,
    delay: "d1",
  },
  {
    year: "2018–2020",
    degreeKey: "edu3_deg" as const,
    school: "Evolutime",
    descKey: "edu3_desc" as const,
    delay: "d2",
  },
];

export function Education() {
  return (
    <section id="edu">
      <div className="sec-inner">
        <div className="edu-grid">
          <div>
            <I18nText k="edu_tag" as="span" className="stag reveal" />
            <I18nText k="edu_h2" as="h2" className="sh2 reveal" />
            <div className="edu-list">
              {education.map((item) => (
                <div key={item.year} className={`edu-item reveal${item.delay ? ` ${item.delay}` : ""}`}>
                  <div className="edu-yr">{item.year}</div>
                  <div>
                    <div className="edu-deg">
                      <I18nText k={item.degreeKey} />
                    </div>
                    <div className="edu-school">{item.school}</div>
                    <div className="edu-desc">
                      <I18nText k={item.descKey} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <I18nText k="cert_tag" as="span" className="stag reveal" />
            <h2 className="sh2 reveal">&nbsp;</h2>
            <CertCarousel />
          </div>
        </div>
        <FeaturedCerts />
      </div>
    </section>
  );
}
