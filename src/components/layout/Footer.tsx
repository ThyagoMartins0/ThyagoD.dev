"use client";

import { I18nText } from "@/components/ui/I18nText";

export function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="ft-logo">
          Thyago<span>Martins</span>
        </div>
        <div className="ft-links">
          <a href="#about">
            <I18nText k="nav_about" />
          </a>
          <a href="#exp">
            <I18nText k="nav_exp" />
          </a>
          <a href="#proj">
            <I18nText k="nav_proj" />
          </a>
          <a href="#skills">
            <I18nText k="nav_skills" />
          </a>
          <a href="#edu">
            <I18nText k="nav_edu" />
          </a>
        </div>
        <div className="ft-copy">
          <I18nText k="footer_copy" />
        </div>
      </div>
    </footer>
  );
}
