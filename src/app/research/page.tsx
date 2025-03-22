'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header/Header';
import styles from './page.module.css';
import { useLanguage } from '@/app/i18n/LanguageContext';

// Dados dos posts de pesquisa (depois podemos mover para um arquivo separado)
const RESEARCH_POSTS = [
  {
    id: 1,
    title: 'Explorando os Benefícios do TypeScript no Desenvolvimento React',
    excerpt: 'Uma análise profunda sobre como o TypeScript melhora a qualidade do código e a experiência de desenvolvimento em projetos React.',
    date: '2024-03-15',
    readTime: '5',
    image: '/research/typescript-react.jpg',
    tags: ['TypeScript', 'React', 'Desenvolvimento Web'],
    slug: 'typescript-react-benefits'
  },
  {
    id: 2,
    title: 'Otimização de Performance em Aplicações Next.js',
    excerpt: 'Técnicas e estratégias para melhorar a performance de aplicações Next.js, incluindo SSR, ISR e otimização de imagens.',
    date: '2024-03-10',
    readTime: '7',
    image: '/research/nextjs-performance.jpg',
    tags: ['Next.js', 'Performance', 'Web Development'],
    slug: 'nextjs-performance-optimization'
  },
  {
    id: 3,
    title: 'Implementando Acessibilidade em Aplicações Web Modernas',
    excerpt: 'Um guia completo sobre como tornar suas aplicações web mais acessíveis seguindo as diretrizes WCAG.',
    date: '2024-03-05',
    readTime: '6',
    image: '/research/web-accessibility.jpg',
    tags: ['Acessibilidade', 'Frontend', 'UX'],
    slug: 'web-accessibility-guide'
  }
];

export default function ResearchPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>{t.research.title}</h1>
          <p>{t.research.description}</p>
        </section>

        <div className={styles.feed}>
          {RESEARCH_POSTS.map((post) => (
            <article key={post.id} className={styles.post}>
              <div className={styles.postImage}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <time>{new Date(post.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}</time>
                  <span>•</span>
                  <span>{post.readTime} {t.research.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <Link href={`/research/${post.slug}`} className={styles.readMore}>
                  {t.research.readMore}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M4 10H16M16 10L10 4M16 10L10 16" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 