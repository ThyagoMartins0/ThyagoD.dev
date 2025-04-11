'use client';

import Image from 'next/image'
import styles from './page.module.css'
import PeriodDisplay from '@/app/components/PeriodDisplay'
import { useLanguage } from '@/app/i18n/LanguageContext';

type GalleryImage = {
  src: string;
  alt: 'workspace' | 'team' | 'school';
};

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/companies/99/image/mulher.jpeg',
    alt: 'workspace'
  },
  {
    src: '/companies/99/image/copy.jpeg',
    alt: 'team'
  },
  {
    src: '/companies/99/image/escola.png',
    alt: 'school'
  }
];

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

      {/* Description */}
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
              <PeriodDisplay startDate="2023-08-01" endDate="2024-01-31" />
            </div>
            <div className={styles.detailItem}>
              <h3>{t.companies.ninetyNine.about.location}</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>{t.companies.ninetyNine.projects.title}</h2>
          <div className={styles.projectsGrid}>
            {t.companies.ninetyNine.projects.items.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectTitle}>
                    <h3>{project.title}</h3>
                    <span className={styles.role}>{project.role}</span>
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectContent}>
                  <div className={styles.projectMain}>
                    <div className={styles.responsibilities}>
                      <h4>{t.companies.ninetyNine.projects.responsibilities}</h4>
                      <ul>
                        {project.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.highlights}>
                      <h4>{t.companies.ninetyNine.projects.highlights}</h4>
                      <ul>
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.projectSidebar}>
                    <div className={styles.technologies}>
                      <h4>{t.companies.ninetyNine.projects.technologies}</h4>
                      <div className={styles.techTags}>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>{t.companies.ninetyNine.gallery.title}</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => {
              const altText = t.companies.ninetyNine.gallery.images[image.alt];
              return (
                <div key={index} className={styles.galleryItem}>
                  <Image
                    src={image.src}
                    alt={altText}
                    width={400}
                    height={300}
                    className={styles.galleryImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 