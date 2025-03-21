import styles from './CompanyGrid.module.css'
import MutantCard from './CompanyView/MutantCard'
import NinetyNineCard from './CompanyView/NinetyNineCard'
import CodernexCard from './CompanyView/CodernexCard'
import DevsFreeCard from './CompanyView/CasantosCard'
import CasantosCard from './CompanyView/DevsFreeCard'
import GelogCard from './CompanyView/GelogCard'

export default function CompanyGrid() {
  return (
    <section className={styles.section}>
      <h2>últimos empregos</h2>
      <div className={styles.grid}>
        <MutantCard />
        <NinetyNineCard />
        <CodernexCard />
        <DevsFreeCard />
        <GelogCard />
        <CasantosCard />
      </div>
    </section>
  )
} 