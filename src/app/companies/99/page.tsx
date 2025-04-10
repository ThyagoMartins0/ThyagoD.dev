'use client';

import Image from 'next/image'
import styles from './page.module.css'
import PeriodDisplay from '@/app/components/PeriodDisplay'
import { useLanguage } from '@/app/i18n/LanguageContext';

const GALLERY_IMAGES = [
  {
    src: '/companies/99/gallery/workspace.jpg',
    alt: 'workspace'
  },
  {
    src: '/companies/99/gallery/team.jpg',
    alt: 'team'
  },
  {
    src: '/companies/99/gallery/event.jpg',
    alt: 'event'
  }
]

export default function NinetyNinePage() {
  const { t } = useLanguage();
  
  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.banner}>
        <Image
          src="/companies/99/image/99freelas_cover.jpg"
          alt="99 freelas Banner"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/99/image/99freelas_logo.jpg"
                alt="99 Freelas"
                width={80}
                height={80}
              />
            </div>
            <h1>{t.companies.ninetyNine.slogan}</h1>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>{t.companies.ninetyNine.about.title}</h2>
          <p>{t.companies.ninetyNine.about.description}</p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>{t.companies.ninetyNine.about.role}</h3>
              <p>Software Engineer</p>
            </div>
            <div className={styles.detailItem}>
              <h3>{t.companies.ninetyNine.about.period}</h3>
             
            </div>
            <div className={styles.detailItem}>
              <h3>{t.companies.ninetyNine.about.location}</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>{t.companies.ninetyNine.gallery.title}</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={t.companies.ninetyNine.gallery.images[image.alt as keyof typeof t.companies.ninetyNine.gallery.images]}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 