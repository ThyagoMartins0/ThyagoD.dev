import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: '/icons/github.svg',
    url: 'https://github.com/ThyagoD'
  },
  {
    name: 'LinkedIn',
    icon: '/icons/linkedin.svg',
    url: 'https://linkedin.com/in/thyagodias'
  },
  {
    name: 'Google Scholar',
    icon: '/icons/google-scholar.svg',
    url: 'https://scholar.google.com'
  },
  {
    name: 'Instagram',
    icon: '/icons/instagram.svg',
    url: 'https://instagram.com'
  }
]

const NAV_LINKS = [
  { name: 'About me', href: '#about' },
  { name: 'My projects', href: '#projects' },
  { name: 'My research', href: '#research' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.nav}>
          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          <button className={styles.themeToggle} aria-label="Toggle theme">
            🌓
          </button>
        </nav>

        <div className={styles.socialLinks}>
          {SOCIAL_LINKS.map((link) => (
            <Link 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <Image src={link.icon} alt={link.name} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
} 