'use client';

import Image from 'next/image';
import styles from './TechFilter.module.css';

const TECH_ICONS = [
  {
    name: 'React',
    icon: '/tech/react.svg',
  },
  {
    name: 'Next.js',
    icon: '/tech/nextjs.svg',
  },
  {
    name: 'Node.js',
    icon: '/tech/nodejs.svg',
  },
  {
    name: 'TypeScript',
    icon: '/tech/typescript.svg',
  },
  {
    name: 'Python',
    icon: '/tech/python.svg',
  }
];

interface TechFilterProps {
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export default function TechFilter({ selectedTech, onSelectTech }: TechFilterProps) {
  return (
    <div className={styles.container}>
      <button 
        className={`${styles.techButton} ${!selectedTech ? styles.active : ''}`}
        onClick={() => onSelectTech(null)}
      >
        Todos
      </button>
      {TECH_ICONS.map((tech) => (
        <button
          key={tech.name}
          className={`${styles.techButton} ${selectedTech === tech.name ? styles.active : ''}`}
          onClick={() => onSelectTech(tech.name)}
          title={tech.name}
        >
          <Image 
            src={tech.icon} 
            alt={tech.name} 
            width={24} 
            height={24} 
          />
          <span className={styles.techName}>{tech.name}</span>
        </button>
      ))}
    </div>
  );
} 