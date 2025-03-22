'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Profile.module.css'
import { useLanguage } from '@/app/i18n/LanguageContext'

const SKILLS = ['Java','Spring','Php','Laravel','React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS']

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const truncateText = (text: string) => {
    const words = text.split(' ');
    if (words.length > 46 && !isExpanded) {
      return words.slice(0, 46).join(' ') + '...';
    }
    return text;
  };

  return (
    <section className={styles.profile}>
      <div className={styles.profileContent}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileImage}>
            <Image 
              src="/profile/imagens/fotodeperfil.jpg" 
              alt="Profile" 
              width={200} 
              height={200}
              className={styles.avatar}
              priority
            />
          </div>
          <div className={styles.imageDecoration} />
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.nameSection}>
            <h1>Thyago Ramos</h1>
            <span className={styles.role}>{t.profile.role}</span>
          </div>

          <div className={styles.bioContainer}>
            <p className={styles.bio}>
              {truncateText(isExpanded ? t.profile.bio.long : t.profile.bio.short)}
            </p>
            <button 
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? t.profile.bio.readLess : t.profile.bio.readMore}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M6 12L10 8L6 4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.skills}>
            <h2 className={styles.skillsTitle}>{t.profile.skills.title}</h2>
            {SKILLS.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 