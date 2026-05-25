"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/translations";

export function LangToggle() {
  const { lang, setLang } = useLanguage();

  const select = (next: Lang) => () => setLang(next);

  return (
    <div className="lang-toggle">
      <button
        className={`lang-btn${lang === "en" ? " active" : ""}`}
        id="btn-en"
        type="button"
        onClick={select("en")}
      >
        EN
      </button>
      <button
        className={`lang-btn${lang === "pt" ? " active" : ""}`}
        id="btn-pt"
        type="button"
        onClick={select("pt")}
      >
        PT
      </button>
    </div>
  );
}
