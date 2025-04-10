'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';
import TechFilter from './TechFilter';
import styles from './ProjectGrid.module.css';

const PROJECTS = [
  {
    title: 'Teste técnico Pic Pay',
    description: 'Teste técnico do pic pay com a missão de criar uma api gateway de pagamento.',
    image: '/projects/picpay/picpay.png',
    technologies: ['Java', 'Spring'],
    url: 'https://picpay.com',
    github: 'https://github.com/ThyagoMartins0/API_PAGAMENTO_PICPAY',
    slug: 'picpay-clone'
  },
  {
    title: 'Portfolio',
    description: 'Site pessoal e portfolio desenvolvido com Next.js e TypeScript, apresentando projetos e experiências profissionais.',
    image: '/projects/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'React'],
    url: 'https://thyagod.dev',
    github: 'https://github.com/ThyagoMartins0/portfolio',
    slug: 'portfolio'
  },
  {
    title: 'Novo Projeto',
    description: 'Descrição do seu novo projeto aqui.',
    image: '/projects/novo-projeto/cover.png',
    technologies: ['Tecnologia1', 'Tecnologia2', 'Tecnologia3'],
    url: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    slug: 'novo-projeto'
  },
  // Adicione mais projetos aqui
];

export default function ProjectGrid() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');

  const filteredProjects = selectedTech
    ? PROJECTS.filter(project => project.technologies.includes(selectedTech))
    : PROJECTS;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Projetos</h2>
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.toggleButton} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button 
            className={`${styles.toggleButton} ${viewMode === 'carousel' ? styles.active : ''}`}
            onClick={() => setViewMode('carousel')}
          >
            Carrossel
          </button>
        </div>
      </div>
      
      <TechFilter 
        selectedTech={selectedTech} 
        onSelectTech={setSelectedTech} 
      />
      
      {viewMode === 'grid' ? (
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.title}
              {...project}
            />
          ))}
        </div>
      ) : (
        <ProjectCarousel projects={filteredProjects} />
      )}
    </section>
  );
} 