"use client";

import { I18nText } from "@/components/ui/I18nText";
import { useLanguage } from "@/i18n/LanguageProvider";

const resumeByLang = {
  pt: "/profile/thyago-martins-resume-ptbr.pdf",
  en: "/profile/thyago-martins-resume-en.pdf",
} as const;

const contacts = [
  {
    href: "mailto:oficialthyago2@gmail.com",
    icon: "📧",
    title: "E-mail",
    label: "oficialthyago2@gmail.com",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/thyagomartins",
    icon: "💼",
    title: "LinkedIn",
    label: "in/thyagomartins",
    external: true,
  },
  {
    href: "https://github.com/thyagomartins0",
    icon: "🐙",
    title: "GitHub",
    label: "thyagomartins0",
    external: true,
  },
] as const;

export function Contact() {
  const { lang } = useLanguage();

  const allContacts = [
    ...contacts,
    {
      href: resumeByLang[lang],
      icon: "📄",
      titleKey: "cv_label" as const,
      subKey: "cv_sub" as const,
      external: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="sec-inner">
        <div className="contact-top reveal">
          <I18nText k="contact_tag" as="span" className="stag" style={{ display: "block", textAlign: "center" }} />
          <h2>
            <I18nText k="contact_h2" />
          </h2>
          <p>
            <I18nText k="contact_desc" />
          </p>
          <a href="mailto:oficialthyago2@gmail.com" className="btn-p" style={{ display: "inline-block" }}>
            oficialthyago2@gmail.com →
          </a>
        </div>
        <div className="contact-cards reveal">
          {allContacts.map((item) => (
            <a
              key={item.href + ("title" in item ? item.title : item.titleKey)}
              href={item.href}
              className="cc"
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="cc-icon">{item.icon}</div>
              <h4>{"title" in item ? item.title : <I18nText k={item.titleKey} />}</h4>
              <p>{"label" in item ? item.label : <I18nText k={item.subKey} />}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
