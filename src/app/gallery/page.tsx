import Image from 'next/image';
import Header from '../components/header/Header';
import styles from './page.module.css';

const BIOGRAPHY_SECTIONS = [
  {
    image: '/galeria/MAR_8998.jpg',
    alt: 'Thyago sorrindo',
    title: 'Formação Acadêmica',
    text: 'Graduado em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web e mobile. Sempre buscando aprender novas tecnologias e metodologias para criar soluções inovadoras.'
  },
  {
    image: '/galeria/FOTOPERFILPROFISSIONAL.jpg',
    alt: 'Thyago com roupa azul',
    title: 'Experiência Profissional',
    text: 'Desenvolvedor Full Stack com experiência em React, Next.js, Node.js e TypeScript. Trabalhei em diversos projetos desafiadores, contribuindo para o desenvolvimento de soluções escaláveis e de alta performance.'
  },
  {
    image: '/profile/imagens/thyago3.jpg',
    alt: 'Thyago correndo',
    title: 'Vida Pessoal & Hobbies',
    text: 'Além da programação, sou apaixonado por esportes e atividades físicas. Acredito que um corpo são mantém a mente sã, e isso reflete diretamente na qualidade do meu trabalho e na minha criatividade.'
  }
];

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1>Minha História</h1>
        <p className={styles.description}>
          Conheça um pouco mais sobre minha jornada pessoal e profissional
        </p>
        
        <div className={styles.bioSections}>
          {BIOGRAPHY_SECTIONS.map((section, index) => (
            <div key={index} className={styles.bioSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.bioContent}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 