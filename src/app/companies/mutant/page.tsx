import Image from 'next/image'
import styles from './page.module.css'

const GALLERY_IMAGES = [
  {
    src: '/companies/mutant/gallery/workspace.jpg',
    alt: 'Espaço de trabalho'
  },
  {
    src: '/companies/mutant/gallery/team.jpg',
    alt: 'Time da empresa'
  },
  {
    src: '/companies/mutant/gallery/event.jpg',
    alt: 'Evento da empresa'
  }
]

export default function MutantPage() {
  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.banner}>
        <Image
          src="/image/mutantbr_cover.png"
          alt="Mutant Banner"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/mutant/logo.svg"
                alt="Mutant"
                width={80}
                height={80}
              />
            </div>
            <h1>NEVER SETTLE.</h1>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>Sobre a Empresa</h2>
          <p>
            A Mutant é uma empresa inovadora focada em desenvolvimento de software
            e soluções tecnológicas. Com uma cultura única e um ambiente dinâmico,
            buscamos constantemente novos desafios e oportunidades de crescimento.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>Cargo</h3>
              <p>Software Engineer</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Período</h3>
              <p>2023 - Atual</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Localização</h3>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendações */}
      <section className={styles.recommendations}>
        <div className={styles.container}>
          <h2>Recomendações</h2>
          <div className={styles.recommendationCard}>
            <div className={styles.recommendationHeader}>
              <Image
                src="/recommendations/person1.jpg"
                alt="Foto do recomendante"
                width={60}
                height={60}
                className={styles.recommendationImage}
              />
              <div>
                <h3>Nome da Pessoa</h3>
                <p>Cargo da Pessoa</p>
              </div>
            </div>
            <blockquote>
              "Texto da recomendação aqui, destacando as qualidades e contribuições
              do profissional durante seu tempo na empresa."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>Galeria</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
                <div className={styles.playOverlay}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M8 5v14l11-7L8 5z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 