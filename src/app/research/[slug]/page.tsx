import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/header/Header';
import styles from './page.module.css';

interface VideoData {
  url: string;
  title: string;
}

interface DownloadFile {
  name: string;
  file: string;
  size: string;
}

interface ResearchPost {
  title: string;
  date: string;
  readTime: string;
  image: string;
  video?: VideoData;
  github?: string;
  downloads?: DownloadFile[];
  tags: string[];
  content: string;
}

// Dados detalhados dos posts (depois podemos mover para um arquivo separado)
const RESEARCH_DETAILS: Record<string, ResearchPost> = {
  'pnpm-vs-npm-vs-yarn': {
    title: 'Qual é melhor ? PNPm ou NPm',
    date: '10/07/2025',
    readTime: '10 min',
    image: '/research/typescript-react.jpg',
    video: {
      url: 'https://www.youtube.com/embed/your-video-id',
      title: 'TypeScript com React na Prática'
    },
    github: 'https://github.com/ThyagoMartins0/typescript-react-examples',
    downloads: [
      {
        name: 'Código Fonte do Projeto',
        file: '/downloads/typescript-react-examples.zip',
        size: '2.3 MB'
      }
    ],
    tags: ['TypeScript', 'React', 'Desenvolvimento Web'],
    content: `
      # Qual é melhor? PNPM ou NPM?

      ## O Problema da Gestão de Dependências na Era Moderna

      Com o avanço da tecnologia atual, onde espaço de armazenamento e memória RAM se tornaram recursos abundantes (basta comprar mais), o gerenciamento eficiente desses recursos perdeu prioridade. Isso resultou em uma geração de desenvolvedores que não se preocupam mais com:

      - **Tamanho dos projetos**: Quanto espaço um projeto realmente ocupa
      - **Comandos otimizados**: Qual é a melhor abordagem dependendo do sistema
      - **Gestão de dependências**: O que realmente está sendo instalado no node_modules

      Tornou-se hábito simplesmente executar npm install sem considerar o bom gerenciamento de espaço ou mesmo entender o que está sendo instalado.

      ## Por que usar PNPM ao invés de NPM?

      Quando criamos um novo projeto, somos ensinados a simplesmente:
      1. Executar npm install
      2. Começar a codar

      Porém, raramente nos questionamos:
      - **Realmente precisamos** de todas essas dependências?
      - **Quais dependências** vamos realmente utilizar?
      - **Seria possível** deixar tudo global e totalmente reutilizável?

      ### Exemplo Prático

      Para demonstrar a diferença, criei um CRUD simples utilizando:
      - **Frontend**: React (uma das bibliotecas mais populares)
      - **Backend**: Express

      ### Contexto do Experimento

      Durante o desenvolvimento de um projeto recente, solicitei ajuda ao ChatGPT, que recomendou comparar o uso de npm install vs pnpm install. Esta análise surgiu dessa recomendação.

      ### O que sabemos sobre NPM

      O npm install é um comando do npm (Node Package Manager) usado para instalar dependências (bibliotecas, pacotes) em projetos Node.js. Entretanto, mesmo em um projeto CRUD simples em React, o peso pode ser significativo.

      ### Fontes de Pesquisa

      - [PNPM Motivation](https://pnpm.io/pt/motivation)
      - [PNPM Benchmarks](https://pnpm.io/pt/benchmarks)
    `
  },
  'nextjs-performance-optimization': {
    title: 'Otimização de Performance em Aplicações Next.js',
    date: '2024-03-10',
    readTime: '7 min',
    image: '/research/nextjs-performance.jpg',
    tags: ['Next.js', 'Performance', 'Web Development'],
    content: `
      A performance é crucial para o sucesso de qualquer aplicação web moderna. 
      Neste artigo, vamos explorar técnicas avançadas de otimização para aplicações Next.js.

      ## Técnicas de Otimização

      1. **Server-Side Rendering (SSR)**
      - Melhor SEO
      - Tempo de carregamento inicial mais rápido
      - Melhor experiência do usuário

      2. **Incremental Static Regeneration (ISR)**
      - Conteúdo sempre atualizado
      - Cache eficiente
      - Menor carga no servidor

      3. **Otimização de Imagens**
      - Uso do componente Image
      - Formatos modernos (WebP)
      - Lazy loading automático

      ## Implementações Práticas

      Exemplos de como implementar estas otimizações:

      \`\`\`typescript
      // Exemplo de ISR
      export async function getStaticProps() {
        return {
          props: {
            data: await fetchData()
          },
          revalidate: 60 // Atualiza a cada 60 segundos
        }
      }
      \`\`\`

      ## Monitoramento e Métricas

      1. **Core Web Vitals**
      - LCP (Largest Contentful Paint)
      - FID (First Input Delay)
      - CLS (Cumulative Layout Shift)

      2. **Ferramentas de Análise**
      - Lighthouse
      - Chrome DevTools
      - Next.js Analytics

      ## Conclusão

      A otimização de performance é um processo contínuo que requer atenção constante.
      Com as técnicas certas e monitoramento adequado, podemos criar aplicações Next.js
      rápidas e eficientes.
    `
  },
  'web-accessibility-guide': {
    title: 'Implementando Acessibilidade em Aplicações Web Modernas',
    date: '2024-03-05',
    readTime: '6 min',
    image: '/research/web-accessibility.jpg',
    tags: ['Acessibilidade', 'Frontend', 'UX'],
    content: `
      A acessibilidade web é fundamental para garantir que todos os usuários possam 
      acessar e interagir com seu conteúdo. Vamos explorar como implementar as 
      melhores práticas de acessibilidade em aplicações web modernas.

      ## Princípios Fundamentais

      1. **Perceivável**
      - Alternativas em texto
      - Adaptável
      - Distinguível

      2. **Operável**
      - Acessível por teclado
      - Tempo suficiente
      - Navegável

      3. **Compreensível**
      - Legível
      - Previsível
      - Assistência de entrada

      ## Implementações Práticas

      Exemplos de código acessível:

      \`\`\`jsx
      // Exemplo de botão acessível
      <button
        aria-label="Fechar modal"
        onClick={handleClose}
        className={styles.closeButton}
      >
        <span className="sr-only">Fechar</span>
        <Icon name="close" />
      </button>
      \`\`\`

      ## Testes de Acessibilidade

      1. **Ferramentas Automatizadas**
      - WAVE
      - aXe
      - Lighthouse

      2. **Testes Manuais**
      - Navegação por teclado
      - Leitores de tela
      - Zoom e contraste

      ## Conclusão

      Implementar acessibilidade não é apenas uma questão de conformidade,
      mas de inclusão e respeito aos usuários. Com as práticas corretas,
      podemos criar uma web mais acessível para todos.
    `
  }
};

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = RESEARCH_DETAILS[slug as keyof typeof RESEARCH_DETAILS];

  if (!post) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <main className={styles.main}>
      <Header />
      <article className={styles.article}>
        <div className={styles.hero}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <time>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>

          <h1>{post.title}</h1>

          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          {post.video && (
            <div className={styles.videoContainer}>
              <iframe
                src={post.video.url}
                title={post.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              />
            </div>
          )}

          <div className={styles.resources}>
            <div className={styles.resourcesGrid}>
              {post.github && (
                <a 
                  href={post.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  <Image 
                    src="/profile/imagens/icons8-github-512.png"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                  <span>Ver no GitHub</span>
                </a>
              )}
              
              {post.downloads?.map((download, index) => (
                <a 
                  key={index}
                  href={download.file}
                  download
                  className={styles.resourceLink}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 15L8 11M12 15L16 11M12 15V3M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{download.name}</span>
                  <span className={styles.fileSize}>{download.size}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.markdown}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}