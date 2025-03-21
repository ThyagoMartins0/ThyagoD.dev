import Image from 'next/image'
import Link from 'next/link'
import styles from './CompanyCard.module.css'

interface CompanyCardProps {
  name: string
  logo: string
  backgroundColor: string
  link: string
}

export default function CompanyCard({ name, logo, backgroundColor, link }: CompanyCardProps) {
  return (
    <Link href={link} className={styles.card} style={{ backgroundColor }}>
      <div className={styles.logoContainer}>
        <Image 
          src={logo}
          alt={`${name} logo`}
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>
    </Link>
  )
} 