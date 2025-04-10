'use client';

import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Video.module.css'

export default function Video() {
  const { language } = useLanguage();

  const getVideoUrl = () => {
    switch (language) {
      case 'en':
        return 'https://www.youtube.com/embed/ox2cInj1wn4';
      case 'es':
        return 'https://www.youtube.com/embed/MuNyfqxAO6Y';
      default:
        return 'https://www.youtube.com/embed/NNU6easVvRI';
    }
  };

  return (
    <section className={styles.video}>
      <div className={styles.videoContent}>
        <div className={styles.videoInfo}>
          <h2>VIDEO</h2>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            src={getVideoUrl()}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
} 