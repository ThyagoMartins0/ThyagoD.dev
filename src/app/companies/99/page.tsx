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

const PROJECTS = [
  {
    title: 'Desenvolvimento Freelancer',
    description: 'Desenvolvimento de aplição laravel, voltado para escola de cursos, com sistema de login, cadastro de alunos, professores, cursos, aulas entre os varios setores da empresa e descontos para os alunos, com sistema de pagamento e gerenciamento de financeiro.',
    period: 'Janeiro 2023 - Agosto 2024',
    technologies: ['Laravel', 'Php', 'Filament', 'Mysql', 'Docker', 'AWS',, 'Terraform'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
      'Documentação técnica e de usuário',
      'Gestão de projetos e comunicação com clientes',
      'Plataforma que continua videos para os alunos',
      'Sistema de gerenciamento de financeiro',
      'Sistema de gerenciamento de alunos, professores e cursos',
      'Sistema de gerenciamento de aulas',
      'Sistema de gerenciamento de pagamentos',      
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Implementação de boas práticas de desenvolvimento e arquitetura limpa',
      'Experiência com diferentes tecnologias e frameworks',
      'Trabalho remoto e gestão de tempo eficiente',
      'Comunicação clara e profissional com clientes'
    ]
  },
  {
    title: 'Desenvolvimento Freelancer',
    description: 'Desemvolvimento de paginas em wordpress,e-commerce, com sistema de login, cadastro de clientes, produtos, pedidos, pagamentos, entre outros setores da empresa.',
    period: 'Agosto 2023 - Janeiro 2024',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Implementação segura de login e cadastro de clientes',
      'Integração com bancos de dados e serviços externos',
      'Integrar sistema da loja ao wordpress',
      'garantir a segurança e a performance da loja',
    
    ],
    highlights: [
      'com essa loja a cliente pode melhorar ainda mais suas vendas e atendimento aos clientes, começando assim a fazer vendas mais faceis e com mais segurança',
    ]
  }, {
    title: 'Desenvolvimento Freelancer',
    description: 'Desenvolvimento de diversos projetos como freelancer, trabalhando com diferentes tecnologias e frameworks.',
    period: 'Agosto 2023 - Janeiro 2024',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Implementação de APIs RESTful',
      'Integração com bancos de dados e serviços externos',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
      'Documentação técnica e de usuário',
      'Gestão de projetos e comunicação com clientes'
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Implementação de boas práticas de desenvolvimento e arquitetura limpa',
      'Experiência com diferentes tecnologias e frameworks',
      'Trabalho remoto e gestão de tempo eficiente',
      'Comunicação clara e profissional com clientes'
    ]
  },
  {
    title: 'Desenvolvimento Freelancer',
    description: 'Desenvolvimento de diversos projetos como freelancer, trabalhando com diferentes tecnologias e frameworks.',
    period: 'Agosto 2023 - Janeiro 2024',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Implementação de APIs RESTful',
      'Integração com bancos de dados e serviços externos',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
      'Documentação técnica e de usuário',
      'Gestão de projetos e comunicação com clientes'
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Implementação de boas práticas de desenvolvimento e arquitetura limpa',
      'Experiência com diferentes tecnologias e frameworks',
      'Trabalho remoto e gestão de tempo eficiente',
      'Comunicação clara e profissional com clientes'
    ]
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
              <PeriodDisplay startDate="2023-08-01" endDate="2024-01-31" />
            </div>
            <div className={styles.detailItem}>
              <h3>{t.companies.ninetyNine.about.location}</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>{t.companies.ninetyNine.projects.title}</h2>
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