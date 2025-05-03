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
      title: string;
      description: string;
    };
    skills: {
      title: string;
      description: string;
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
      title: string;
      description: string;
      learnMore: string;
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
          responsibilities: readonly string[];
          highlights: readonly string[];
        };
        biometric: {
          title: string;
          description: string;
          period: string;
          role: string;
          responsibilities: readonly string[];
          highlights: readonly string[];
        };
        morada: {
          title: string;
          description: string;
          period: string;
          role: string;
          responsibilities: readonly string[];
          highlights: readonly string[];
        };
      };
      gallery: {
        title: string;
        images: {
          workspace: string;
          team: string;
          school: string;
        };
      };
    };
    ninetyNine: {
      title: string;
      description: string;
      learnMore: string;
      slogan: string;
      about: {
        title: string;
        description: string;
        role: string;
        period: string;
        location: string;
      };
      projects: {
        title: string;
        responsibilities: string;
        highlights: string;
        technologies: string;
        items: Array<{
          title: string;
          description: string;
          technologies: string[];
          role: string;
          responsibilities: string[];
          highlights: string[];
        }>;
      };
      gallery: {
        title: string;
        images: {
          workspace: string;
          team: string;
          school: string;
        };
      };
    };
    gamming: {
      about: {
        title: string;
        description: string;
        role: string;
        location: string;
      };
      projects: {
        title: string;
        responsibilities: string;
        highlights: string;
        technologies: string;
        project1: {
          title: string;
          description: string;
          role: string;
          responsibilities: readonly string[];
          highlights: readonly string[];
        };
        project2: {
          title: string;
          description: string;
          role: string;
          responsibilities: readonly string[];
          highlights: readonly string[];
        };
        project3: {
          title: string;
          description: string;
          role: string;
          responsibilities: readonly string[];
          highlights: readonly string[];
        };
      };
      gallery: {
        title: string;
        images: {
          team: string;
          workspace: string;
          event: string;
        };
      };
    };
  };
  gallery: {
    title: string;
    description: string;
    viewMore: string;
  };
  research: {
    title: string;
    description: string;
    readTime: string;
    readMore: string;
  };
  languageSelector: string;
};

export function getTranslation(lang: Language): Translation {
  return translations[lang];
} 