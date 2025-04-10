import Image from 'next/image'
import styles from './page.module.css'
import PeriodDisplay from './PeriodDisplay'

const GALLERY_IMAGES = [
  {
    src: '/companies/mutant/gallery/team.jpg',
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
          src="/companies/99/image/99freelas_cover.jpg"
          alt="99 freelas Banner"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/99/image/99freelas_logo.jpg"
                alt="Mutant"
                width={80}
                height={80}
              />
            </div>
            <h1>99 Freelas.</h1>
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
              <PeriodDisplay startDate="2024-02-01" />
            </div>
            <div className={styles.detailItem}>
              <h3>Localização</h3>
              <p>São Paulo, SP - (Home Office)</p>
            </div>
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