"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ScrollReveal } from "../effects/ScrollReveal";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollReveal />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
