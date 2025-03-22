'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';
import { languages } from '@/app/i18n';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={styles.container}>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as keyof typeof languages)}
        className={styles.select}
        aria-label={t.languageSelector}
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
} 