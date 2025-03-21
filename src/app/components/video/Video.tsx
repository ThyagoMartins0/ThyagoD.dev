import styles from './Video.module.css'

export default function Video() {
  return (
    <section className={styles.video}>
      <div className={styles.videoContent}>
        <div className={styles.videoInfo}>
          <h2>VIDEO</h2>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            src="https://www.youtube.com/embed/NNU6easVvRI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
} 