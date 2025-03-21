import Image from 'next/image';
import Header from '../../components/header/Header';
import styles from './page.module.css';

// Dados dos projetos (depois podemos mover para um arquivo separado)
const PROJECTS_DATA = {
  'picpay-clone': {
    title: 'PicPay Clone',
    description: 'Clone do aplicativo PicPay desenvolvido como teste técnico, implementando as principais funcionalidades do app original.',
    fullDescription: `
      O PicPay Clone é uma recriação do famoso aplicativo de pagamentos brasileiro, desenvolvido como parte de um teste técnico. 
      Este projeto demonstra minhas habilidades em desenvolvimento mobile e web, além de boas práticas de programação.

      Principais funcionalidades implementadas:
      • Sistema de login e cadastro de usuários
      • Carteira digital com saldo e histórico de transações
      • Envio e recebimento de pagamentos
      • QR Code para pagamentos
      • Feed de atividades dos contatos
    `,
    image: '/projects/picpay/picpay.png',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://picpay.com',
    github: 'https://github.com/ThyagoMartins0/picpay-clone',
    screenshots: [
      {
        url: '/projects/picpay/screen1.png',
        caption: 'Tela inicial do app'
      },
      {
        url: '/projects/picpay/screen2.png',
        caption: 'Processo de pagamento'
      },
      {
        url: '/projects/picpay/screen3.png',
        caption: 'Feed de atividades'
      }
    ]
  },
  'portfolio': {
    title: 'Portfolio',
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
    image: '/projects/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'React', 'CSS Modules'],
    liveUrl: 'https://thyagod.dev',
    github: 'https://github.com/ThyagoMartins0/portfolio',
    screenshots: [
      {
        url: '/projects/portfolio/screen1.png',
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
  }
};

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProjectPage({ params, searchParams }: PageProps) {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA];

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