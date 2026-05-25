import type { Lang } from "@/i18n/translations";

export type LocalizedText = Record<Lang, string>;

export type Certification = {
  id: string;
  name: LocalizedText;
  platform: LocalizedText;
  date: LocalizedText;
  sortDate: string;
  icon: string;
};

const platformIcons: Record<string, string> = {
  udemy: "🎓",
  rocketseat: "🚀",
  dio: "💜",
  ibm: "🔷",
  coursera: "📘",
  cisco: "🌐",
  lancore: "🔌",
};

const platforms = {
  udemy: { en: "Udemy", pt: "Udemy" },
  rocketseat: { en: "Rocketseat", pt: "Rocketseat" },
  dio: { en: "DIO (Digital Innovation One)", pt: "DIO (Digital Innovation One)" },
  ibm: { en: "IBM", pt: "IBM" },
  coursera: { en: "Coursera (Grow with Google)", pt: "Coursera (Grow with Google)" },
  cisco: { en: "Cisco Networking Academy", pt: "Cisco Networking Academy" },
  lancore: { en: "Lancore", pt: "Lancore" },
} as const satisfies Record<string, LocalizedText>;

type RawCert = {
  id: string;
  platformKey: keyof typeof platforms;
  name: LocalizedText;
  date: LocalizedText;
  sortDate: string;
};

