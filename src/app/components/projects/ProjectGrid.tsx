'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import TechFilter from './TechFilter';
import styles from './ProjectGrid.module.css';

const PROJECTS = [
  {
    title: 'PicPay Clone',
    description: 'Clone do aplicativo PicPay desenvolvido como teste técnico, implementando as principais funcionalidades do app original.',
    image: '/projects/picpay/picpay.png',
    technologies: ['React Native', 'TypeScript', 'Node.js'],
    url: 'https://picpay.com',
    github: 'https://github.com/ThyagoMartins0/picpay-clone',
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

  const filteredProjects = selectedTech
    ? PROJECTS.filter(project => project.technologies.includes(selectedTech))
    : PROJECTS;

  return (
    <section className={styles.section}>
      <h2>Projetos</h2>
      <TechFilter 
        selectedTech={selectedTech} 
        onSelectTech={setSelectedTech} 
      />
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
} 