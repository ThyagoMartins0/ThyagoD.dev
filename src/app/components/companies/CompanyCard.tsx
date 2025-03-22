'use client';

import Image from 'next/image'
import Link from 'next/link'
import styles from './CompanyCard.module.css'
import { useLanguage } from '@/app/i18n/LanguageContext'

interface CompanyCardProps {
  name: string
  logo: string
  backgroundColor: string
  slug: string
}

export default function CompanyCard({ name, logo, backgroundColor, slug }: CompanyCardProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.logoContainer}>
        <Image 
          src={logo}
          alt={`${name} logo`}
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>
      <Link href={`/companies/${slug}`} className={styles.learnMore}>
        {t.companies.learnMore}
      </Link>
    </div>
  )
} 