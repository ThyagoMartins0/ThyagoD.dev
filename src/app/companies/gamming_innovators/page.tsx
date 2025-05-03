'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useLanguage } from '@/app/i18n/LanguageContext';

const GALLERY_IMAGES = [
  {
    src: '/companies/gamming/admin.png',
    alt: 'team'
  },
  {
    src: '/companies/gamming/cassino.png',
    alt: 'workspace'
  },
  {
    src: '/companies/gamming/home.png',
    alt: 'event'
  }
]

export default function GammingInnovatorsPage() {
  const { t } = useLanguage();

  const PROJECTS = [
    {
      key: 'project1',
      technologies: ["Php", "Laravel", "Vue.js", "MySQL", "Python", , "i18n", , "gatway de pagamento"],
    },
    {
      key: 'project2',
      technologies: ["Node.js", "TypeScript", "NestJS",  "Docker", "Jest","Mutation","Jest","JUnit","Mockito","Postman"],
     
    },
    {
      key: 'project3',
      technologies: ["Dockploy", "Amazom", "Docker", "Vps", "Hosting" ],
       
    }
    ,
    {
      key: 'project4',
      technologies: ["React", "Next.js", "TypeScript", "Jest", "Laravel", "MySQL", "Docker", "Kafka", "Postman"],
      
    }
  ];

  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.banner}>
        <Image
          src="/companies/gamming/page-banner.png"
          alt="Gamming Innovators Banner"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/gamming/icon.png"
                alt="Gamming Innovators"
                width={80}
                height={80}
              />
            </div>
            <h1>Gamming Innovators</h1>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>{t.companies.gamming.about.title}</h2>
          <p>{t.companies.gamming.about.description}</p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>{t.companies.gamming.about.role}</h3>
              <p>Software Developer (Fullstack) </p>
            </div>
         
            <div className={styles.detailItem}>
              <h3>{t.companies.gamming.about.location}</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendações */}
      <section className={styles.recommendations}>
  
      </section>

      {/* Projetos */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>{t.companies.gamming.projects.title}</h2>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project) => {
              const projectTranslations = t.companies.gamming.projects[project.key as keyof typeof t.companies.gamming.projects] as {
                title: string;
                description: string;
                role: string;
                responsibilities: readonly string[];
                highlights: readonly string[];
              };

              return (
                <div key={project.key} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectTitle}>
                      <h3>{projectTranslations.title}</h3>
                      <span className={styles.role}>{projectTranslations.role}</span>
                       
                    </div>
                  </div>

                  <p className={styles.projectDescription}>{projectTranslations.description}</p>

                  <div className={styles.projectContent}>
                    <div className={styles.projectMain}>
                      <div className={styles.responsibilities}>
                        <h4>{t.companies.gamming.projects.responsibilities}</h4>
                        <ul>
                          {projectTranslations.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.highlights}>
                        <h4>{t.companies.gamming.projects.highlights}</h4>
                        <ul>
                          {projectTranslations.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={styles.projectSidebar}>
                      <div className={styles.technologies}>
                        <h4>{t.companies.gamming.projects.technologies}</h4>
                        <div className={styles.techTags}>
                          {project.technologies.map((tech, i) => (
                            <span key={i} className={styles.techTag}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>{t.companies.gamming.gallery.title}</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={t.companies.gamming.gallery.images[image.alt as keyof typeof t.companies.gamming.gallery.images]}
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