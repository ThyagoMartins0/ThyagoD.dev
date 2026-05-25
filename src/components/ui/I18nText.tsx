"use client";

import type { CSSProperties, ElementType } from "react";
import type { TranslationKey } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageProvider";

type I18nTextProps = {
  k: TranslationKey;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export function I18nText({ k, as: Tag = "span", className, style }: I18nTextProps) {
  const { t } = useLanguage();
  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: t(k) }}
    />
  );
}
