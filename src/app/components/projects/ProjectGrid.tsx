'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import TechFilter from './TechFilter';
import styles from './ProjectGrid.module.css';

const PROJECTS = [
    {
    title: 'Painel de controle de finanças',
    description: 'Site pessoal e portfolio desenvolvido com Next.js e TypeScript, apresentando projetos e experiências profissionais.',
    image: '/projects/financeiroai/financeiroai.png',
    technologies: ['Next.js', 'TypeScript', 'React'],
    url: 'https://thyagod.dev',
    github: 'https://github.com/ThyagoMartins0/portfolio',
    slug: 'financeiroai'
  },
  {
    title: 'Plataforma de análise de cláusulas contratuais',
    description: 'Descrição do seu novo projeto aqui.',
    image:  '/projects/clausulai/capa.png',
    technologies: ['Python', 'LLM', 'React'],
    url: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    slug: 'clausulai'
  },
  {
    title: 'Face Detector',
    description: 'Descrição do seu novo projeto aqui.',
    image:  '/projects/py_faces_detector/py_faces_detector.png',
    technologies: ['React', 'Next.js', 'CSS'],
    url: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    slug: 'py_faces_detector'
  },
  {
    title: 'Pomodoro Timer',
    description: 'Descrição do seu novo projeto aqui.',
    image:  '/projects/pomodoro/pomodoro.png',
    technologies: ['React', 'Next.js', 'CSS'],
    url: 'https://seu-projeto.com',
    github: 'https://github.com/ThyagoMartins0/novo-projeto',
    slug: 'pomodoro'
  },
  
  {
    title: 'Teste técnico Pic Pay',
    description: 'Teste técnico do pic pay com a missão de criar uma api gateway de pagamento.',
    image: '/projects/picpay/picpay.png',
    technologies: ['Java', 'Spring'],
    url: 'https://picpay.com',
    github: 'https://github.com/ThyagoMartins0/API_PAGAMENTO_PICPAY',
    slug: 'picpay-clone'
  }
];

export default function ProjectGrid() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? PROJECTS.filter(project => project.technologies.includes(selectedTech))
    : PROJECTS;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Projetos</h2>
      </div>
      
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