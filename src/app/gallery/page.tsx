'use client';

import Image from 'next/image';
import Header from '../components/header/Header';
import styles from './page.module.css';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();

  const BIOGRAPHY_SECTIONS = [
    {
      image: '/galeria/MAR_8998.jpg',
      alt: t.gallery.sections.education.alt,
      title: t.gallery.sections.education.title,
      text: t.gallery.sections.education.text
    },
    {
      image: '/galeria/FOTOPERFILPROFISSIONAL.jpg',
      alt: t.gallery.sections.professional.alt,
      title: t.gallery.sections.professional.title,
      text: t.gallery.sections.professional.text
    },
    {
      image: '/profile/imagens/thyago3.jpg',
      alt: t.gallery.sections.personal.alt,
      title: t.gallery.sections.personal.title,
      text: t.gallery.sections.personal.text
    }
  ];

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1>{t.gallery.title}</h1>
        <p className={styles.description}>
          {t.gallery.description}
        </p>
        
        <div className={styles.bioSections}>
          {BIOGRAPHY_SECTIONS.map((section, index) => (
            <div key={index} className={styles.bioSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.bioContent}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 