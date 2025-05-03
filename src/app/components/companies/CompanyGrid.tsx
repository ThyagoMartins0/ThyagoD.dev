'use client';

import styles from './CompanyGrid.module.css'
import MutantCard from './CompanyView/MutantCard'
import NinetyNineCard from './CompanyView/NinetyNineCard'
import CodernexCard from './CompanyView/CodernexCard'
import DevsFreeCard from './CompanyView/CasantosCard'
import CasantosCard from './CompanyView/DevsFreeCard'
import GelogCard from './CompanyView/GelogCard'
import GammingInnovatorsCard from './CompanyView/gamming_innovatorsCard'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function CompanyGrid() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <h2>{t.companies.title}</h2>
      <p className={styles.description}>{t.companies.description}</p>
      <div className={styles.grid}>
        <MutantCard />
        <GammingInnovatorsCard />
        <CodernexCard />
        <NinetyNineCard />
        <CasantosCard />
        <GelogCard />
        <DevsFreeCard />
      </div>
    </section>
  )
} 