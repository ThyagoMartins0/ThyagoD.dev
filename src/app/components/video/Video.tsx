'use client';

import styles from './Video.module.css'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function Video() {
  const { t } = useLanguage();

  return (
    <section className={styles.video}>
      <div className={styles.videoContent}>
        <div className={styles.videoInfo}>
          <h2>{t.video.title}</h2>
          <p>{t.video.description}</p>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            src="https://www.youtube.com/embed/NNU6easVvRI"
            title={t.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
} 