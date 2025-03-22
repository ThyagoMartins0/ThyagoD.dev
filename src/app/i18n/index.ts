import { ptBR } from './locales/pt-BR';
import { en } from './locales/en';
import { es } from './locales/es';

export const languages = {
  'pt-BR': 'Português',
  'en': 'English',
  'es': 'Español',
} as const;

export type Language = keyof typeof languages;

export const translations = {
  'pt-BR': ptBR,
  'en': en,
  'es': es,
} as const;

export type Translation = {
  header: {
    about: string;
    projects: string;
    research: string;
    gallery: string;
  };
  profile: {
    role: string;
    bio: {
      short: string;
      long: string;
      readMore: string;
      readLess: string;
    };
    skills: {
      title: string;
    };
  };
  video: {
    title: string;
    description: string;
  };
  companies: {
    title: string;
    description: string;
    learnMore: string;
    mutant: {
      slogan: string;
      about: {
        title: string;
        description: string;
        role: string;
        period: string;
        location: string;
      };
      recommendations: {
        title: string;
        gabriel: {
          name: string;
          role: string;
          text: string;
        };
        daniel: {
          name: string;
          role: string;
          text: string;
        };
      };
      projects: {
        title: string;
        responsibilities: string;
        highlights: string;
        technologies: string;
        myRequests: {
          title: string;
          description: string;
          period: string;
          role: string;
          responsibilities: string[];
          highlights: string[];
        };
        biometric: {
          title: string;
          description: string;
          period: string;
          role: string;
          responsibilities: string[];
          highlights: string[];
        };
        morada: {
          title: string;
          description: string;
          period: string;
          role: string;
          responsibilities: string[];
          highlights: string[];
        };
      };
      gallery: {
        title: string;
        images: {
          workspace: string;
          team: string;
          event: string;
        };
      };
    };
  };
  gallery: {
    title: string;
    description: string;
    sections: {
      education: {
        title: string;
        text: string;
        alt: string;
      };
      professional: {
        title: string;
        text: string;
        alt: string;
      };
      personal: {
        title: string;
        text: string;
        alt: string;
      };
    };
  };
  research: {
    title: string;
    description: string;
    readTime: string;
    readMore: string;
  };
  scrollToTop: string;
  languageSelector: string;
};

export function getTranslation(lang: Language): Translation {
  return translations[lang];
} 