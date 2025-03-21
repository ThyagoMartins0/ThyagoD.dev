import Image from 'next/image'
import styles from './page.module.css'

const GALLERY_IMAGES = [
  {
    src: '/companies/gelog/arquivos/onboardin.jpg',
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
          src="/companies/gelog/grupo_gelog_cover.jpg"
          alt="Gelog Banner"
          fill
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.companyLogo}>
              <Image
                src="/companies/gelog/grupo_gelog_logo.jpg"
                alt="Gelog"
                width={80}
                height={80}
              />
            </div>
            <h1>Grupo Gelog</h1>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className={styles.description}>
        <div className={styles.container}>
          <h2>Sobre a Empresa</h2>
          <p>
          O GRUPO GELOG é formado pelas empresas GELOG Locações e Transportes, OMNITRANS Logística e PAULISTA Terminal Retroportuário. Está instalado em conjuntos logísticos nas cidades de Santos, Campinas, Paulínia, Guarulhos e Pindamonhangaba, compostos por pátios de containers e armazéns, além de escritórios dentro dos aeroportos de Viracopos e Cumbica, totalizando áreas operacionais com mais de 125.000 m² e com privilegiada localização.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>Cargo</h3>
              <p>
              Estagiário de suporte e infraestrutura </p>
            </div>
            <div className={styles.detailItem}>
              <h3>Período</h3>
              <p>
              set de 2022 - fev de 2024 </p>
            </div>
            <div className={styles.detailItem}>
              <h3>Localização</h3>
              <p>

Santos, São Paulo, Brasil · Presencial</p>
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
                src="/companies/gelog/recomendacoes/alan.jpg"
                alt="Foto do recomendante"
                width={60}
                height={60}
                className={styles.recommendationImage}
              />
              <div>
                <h3>Alan Kleber Da Silva</h3>
                <p>Supervisor de TI | Infraestrutura TI | Cloud Azure | Cyber Security | Office 365 | Windows Server | Linux | CFTV | PABX | Firewalls</p>
              </div>
            </div>
            <blockquote>
              &ldquo;Profissional com excelente capacidade de análise técnica e extremamente organizado. Possui um conhecimento diferenciado e comprometimento acima das expectativas. Com certeza um dos melhores estagiários na área de infraestrutura no qual tive o prazer de compartilhar meus conhecimentos e aprender também!&rdquo;
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