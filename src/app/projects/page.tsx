import ProjectGrid from '../components/projects/ProjectGrid'
import Header from '../components/header/Header'
import styles from './page.module.css'

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <ProjectGrid />
      </div>
    </main>
  )
} 