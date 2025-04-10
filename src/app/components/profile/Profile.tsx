/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image'
import { useState } from 'react'
import styles from './Profile.module.css'

// Lista de skills
const SKILLS = ['Java', 'Spring', 'Php', 'Laravel', 'React', 'TypeScript', 'Node.js', 'Python', 'Cloud', 'Infra', 'Linux'];

// Conjunto padrão de certificados (usado quando nenhuma skill está selecionada)
const DEFAULT_CERTIFICATES = [
  '/profile/certificados/eng.jpg',
  '/profile/certificados/linux.jpg',
  '/profile/certificados/javazero.jpg',
  '/profile/certificados/php7.jpg',
  '/profile/certificados/REACT_ZERO.png',
  '/profile/certificados/nest_zero.png',
  '/profile/certificados/node_zero.png',
  '/profile/certificados/azure_zero.png',
  '/profile/certificados/laravel.jpg',
  '/profile/certificados/ms_java.jpg',
  '/profile/certificados/ms_java_zero.png',
  '/profile/certificados/spring_teste_zero.png',
  '/profile/certificados/cisco.png',
  '/profile/certificados/redes.jpg ',
  '/profile/certificados/zabbix.jpg',
  '/profile/certificados/devops.png',
  '/profile/certificados/google.png',
];

// Mapeamento de skills para seus certificados
const certificatesBySkill: { [key: string]: string[] } = {
  Java: ['/profile/certificados/javazero.jpg','/profile/certificados/ms_java.jpg',  '/profile/certificados/ms_java_zero.png',  ],
  Spring: [  '/profile/certificados/ms_java_zero.png',   '/profile/certificados/spring_teste_zero.png'  ],
  Php: ['/profile/certificados/php7.jpg'],
  Laravel: ['/profile/certificados/laravel.jpg'],
  React:[  '/profile/certificados/REACT_ZERO.png'  ],
  TypeScript: ['/profile/certificados/nest_zero.png', ],
  "Node.js": [  '/profile/certificados/node_zero.png', '/profile/certificados/nest_zero.png', ],
  Python: [],
  Linux: ['/profile/certificados/linux.jpg','/profile/certificados/devops.png'],
  Cloud: [  '/profile/certificados/azure_zero.png'  ],
  Infra: ['/profile/certificados/redes_fibra.png','/profile/certificados/cisco.png' ,'/profile/certificados/redes.jpg ', '/profile/certificados/zabbix.jpg', '/profile/certificados/google.png'],

};

interface PortfolioCarouselProps {
  certificates: string[];
}

function PortfolioCarousel({ certificates }: PortfolioCarouselProps) {
  // Chamada incondicional dos hooks
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  // Se não houver certificados para exibir, retorna a mensagem
  if (certificates.length === 0) {
    return <p className={styles.noCertificates}>Nenhum certificado disponível para essa skill.</p>;
  }

  // Cria os slides com duplicata da primeira imagem para loop contínuo
  const slides = [...certificates, certificates[0]];

  const handleImageClick = (index: number) => {
    if (expandedIndex === index) {
      // Se já estiver expandida, volta ao estado normal e retoma a animação
      setExpandedIndex(null);
      setPaused(false);
    } else {
      // Caso contrário, expande a imagem clicada e pausa a animação
      setExpandedIndex(index);
      setPaused(true);
    }
  };
  
  return (
    <div className={styles.carouselWrapper}>
      <div className={`${styles.carouselContainer} ${paused ? styles.paused : ''}`}>
        {slides.map((certificate, index) => {
          // O slide duplicado tem índice real 0
          const realIndex = index === slides.length - 1 ? 0 : index;
          return (
            <div 
              key={index}
              className={`${styles.imageContainer} ${expandedIndex === realIndex ? styles.expanded : ''}`}
              onClick={() => handleImageClick(realIndex)}
            >
              <Image
                src={certificate}
                alt={`Certificate ${realIndex + 1}`}
                fill
                className={styles.carouselImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const bioText = "Desde 2022, venho trilhando uma jornada de impacto na área de programação, trabalhando com tecnologias de destaque como Java, Laravel e Node.js. Ao longo desse caminho, participei de projetos desafiadores e de diferentes complexidades, sempre focado em criar soluções que gerem valor real para as pessoas.\n\nMinha atuação já alcançou três países, incluindo Estados Unidos, Brasil e Espanha, com sistemas que atendem entre 300 a 20 mil usuários mensais e movimentam mais de 30.000 reais por mês em empresas que vão de casas de apostas a empresas de telecomunicações. Essa experiência me fortaleceu como um profissional resiliente, determinado a enfrentar qualquer desafio para entregar resultados de alta qualidade.\n\nSou movido por ambição e crescimento. Formado em Engenharia da Computação, estou constantemente em busca de aprimorar minhas habilidades e elevar minha atuação a novos patamares. Meu próximo objetivo é cursar um pós em arquitetura de software e me especializar em softwares e sistemas multicamadas, enfrentando desafios como BaaS, microserviços e alta escalabilidade. Acredito que, com dedicação e foco, posso contribuir para transformar o futuro da tecnologia.";

  const truncateText = (text: string) => {
    const words = text.split(' ');
    if (words.length > 46 && !isExpanded) {
      return words.slice(0, 46).join(' ') + '...';
    }
    return text;
  };

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  // Define os certificados a exibir: se uma skill for selecionada, usa os certificados dela; caso contrário, usa o conjunto padrão
  const displayedCertificates = selectedSkill ? certificatesBySkill[selectedSkill] : DEFAULT_CERTIFICATES;

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
              <span 
                key={skill} 
                className={`${styles.skillTag} ${selectedSkill === skill ? styles.activeSkill : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Seção do Carrossel de Certificados */}
      <PortfolioCarousel certificates={displayedCertificates} />
    </section>
  );
}
