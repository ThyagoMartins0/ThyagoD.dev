import Image from 'next/image';
import Header from '../../components/header/Header';
import styles from './page.module.css';

// Dados dos projetos (depois podemos mover para um arquivo separado)
const PROJECTS_DATA = {
  'picpay-clone': {
    title: 'Teste técnico Pic Pay',
    description: 'Teste técnico do pic pay com a missão de criar uma api gateway de pagamento',
    fullDescription: `
      Este projeto foi desenvolvido como parte de um desafio técnico proposto pelo PicPay, com a missão de criar uma API Gateway de pagamento. O desafio foi de nível júnior, focado em backend, utilizando Java e Spring.

Durante o desenvolvimento, foram aplicados conceitos modernos de desenvolvimento de software e seguidas boas práticas de programação para garantir um código eficiente, organizado e escalável.

Principais Implementações:
Criação de testes unitários para validar o comportamento das classes individualmente.

Desenvolvimento de testes de integração para garantir o funcionamento correto do sistema com o banco de dados.

Utilização de um banco de dados em memória H2 para facilitar o teste de integração e simular o comportamento real do sistema.

Este projeto demonstra não apenas o domínio técnico em Java e Spring, mas também o compromisso com a qualidade de código e a aplicação de boas práticas no ciclo de desenvolvimento. 🚀
    `,
    image: '/projects/picpay/picpay.png',
    technologies: ['Java', 'Spring', 'H2 sql ', 'Junit', 'Jetbrains IDE '],
    liveUrl: 'https://github.com/ThyagoMartins0/API_PAGAMENTO_PICPAY',
    github: 'https://github.com/ThyagoMartins0/API_PAGAMENTO_PICPAY',
    screenshots: [
      {
        url: '/projects/picpay/projetoimg/Screenshot_1.png',
        caption: 'Tela inicial do app'
      },
      {
        url: '/projects/picpay/projetoimg/Screenshot_2.png',
        caption: 'Processo de pagamento'
      }
    ]
  },
  'financeiroai': {
    title: 'FinançasAI',
    description: 'Site pessoal e portfolio desenvolvido com Next.js e TypeScript, apresentando projetos e experiências profissionais.',
    fullDescription: `
      Meu portfolio pessoal foi desenvolvido com as mais modernas tecnologias web, focando em performance, 
      acessibilidade e uma excelente experiência do usuário.

      Características principais:
      • Design responsivo e moderno
      • Tema claro/escuro
      • Animações suaves
      • SEO otimizado
      • Performance otimizada com Next.js
    `,
    image: '/projects/financeiroai/financeiroai.png',
    technologies: ['Next.js', 'TypeScript', 'React', 'CSS Modules'],
    liveUrl: 'https://thyagod.dev',
    github: 'https://github.com/ThyagoMartins0/portfolio',
    screenshots: [
      {
        url: '/projects/financeiroai/financeiroai.png',
        caption: 'Página inicial'
      },
      {
        url: '/projects/portfolio/screen2.png',
        caption: 'Seção de projetos'
      },
      {
        url: '/projects/portfolio/screen3.png',
        caption: 'Modo escuro'
      }
    ]
  },
  'clausulai': {
    title: 'ClausulAI',
    description: 'ClausulAI é uma plataforma de análise de cláusulas contratuais.',
    fullDescription: `
      Descrição detalhada do seu novo projeto. Esta é uma descrição mais completa que pode
      incluir múltiplos parágrafos e explicar em detalhes o que o projeto faz.

      Principais características:
      • Característica 1
      • Característica 2
      • Característica 3
      • Característica 4
      • Característica 5

      Você pode incluir mais informações sobre o processo de desenvolvimento,
      desafios enfrentados, soluções implementadas e resultados alcançados.
    `,
    image: '/projects/clausulai/capa.png',
    technologies: ['Tecnologia1', 'Tecnologia2', 'Tecnologia3'],
    liveUrl: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    screenshots: [
      {
        url: '/projects/novo-projeto/screen1.png',
        caption: 'Descrição da primeira screenshot'
      },
      {
        url: '/projects/novo-projeto/screen2.png',
        caption: 'Descrição da segunda screenshot'
      },
      {
        url: '/projects/novo-projeto/screen3.png',
        caption: 'Descrição da terceira screenshot'
      }
    ]
  },
  'pomodoro': {
    title: 'ClausulAI',
    description: 'ClausulAI é uma plataforma de análise de cláusulas contratuais.',
    fullDescription: `
      Descrição detalhada do seu novo projeto. Esta é uma descrição mais completa que pode
      incluir múltiplos parágrafos e explicar em detalhes o que o projeto faz.

      Principais características:
      • Característica 1
      • Característica 2
      • Característica 3
      • Característica 4
      • Característica 5

      Você pode incluir mais informações sobre o processo de desenvolvimento,
      desafios enfrentados, soluções implementadas e resultados alcançados.
    `,
    image: '/projects/pomodoro/pomodoro.png',
    technologies: ['Tecnologia1', 'Tecnologia2', 'Tecnologia3'],
    liveUrl: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    screenshots: [
      {
        url: '/projects/novo-projeto/screen1.png',
        caption: 'Descrição da primeira screenshot'
      },
      {
        url: '/projects/novo-projeto/screen2.png',
        caption: 'Descrição da segunda screenshot'
      },
      {
        url: '/projects/novo-projeto/screen3.png',
        caption: 'Descrição da terceira screenshot'
      }
    ]
  },
  'py_faces_detector': {
    title: 'ClausulAI',
    description: 'ClausulAI é uma plataforma de análise de cláusulas contratuais.',
    fullDescription: `
      Descrição detalhada do seu novo projeto. Esta é uma descrição mais completa que pode
      incluir múltiplos parágrafos e explicar em detalhes o que o projeto faz.

      Principais características:
      • Característica 1
      • Característica 2
      • Característica 3
      • Característica 4
      • Característica 5

      Você pode incluir mais informações sobre o processo de desenvolvimento,
      desafios enfrentados, soluções implementadas e resultados alcançados.
    `,
    image: '/projects/py_faces_detector/banner.png',
    technologies: ['Tecnologia1', 'Tecnologia2', 'Tecnologia3'],
    liveUrl: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    screenshots: [
      {
        url: '/projects/novo-projeto/screen1.png',
        caption: 'Descrição da primeira screenshot'
      },
      {
        url: '/projects/novo-projeto/screen2.png',
        caption: 'Descrição da segunda screenshot'
      },
      {
        url: '/projects/novo-projeto/screen3.png',
        caption: 'Descrição da terceira screenshot'
      }
    ]
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }
  
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.hero}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.details}>
          <h1>{project.title}</h1>
          
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.description}>
            {project.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.links}>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Ver Projeto
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <Image 
                src="/profile/imagens/icons8-github-512.png" 
                alt="GitHub" 
                width={24} 
                height={24} 
              />
              Ver Código
            </a>
          </div>

          <div className={styles.screenshots}>
            <h2>Screenshots</h2>
            <div className={styles.screenshotGrid}>
              {project.screenshots.map((screenshot, index) => (
                <figure key={index} className={styles.screenshot}>
                  <Image
                    src={screenshot.url}
                    alt={screenshot.caption}
                    width={400}
                    height={300}
                    className={styles.screenshotImage}
                  />
                  <figcaption>{screenshot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 