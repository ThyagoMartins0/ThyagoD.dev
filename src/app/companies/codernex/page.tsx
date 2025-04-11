'use client';

import Image from 'next/image'
import styles from './page.module.css'

type GalleryImage = {
  src: string;
  alt: 'workspace' | 'team' | 'school';
};

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/companies/codernex/image/team.jpg',
    alt: 'workspace'
  },
  {
    src: '/companies/codernex/image/team.jpg',
    alt: 'team'
  },
  {
    src: '/companies/codernex/image/event.jpg',
    alt: 'school'
  }
];

const PROJECTS = [
  {
    title: 'Plataforma de jogos online',
    description: 'Responsavel pela manutenção de plataforma de jogos onlines, integração de meios finaceiros como stripe, integração com api de jogos, gerenciamento de usuarios, criação de novos jogos, responsavel end to end, desde o desenvolvimento ou manutenção até o deploy no cliente',
    technologies: ['Laravel', 'Php', 'vue', 'Mysql', 'Docker', 'VPN', 'Dokploy', 'filament','scala'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
      'Documentação técnica e de usuário',
      'integração com api de jogos',
      'integração com meios de pagamento',
      'deploy em vpn',
      'criação de paines para gerenciamento de banco e sistema ',   
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'rapida velocidade de desenvolvimento',
      'Experiência com diferentes tecnologias e frameworks',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  },
  {
    title: 'Plataforma de geração de relatórios e leads com IA ',
    description: 'Sistema interno para criação de leads e geração de relatórios com IA baseado em informações de clientes e texto entregues atraves do copywriter,   o sistema é capaz de gerar textos atraves de ia treinada para ler arquivos, fazer calculos e entregar um texto com as informações coletadas, enviar relatorios para o cliente',
    technologies: ['Laravel', 'Php', 'Mysql', 'Inteligencia Artificial', 'Python', 'vue','javascript', 'Docker', 'AWS', 'VPN'],
    role: 'Desenvolvedor Fullstack com foco em Backend',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Implementação segura de login e cadastro de clientes',
      'Sistema anti-sql injection',
      'Integração com bancos de dados e serviços externos',
      'criação de paines para gerenciamento de banco e sistema ',
      'treinamento de IA',
      'teste integrados com junit '

    ],
    highlights: [
      'Com esse projeto o cliente foi capaz de fazer o mesmo relatorio que costumava demorar cerca de 10 dias, agora me 1 hora',
      'sistema de aprendizado continua da ia treinada, para que a cada novo cliente o sistema seja capaz de gerar um relatorio mais acurado',
       'implementação de dashboard nativos do sistema para que o cliente possa ter uma visão geral do sistema e dos dados',
       'sistema end to end, desde o desenvolvimento e melhorias até o deploy no cliente',

    ]
  }, { 
    title: 'Sistema de bingo para jogos online',
    description: 'landing page para cursos de desenvolvimento da mulher, focado em consultoria feminina ',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor php / wordpress',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos',
      'garantir a segurança',
    ],
    highlights: [
      '',
    ]
  },
  {
    title: 'Plataforma de iptv para canais de tv',
    description: 'landing page para curso de copywriter, focado em cursos de copywriter',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos para dados vindos de forms',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Trabalho com tempo curto ',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  }, {
    title: 'Sistema de gerenciamento de materia para conteudo escolar ',
    description: 'landing page para curso de copywriter, focado em cursos de copywriter',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos para dados vindos de forms',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Trabalho com tempo curto ',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  },
  {
    title: 'Site governamental ',
    description: 'landing page para curso de copywriter, focado em cursos de copywriter',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos para dados vindos de forms',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Trabalho com tempo curto ',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  },
  {
    title: 'Site sidical ',
    description: 'landing page para curso de copywriter, focado em cursos de copywriter',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos para dados vindos de forms',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Trabalho com tempo curto ',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  },
  {
    title: 'Site de leilão esportivo ',
    description: 'landing page para curso de copywriter, focado em cursos de copywriter',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos para dados vindos de forms',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Trabalho com tempo curto ',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  },
  {
    title: 'Site de leilão esportivo ',
    description: 'landing page para curso de copywriter, focado em cursos de copywriter',
    technologies: ['Wordpress', 'Php', 'Woocommerce', 'Mysql'],
    role: 'Desenvolvedor Fullstack',
    responsibilities: [
      'Desenvolvimento de aplicações web e mobile',
      'Integração com bancos de dados e serviços externos para dados vindos de forms',
      'Desenvolvimento de interfaces responsivas',
      'Testes automatizados e garantia de qualidade',
    ],
    highlights: [
      'Desenvolvimento de aplicações com alta performance e escalabilidade',
      'Trabalho com tempo curto ',
      'Trabalho remoto e gestão de tempo eficiente',
    ]
  }
];

export default function CodernexPage() {
  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.banner}>
        <Image
          src="/companies/codernex/image/codernex_logo.png"
          alt="Codernex"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/codernex/image/codernex_logo.png"
                alt="Codernex"
                width={80}
                height={80}
              />
            </div>
            <h1>Codernex</h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>Sobre a Empresa</h2>
          <p>
            A Codernex é uma empresa inovadora focada em desenvolvimento de software
            e soluções tecnológicas. Com uma cultura única e um ambiente dinâmico,
            buscamos constantemente novos desafios e oportunidades de crescimento.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>Cargo</h3>
              <p>Software Engineer</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Período</h3>
              <p>2024 - Atual</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Localização</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>Projetos</h2>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project, index) => (
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
                      <h4>Responsabilidades</h4>
                      <ul>
                        {project.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.highlights}>
                      <h4>Destaques</h4>
                      <ul>
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.projectSidebar}>
                    <div className={styles.technologies}>
                      <h4>Tecnologias</h4>
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
          <h2>Galeria</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
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