import Image from 'next/image';
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
  'typescript-react-benefits': {
    title: 'Explorando os Benefícios do TypeScript no Desenvolvimento React',
    date: '2024-03-15',
    readTime: '5 min',
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
      },
      {
        name: 'Slides da Apresentação',
        file: '/downloads/typescript-react-slides.pdf',
        size: '1.1 MB'
      }
    ],
    tags: ['TypeScript', 'React', 'Desenvolvimento Web'],
    content: `
      O TypeScript tem se tornado cada vez mais popular no desenvolvimento React, e por boas razões. 
      Neste artigo, vamos explorar em detalhes como o TypeScript melhora a qualidade do código e a experiência de desenvolvimento.

      ## Por que usar TypeScript com React?

      O TypeScript oferece várias vantagens significativas quando usado com React:

      1. **Detecção de Erros em Tempo de Compilação**
      - Catch de erros antes mesmo de executar o código
      - Melhor experiência de debugging
      - Redução de erros em produção

      2. **Melhor Intellisense e Autocompleção**
      - Sugestões mais precisas no editor
      - Documentação inline
      - Navegação mais fácil pelo código

      3. **Props Typing**
      - Definição clara da interface dos componentes
      - Validação automática de props
      - Melhor manutenibilidade

      ## Exemplos Práticos

      Vamos ver alguns exemplos de como o TypeScript melhora o desenvolvimento React:

      \`\`\`typescript
      interface UserProps {
        name: string;
        age: number;
        email: string;
      }

      const UserProfile: React.FC<UserProps> = ({ name, age, email }) => {
        return (
          <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
          </div>
        );
      };
      \`\`\`

      ## Melhores Práticas

      1. **Use Interfaces para Props**
      - Melhor legibilidade
      - Reutilização de tipos
      - Documentação clara

      2. **Evite 'any'**
      - Mantenha a type safety
      - Use tipos genéricos quando necessário
      - Defina tipos customizados

      3. **Utilize Generics**
      - Para componentes reutilizáveis
      - Para funções utilitárias
      - Para hooks customizados

      ## Conclusão

      O TypeScript é uma ferramenta poderosa que, quando usada corretamente com React, pode 
      significativamente melhorar a qualidade do código e a experiência de desenvolvimento.
      A curva de aprendizado inicial vale a pena pelos benefícios a longo prazo.
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

          <div 
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: post.content.split('\\n').map(line => {
              if (line.startsWith('##')) {
                return `<h2>${line.replace('##', '').trim()}</h2>`;
              }
              if (line.startsWith('```')) {
                return line.includes('```typescript') || line.includes('```jsx')
                  ? '<pre><code class="language-typescript">'
                  : line.includes('```') ? '</code></pre>' : line;
              }
              return line ? `<p>${line.trim()}</p>` : '';
            }).join('') }}
          />
        </div>
      </article>
    </main>
  );
}