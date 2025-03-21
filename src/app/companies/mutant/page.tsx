import Image from 'next/image'
import styles from './page.module.css'

const GALLERY_IMAGES = [
  {
    src: '/companies/mutant/image/fotodemateriais.jpg',
    alt: 'Espaço de trabalho'
  },
  {
    src: '/companies/mutant/gallery/team.jpg',
    alt: 'Time da empresa'
  },
  {
    src: '/companies/mutant/gallery/event.jpg',
    alt: 'Evento da empresa'
  }
]

const PROJECTS = [
  {
    title: "Projeto Integração de Pagamentos",
    description: "Desenvolvimento de uma API robusta para integração com múltiplos gateways de pagamento, permitindo processamento de transações em tempo real e gestão de cobranças recorrentes. O sistema foi projetado para lidar com alto volume de transações, garantindo consistência e rastreabilidade em todas as operações.",
    period: "Mar 2024 - Presente",
    technologies: ["Java 17", "Spring Boot 3", "Spring Cloud", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes", "JUnit", "Mockito"],
    role: "Backend Developer",
    responsibilities: [
      "Desenvolvimento de APIs RESTful seguindo padrões de mercado",
      "Implementação de padrões de design e arquitetura limpa",
      "Integração com sistemas externos e gateways de pagamento",
      "Documentação técnica e de API usando Swagger",
      "Code review e mentoria de desenvolvedores júnior"
    ],
    highlights: [
      "Implementação de sistema de retry para transações falhas com dead letter queue",
      "Desenvolvimento de webhooks para notificações em tempo real com garantia de entrega",
      "Criação de testes automatizados com cobertura superior a 80%",
      "Implementação de circuit breaker para integrações externas",
      "Otimização de performance resultando em redução de 40% no tempo de resposta"
    ]
  },
  {
    title: "Sistema de Gestão de Pedidos",
    description: "Criação de um sistema completo para gerenciamento de pedidos, incluindo tracking em tempo real e integração com sistemas de logística. A plataforma permite o acompanhamento em tempo real do status dos pedidos, gestão de estoque e análise de métricas de entrega.",
    period: "Jan 2024 - Mar 2024",
    technologies: ["Node.js", "TypeScript", "NestJS", "MongoDB", "Redis", "AWS", "Docker", "Jest", "Socket.IO"],
    role: "Fullstack Developer",
    responsibilities: [
      "Desenvolvimento full-stack da aplicação",
      "Modelagem de banco de dados e cache",
      "Implementação de websockets para atualizações em tempo real",
      "Deploy e configuração de infraestrutura na AWS",
      "Desenvolvimento de interfaces responsivas"
    ],
    highlights: [
      "Dashboard em tempo real com Socket.IO para atualizações instantâneas",
      "Sistema de cache com Redis reduzindo carga no banco de dados em 60%",
      "Integração com múltiplas APIs de rastreamento",
      "Implementação de sistema de notificações push",
      "Desenvolvimento de relatórios automatizados"
    ]
  },
  {
    title: "Portal de Análise de Dados",
    description: "Desenvolvimento de uma plataforma para visualização e análise de dados de vendas e métricas de negócio. O portal oferece insights em tempo real sobre o desempenho das vendas, comportamento dos clientes e tendências de mercado.",
    period: "Dez 2023 - Jan 2024",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Python", "Pandas", "D3.js", "Material-UI", "Jest"],
    role: "Frontend Developer",
    responsibilities: [
      "Desenvolvimento de interfaces interativas e responsivas",
      "Implementação de gráficos e visualizações de dados",
      "Otimização de performance e SEO",
      "Desenvolvimento de componentes reutilizáveis",
      "Testes unitários e de integração"
    ],
    highlights: [
      "Gráficos interativos com D3.js e animações suaves",
      "Exportação de relatórios em múltiplos formatos (PDF, Excel, CSV)",
      "Interface responsiva e acessível seguindo WCAG 2.1",
      "Implementação de filtros avançados e busca em tempo real",
      "Otimização de performance com score 98 no Lighthouse"
    ]
  }
]

export default function MutantPage() {
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
            <h1>NEVER SETTLE.</h1>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>Sobre a Empresa</h2>
          <p>
            A Mutant é uma empresa inovadora focada em desenvolvimento de software
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

      {/* Recomendações */}
      <section className={styles.recommendations}>
        <div className={styles.container}>
          <h2>Recomendações</h2>
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
                <h3>Gabriel Nunes</h3>
                <p>Arquiteto de software | Java Developer | Springboot | Postgresql | Game dev</p>
              </div>
            </div>
            <blockquote>
              &ldquo;Thyago é um desenvolvedor excepcional, sempre buscando evoluir e aprimorar suas habilidades. Ele demonstra um compromisso genuíno com a melhoria contínua, solicitando feedbacks constantes para aperfeiçoar seu trabalho e entregar sempre o melhor resultado possível.

Além de sua capacidade técnica, Thyago se destaca pela proatividade e dedicação, mostrando-se sempre atento a novas formas de otimizar processos e contribuir para o sucesso da equipe. Trabalhar com ele é ter a certeza de contar com um profissional comprometido e em constante crescimento. Recomendo fortemente seu trabalho!&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Projetos */}
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
                    <div className={styles.projectPeriod}>{project.period}</div>
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

      {/* Galeria */}
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
                <div className={styles.playOverlay}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M8 5v14l11-7L8 5z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 