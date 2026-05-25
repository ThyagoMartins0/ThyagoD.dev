"use client";

import Image from "next/image";
import { I18nText } from "@/components/ui/I18nText";

const values = [
  { icon: "🏛️", title: "val1t" as const, desc: "val1d" as const },
  { icon: "📈", title: "val2t" as const, desc: "val2d" as const },
  { icon: "🌎", title: "val3t" as const, desc: "val3d" as const },
  { icon: "🔐", title: "val4t" as const, desc: "val4d" as const },
  { icon: "🤖", title: "val5t" as const, desc: "val5d" as const, span: true },
];

export function About() {
  return (
    <section id="about">
      <div className="sec-inner">
        <div className="about-grid">
          <div className="reveal">
            <div className="about-avatar">
              <Image
                src="/profile/thyago-martins.png"
                alt="Thyago C. Martins"
                fill
                className="avatar-photo"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
              <div className="about-badge">
                <div className="badge-name">Thyago C. Martins</div>
                <div className="badge-sub">São Paulo, Brasil · UTC-3</div>
                <div className="badge-langs">
                  <span className="lang-pill">🇧🇷 Portuguese — Native</span>
                  <span className="lang-pill">🇺🇸 English — Professional</span>
                  <span className="lang-pill">🇪🇸 Spanish — Basic</span>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal d1 about-right">
            <I18nText k="about_tag" as="span" className="stag" />
            <I18nText k="about_h2" as="h2" className="sh2" style={{ marginBottom: 16 }} />
            <p className="about-p">
              <I18nText k="about_p1" />
            </p>
            <p className="about-p">
              <I18nText k="about_p2" />
            </p>
            <p className="about-p">
              <I18nText k="about_p3" />
            </p>
            <div className="about-vals">
              {values.map((v) => (
                <div key={v.title} className={`val${v.span ? " val-span" : ""}`}>
                  <div className="val-icon">{v.icon}</div>
                  <div className="val-t">
                    <I18nText k={v.title} />
                  </div>
                  <div className="val-d">
                    <I18nText k={v.desc} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
