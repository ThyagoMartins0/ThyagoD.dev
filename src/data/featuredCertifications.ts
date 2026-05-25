import type { Lang } from "@/i18n/translations";

export type LocalizedText = Record<Lang, string>;

export type FeaturedCertification = {
  id: string;
  name: LocalizedText;
  platform: LocalizedText;
  icon: string;
  image?: string;
  accent: string;
};

export const featuredCertifications: FeaturedCertification[] = [
  {
    id: "github-foundations",
    name: {
      en: "GitHub Foundations",
      pt: "GitHub Foundations",
    },
    platform: {
      en: "GitHub",
      pt: "GitHub",
    },
    icon: "🐙",
    accent: "#24292f",
  },
  {
    id: "az-900",
    name: {
      en: "AZ-900 — Azure Fundamentals",
      pt: "AZ-900 — Fundamentos do Azure",
    },
    platform: {
      en: "Microsoft",
      pt: "Microsoft",
    },
    icon: "☁️",
    image: "/profile/certificados/azure_zero.png",
    accent: "#0078d4",
  },
  {
    id: "aws-fundamentals",
    name: {
      en: "AWS Cloud Fundamentals",
      pt: "Fundamentos de AWS Cloud",
    },
    platform: {
      en: "Amazon Web Services",
      pt: "Amazon Web Services",
    },
    icon: "🟧",
    accent: "#ff9900",
  },
];

export function getFeaturedCertText(text: LocalizedText, lang: Lang): string {
  return text[lang];
}
