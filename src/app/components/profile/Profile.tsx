import Image from 'next/image'
import Link from 'next/link'
import styles from './Profile.module.css'

const SKILLS = ['Java','Spring','Php','Laravel','React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS']

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.profileContent}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileImage}>
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              width={200} 
              height={200}
              className={styles.avatar}
              priority
            />
          </div>
          <div className={styles.imageDecoration} />
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.nameSection}>
            <h1>Thyago Ramos</h1>
            <span className={styles.role}>Software Engineer</span>
          </div>

          <p className={styles.bio}>
            Passionate about creating innovative solutions and exploring new technologies.
            Focused on web development and cloud computing.
          </p>

          <div className={styles.skills}>
            {SKILLS.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>

          <Link href="#more" className={styles.moreLink}>
            Ver mais sobre mim
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6 12L10 8L6 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 