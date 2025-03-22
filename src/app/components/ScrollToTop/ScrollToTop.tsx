'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShouldRender(true);
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Aguarda a animação terminar antes de remover o componente
        timeoutId = setTimeout(() => {
          setShouldRender(false);
        }, 500);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!shouldRender) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTop} ${!isVisible ? styles.hide : ''}`}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
} 