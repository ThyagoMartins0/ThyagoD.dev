'use client';

import Image from 'next/image';
import styles from './ProjectHeader.module.css';

const TECH_BADGES = [
  'Java', 'Spring', 'PHP', 'Laravel', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'
];

export default function ProjectHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile/imagens/thyago.jpeg"
            alt="Thyago Ramos"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.info}>
          <h1>Thyago Ramos</h1>
          <h2>Software Engineer</h2>
          <p>
            Since 2022, I&apos;ve been on a journey to make an impact in the programming field, working with prominent
            technologies such as Java, Laravel, and Node.js. Along the way, I have participated in challenging
            projects of varying complexities, always focused on creating solutions that generate real value for
            people.
          </p>
        </div>
      </div>
      <div className={styles.technologies}>
        {TECH_BADGES.map((tech) => (
          <span key={tech} className={styles.badge}>
            {tech}
          </span>
        ))}
      </div>
      <a href="#projects" className={styles.seeMore}>
        Ver mais sobre mim ↓
      </a>
    </div>
  );
} 