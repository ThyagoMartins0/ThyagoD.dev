import styles from './page.module.css'
import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Video from './components/video/Video'
import CompanyGrid from './components/companies/CompanyGrid'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Profile />
      <Video />
      <CompanyGrid />
    </main>
  )
}
