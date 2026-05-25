"use client";

import { LangToggle } from "@/components/ui/LangToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { I18nText } from "@/components/ui/I18nText";

export function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        Thyago<span>Martins</span>
      </div>
      <div className="nav-links">
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
        <a href="#contact">
          <I18nText k="nav_contact" />
        </a>
      </div>
      <div className="nav-right">
        <LangToggle />
        <ThemeToggle />
        <a href="mailto:oficialthyago2@gmail.com" className="nav-cta">
          <I18nText k="nav_cta" />
        </a>
      </div>
    </nav>
  );
}
