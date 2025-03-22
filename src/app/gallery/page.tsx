'use client';

import Image from 'next/image';
import Header from '../components/header/Header';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './page.module.css';

export default function GalleryPage() {
  const { t } = useLanguage();

  const galleryItems = [
    {
      image: '/galeria/MAR_8998.jpg',
      alt: 'Thyago smiling',
      title: 'Academic Background',
      text: 'Graduated in Systems Analysis and Development, focusing on web and mobile development. Always seeking to learn new technologies and methodologies to create innovative solutions.'
    },
    {
      image: '/galeria/MAR_8999.jpg',
      alt: 'Thyago in blue clothes',
      title: 'Professional Experience',
      text: 'Full Stack Developer with experience in React, Next.js, Node.js, and TypeScript. I have worked on various challenging projects, contributing to the development of scalable and high-performance solutions.'
    },
    {
      image: '/galeria/MAR_9000.jpg',
      alt: 'Thyago running',
      title: 'Personal Life & Hobbies',
      text: 'Beyond programming, I am passionate about sports and physical activities. I believe that a healthy body keeps the mind healthy, and this directly reflects on the quality of my work and creativity.'
    }
  ];

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.hero}>
          <h1>{t.gallery.title}</h1>
          <p>{t.gallery.description}</p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMore}>
          <button className={styles.button}>
            {t.gallery.viewMore}
          </button>
        </div>
      </div>
    </main>
  );
} 