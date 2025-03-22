"use client";

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../i18n/LanguageContext'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: '/profile/imagens/icons8-github-512.png',
    url: 'https://github.com/ThyagoMartins0'
  },
  {
    name: 'LinkedIn',
    icon: '/profile/imagens/icons8-linkedin-480.png',
    url: 'https://www.linkedin.com/in/thyagomartins/'
  },
  {
    name: 'Instagram',
    icon: '/profile/imagens/icons8-instagram.svg',
    url: 'https://www.instagram.com/othyago.diniz/'
  },

  {
    name: 'hackerrank',
    icon: '/profile/imagens/icons8-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-96.png',
    url: 'https://www.hackerrank.com/profile/ThyagoMartins'
  },
  {
    name: 'Medium',
    icon: '/profile/imagens/icons8-medium (2).svg',
    url: 'https://medium.com/@ThyagoMartins'
  }
]

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const NAV_LINKS = [
    { name: t.header.about, href: '/#about' },
    { name: t.header.projects, href: '/projects' },
    { name: t.header.research, href: '/research' },
    { name: t.header.gallery, href: '/gallery' }
  ]

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
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
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
              <Image src={link.icon} alt={link.name} width={55} height={55} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
} 