const raw: RawCert[] = [
  {
    id: "udemy-01",
    platformKey: "udemy",
    name: {
      pt: "Arquitetura de Software & Design de Sistemas Modernos",
      en: "Software Architecture & Modern Systems Design",
    },
    date: { pt: "Ago 2025", en: "Aug 2025" },
    sortDate: "2025-08",
  },
  {
    id: "udemy-02",
    platformKey: "udemy",
    name: {
      pt: "Aprenda Golang do Zero! Desenvolva uma APLICAÇÃO COMPLETA!",
      en: "Learn Golang from Scratch! Build a COMPLETE APPLICATION!",
    },
    date: { pt: "Jun 2025", en: "Jun 2025" },
    sortDate: "2025-06",
  },
  {
    id: "rocketseat-01",
    platformKey: "rocketseat",
    name: {
      pt: "Desafio Microsserviços Escaláveis",
      en: "Scalable Microservices Challenge",
    },
    date: { pt: "Jun 2025", en: "Jun 2025" },
    sortDate: "2025-06",
  },
  {
    id: "udemy-03",
    platformKey: "udemy",
    name: {
      pt: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
      en: "React from Zero to Mastery (w/ hooks, router, API, Projects)",
    },
    date: { pt: "Fev 2025", en: "Feb 2025" },
    sortDate: "2025-02",
  },
  {
    id: "udemy-04",
    platformKey: "udemy",
    name: {
      pt: "NodeJs Avançado com Clean Architecture, NestJS e Typescript",
      en: "Advanced Node.js with Clean Architecture, NestJS and TypeScript",
    },
    date: { pt: "Fev 2025", en: "Feb 2025" },
    sortDate: "2025-02",
  },
  {
    id: "udemy-05",
    platformKey: "udemy",
    name: {
      pt: "NestJS para REST API com TypeORM, Autenticação JWT e Testes",
      en: "NestJS for REST API with TypeORM, JWT Authentication and Tests",
    },
    date: { pt: "Fev 2025", en: "Feb 2025" },
    sortDate: "2025-02",
  },
  {
    id: "udemy-06",
    platformKey: "udemy",
    name: {
      pt: "Testes automatizados na prática com Spring Boot",
      en: "Automated Testing in Practice with Spring Boot",
    },
    date: { pt: "Ago 2024", en: "Aug 2024" },
    sortDate: "2024-08",
  },
  {
    id: "udemy-07",
    platformKey: "udemy",
    name: {
      pt: "Azure Pipelines - CI/CD, Docker e Kubernetes no Azure DevOps",
      en: "Azure Pipelines — CI/CD, Docker and Kubernetes on Azure DevOps",
    },
    date: { pt: "Ago 2024", en: "Aug 2024" },
    sortDate: "2024-08",
  },
  {
    id: "udemy-08",
    platformKey: "udemy",
    name: {
      pt: "Microsserviços Java com Spring Boot e Spring Cloud",
      en: "Java Microservices with Spring Boot and Spring Cloud",
    },
    date: { pt: "Ago 2024", en: "Aug 2024" },
    sortDate: "2024-08",
  },
  {
    id: "udemy-09",
    platformKey: "udemy",
    name: {
      pt: "Arquitetura de Microsserviços: Padrão Saga Orquestrado",
      en: "Microservices Architecture: Orchestrated Saga Pattern",
    },
    date: { pt: "Jun 2024", en: "Jun 2024" },
    sortDate: "2024-06",
  },
  {
    id: "udemy-10",
    platformKey: "udemy",
    name: {
      pt: "Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS",
      en: "Advanced Web Development with PHP, Laravel and Vue.js",
    },
    date: { pt: "Jun 2024", en: "Jun 2024" },
    sortDate: "2024-06",
  },
  {
    id: "udemy-11",
    platformKey: "udemy",
    name: {
      pt: "PHP 7 Completo - Curso do Desenvolvedor Web",
      en: "Complete PHP 7 — Web Developer Course",
    },
    date: { pt: "Jun 2024", en: "Jun 2024" },
    sortDate: "2024-06",
  },
  {
    id: "udemy-12",
    platformKey: "udemy",
    name: {
      pt: "Java do zero",
      en: "Java from Scratch",
    },
    date: { pt: "Jun 2024", en: "Jun 2024" },
    sortDate: "2024-06",
  },
  {
    id: "udemy-13",
    platformKey: "udemy",
    name: {
      pt: "Linux Bootcamp: Trilha de aprendizado [Devs e DevOps]",
      en: "Linux Bootcamp: Learning Track [Devs & DevOps]",
    },
    date: { pt: "Mai 2024", en: "May 2024" },
    sortDate: "2024-05",
  },
  {
    id: "dio-01",
    platformKey: "dio",
    name: {
      pt: "Testes Unitários Com JUnit",
      en: "Unit Testing with JUnit",
    },
    date: { pt: "Mai 2023", en: "May 2023" },
    sortDate: "2023-05",
  },
  {
    id: "dio-02",
    platformKey: "dio",
    name: {
      pt: "Aprenda sobre S.O.L.I.D. com Java",
      en: "Learn S.O.L.I.D. Principles with Java",
    },
    date: { pt: "Abr 2023", en: "Apr 2023" },
    sortDate: "2023-04",
  },
  {
    id: "udemy-14",
    platformKey: "udemy",
    name: {
      pt: "Dominando Zabbix do básico ao avançado.",
      en: "Mastering Zabbix from Basic to Advanced",
    },
    date: { pt: "Mar 2023", en: "Mar 2023" },
    sortDate: "2023-03",
  },
  {
    id: "ibm-01",
    platformKey: "ibm",
    name: {
      pt: "DevOps Essentials",
      en: "DevOps Essentials",
    },
    date: { pt: "Mar 2023", en: "Mar 2023" },
    sortDate: "2023-03",
  },
  {
    id: "coursera-01",
    platformKey: "coursera",
    name: {
      pt: "The Bits and Bytes of Computer Networking",
      en: "The Bits and Bytes of Computer Networking",
    },
    date: { pt: "Mai 2022", en: "May 2022" },
    sortDate: "2022-05",
  },
  {
    id: "udemy-15",
    platformKey: "udemy",
    name: {
      pt: "Arquitetura de Redes",
      en: "Network Architecture",
    },
    date: { pt: "Abr 2022", en: "Apr 2022" },
    sortDate: "2022-04",
  },
  {
    id: "cisco-01",
    platformKey: "cisco",
    name: {
      pt: "CCNA: Introduction to Networks",
      en: "CCNA: Introduction to Networks",
    },
    date: { pt: "Dez 2021", en: "Dec 2021" },
    sortDate: "2021-12",
  },
  {
    id: "lancore-01",
    platformKey: "lancore",
    name: {
      pt: "Técnico em Fibra Óptica TFO - FS100A",
      en: "Optical Fiber Technician TFO - FS100A",
    },
    date: { pt: "Jun 2021", en: "Jun 2021" },
    sortDate: "2021-06",
  },
];

export const certifications: Certification[] = raw
  .map((cert) => ({
    id: cert.id,
    name: cert.name,
    platform: platforms[cert.platformKey],
    date: cert.date,
    sortDate: cert.sortDate,
    icon: platformIcons[cert.platformKey] ?? "📜",
  }))
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const CERT_VISIBLE_COUNT = 6;
export const CERT_ITEM_HEIGHT = 76;
export const CERT_SCROLL_SECONDS_PER_ITEM = 2.8;

export function getCertText(text: LocalizedText, lang: Lang): string {
  return text[lang];
}
