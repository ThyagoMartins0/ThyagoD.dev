'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  slug: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  github,
  slug 
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${slug}`} className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={250} 
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <Link href={`/projects/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.links}>
          <Link href={`/projects/${slug}`} className={styles.link}>
            Ver Detalhes
          </Link>
          {github && (
            <Link href={github} target="_blank" className={styles.githubLink}>
              <Image 
                src="/profile/imagens/icons8-github-512.png" 
                alt="GitHub" 
                width={24} 
                height={24} 
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 