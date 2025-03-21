/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Profile.module.css'

const SKILLS = ['Java','Spring','Php','Laravel','React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS']

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const bioText = "Desde 2022, venho trilhando uma jornada de impacto na área de programação, trabalhando com tecnologias de destaque como Java, Laravel e Node.js. Ao longo desse caminho, participei de projetos desafiadores e de diferentes complexidades, sempre focado em criar soluções que gerem valor real para as pessoas.\n\nMinha atuação já alcançou três países, incluindo Estados Unidos, Brasil e Espanha, com sistemas que atendem entre 300 a 20 mil usuários mensais e movimentam mais de 30.000 reais por mês em empresas que vão de casas de apostas a empresas de telecomunicações. Essa experiência me fortaleceu como um profissional resiliente, determinado a enfrentar qualquer desafio para entregar resultados de alta qualidade.\n\nSou movido por ambição e crescimento. Formado em Engenharia da Computação, estou constantemente em busca de aprimorar minhas habilidades e elevar minha atuação a novos patamares. Meu próximo objetivo é cursar um pós em arquitetura de software e me especializar em softwares e sistemas multicamadas, enfrentando desafios como BaaS, microserviços e alta escalabilidade. Acredito que, com dedicação e foco, posso contribuir para transformar o futuro da tecnologia.";

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
            <span className={styles.role}>Software Engineer</span>
          </div>

          <div className={styles.bioContainer}>
            <p className={styles.bio}>
              {truncateText(bioText)}
            </p>
            {bioText.split(' ').length > 30 && (
              <button 
                className={styles.readMoreBtn}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Ver menos' : 'Ver mais sobre mim'}
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
            )}
          </div>

          <div className={styles.skills}>
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