'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  projects: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    url: string;
    github: string;
    slug: string;
  }[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <div className={styles.slideContent}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 