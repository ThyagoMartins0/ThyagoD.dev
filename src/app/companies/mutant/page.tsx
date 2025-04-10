'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useLanguage } from '@/app/i18n/LanguageContext';
import PeriodDisplay from '@/app/components/PeriodDisplay';

const GALLERY_IMAGES = [
 
  {
    src: '/companies/mutant/gallery/team.jpg',
    alt: 'team'
  },
  {
    src: '/companies/mutant/image/fotodemateriais.jpg',
    alt: 'workspace'
  },
  {
    src: '/companies/mutant/gallery/event.jpg',
    alt: 'event'
  }
]

export default function MutantPage() {
  const { t } = useLanguage();

  const PROJECTS = [
    {
      title: t.companies.mutant.projects.myRequests.title,
      description: t.companies.mutant.projects.myRequests.description,
      period: '2024-02-01',
      technologies: ["Java 17", "Spring Boot 3", "Sonar", "PostgreSQL", "kafka",  "Microservices", "JUnit", "Mockito", "Azure Devops","MongoDB","Postman"],
      role: t.companies.mutant.projects.myRequests.role,
      responsibilities: t.companies.mutant.projects.myRequests.responsibilities,
      highlights: t.companies.mutant.projects.myRequests.highlights
    },
    {
      title: t.companies.mutant.projects.biometric.title,
      description: t.companies.mutant.projects.biometric.description,
      period: t.companies.mutant.projects.biometric.period,
      technologies: ["Node.js", "TypeScript", "NestJS",  "Docker", "Jest","Mutation","Jest","JUnit","Mockito","Postman"],
      role: t.companies.mutant.projects.biometric.role,
      responsibilities: t.companies.mutant.projects.biometric.responsibilities,
      highlights: t.companies.mutant.projects.biometric.highlights
    },
    {
      title: t.companies.mutant.projects.morada.title,
      description: t.companies.mutant.projects.morada.description,
      period: t.companies.mutant.projects.morada.period,
      technologies: ["React", "Next.js", "TypeScript", "Jest", "BFF", "JUnit", "Mockito"],
      role: t.companies.mutant.projects.morada.role,
      responsibilities: t.companies.mutant.projects.morada.responsibilities,
      highlights: t.companies.mutant.projects.morada.highlights
    }
  ];

  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.banner}>
        <Image
          src="/companies/mutant/image/mutantbr_cover.jpg"
          alt="Mutant Banner"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/mutant/image/mutantbr_logo.svg"
                alt="Mutant"
                width={80}
                height={80}
              />
            </div>
            <h1>{t.companies.mutant.slogan}</h1>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>{t.companies.mutant.about.title}</h2>
          <p>{t.companies.mutant.about.description}</p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>{t.companies.mutant.about.role}</h3>
              <p>Software Engineer</p>
            </div>
            <div className={styles.detailItem}>
              <h3>{t.companies.mutant.about.period}</h3>
              <PeriodDisplay startDate="2024-08-01" />
            </div>
            <div className={styles.detailItem}>
              <h3>{t.companies.mutant.about.location}</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendações */}
      <section className={styles.recommendations}>
        <div className={styles.container}>
          <h2>{t.companies.mutant.recommendations.title}</h2>
          <div className={styles.recommendationsContainer}>
            <div className={styles.recommendationCard}>
              <div className={styles.recommendationHeader}>
                <Image
                  src="/companies/mutant/image/recomendagabriel.jpg"
                  alt="Foto do recomendante"
                  width={60}
                  height={60}
                  className={styles.recommendationImage}
                />
                <div>
                  <h3>{t.companies.mutant.recommendations.gabriel.name}</h3>
                  <p>{t.companies.mutant.recommendations.gabriel.role}</p>
                </div>
              </div>
              <blockquote>
                {t.companies.mutant.recommendations.gabriel.text}
              </blockquote>
            </div>

            <div className={styles.recommendationCard}>
              <div className={styles.recommendationHeader}>
                <Image
                  src="/companies/mutant/image/recomendadaniel.jpg"
                  alt="Foto da recomendante"
                  width={60}
                  height={60}
                  className={styles.recommendationImage}
                />
                <div>
                  <h3>{t.companies.mutant.recommendations.daniel.name}</h3>
                  <p>{t.companies.mutant.recommendations.daniel.role}</p>
                </div>
              </div>
              <blockquote>
                {t.companies.mutant.recommendations.daniel.text}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>{t.companies.mutant.projects.title}</h2>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectTitle}>
                    <h3>{project.title}</h3>
                    <span className={styles.role}>{project.role}</span>
                    <div className={styles.projectPeriod}>{project.period}</div>
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectContent}>
                  <div className={styles.projectMain}>
                    <div className={styles.responsibilities}>
                      <h4>{t.companies.mutant.projects.responsibilities}</h4>
                      <ul>
                        {project.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.highlights}>
                      <h4>{t.companies.mutant.projects.highlights}</h4>
                      <ul>
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.projectSidebar}>
                    <div className={styles.technologies}>
                      <h4>{t.companies.mutant.projects.technologies}</h4>
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

      {/* Galeria */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>{t.companies.mutant.gallery.title}</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={t.companies.mutant.gallery.images[image.alt as keyof typeof t.companies.mutant.gallery.images]}
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
  );
} 