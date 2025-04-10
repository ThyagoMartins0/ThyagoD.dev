'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  images: {
    url: string;
    caption: string;
  }[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <div className={styles.slideContent}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.url}
                  alt={image.caption}
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