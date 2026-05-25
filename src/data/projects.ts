import type { Lang } from "@/i18n/translations";

export const p2Stack: Record<Lang, string[]> = {
  pt: ["React", "Node.js", "Java", "TypeScript", "BFF", "Microsserviços"],
  en: ["React", "Node.js", "Java", "TypeScript", "BFF", "Microservices"],
};

export const vivoProject = {
  cat: {
    pt: "Telecom · Brasil · B2C / Self-service",
    en: "Telecom · Brazil · B2C / Self-service",
  },
  title: {
    pt: "Plataforma Vivo — Home Automation & Faturas",
    en: "Vivo Platform — Home Automation & Billing",
  },
  desc: {
    pt: "Plataforma de serviços digitais ao cliente da Vivo/Telefônica Brasil. Desenvolvimento fullstack — frontend React, BFF em Node.js/TypeScript e microsserviços Java — para automação residencial (IoT), gestão de faturas e diagnóstico de problemas de conexão.",
    en: "Vivo/Telefônica Brasil digital customer service platform. Fullstack development — React frontend, Node.js/TypeScript BFF, and Java microservices — for home automation (IoT), billing management, and connection diagnostics.",
  },
  role: {
    pt: "Full Stack Developer — React · Java · Node",
    en: "Full Stack Developer — React · Java · Node",
  },
  period: {
    pt: "Ago 2024 — Dez 2025",
    en: "Aug 2024 — Dec 2025",
  },
  company: {
    pt: "Mutant → Vivo (Telefônica Brasil)",
    en: "Mutant → Vivo (Telefônica Brasil)",
  },
  badge: {
    pt: "🏢 Sistema Empresarial — Confidencial",
    en: "🏢 Enterprise System — Confidential",
  },
  achievements: {
    pt: [
      "Desenvolvimento de features para APIs e frontend em projetos de home automation da Vivo.",
      "Atuação no frontend, BFF e microsserviços — stack completa end-to-end.",
      "Fluxo mensal de 10.000+ usuários na plataforma com demanda constante por soluções rápidas.",
      "Implementação de testes unitários eficientes garantindo máxima qualidade de código.",
    ],
    en: [
      "Built features for APIs and frontend in Vivo's home automation projects.",
      "Worked across frontend, BFF, and microservices — complete end-to-end stack.",
      "Monthly flow of 10,000+ users on the platform with constant demand for fast solutions.",
      "Implemented efficient unit tests ensuring the highest possible code quality.",
    ],
  },
  metrics: {
    users: "20M+",
    uptime: "99.99%",
    security: { pt: "Alta", en: "High" },
  },
} as const;

export const defaultCrmProject = {
  cat: {
    pt: "Fintech · Brasil",
    en: "Fintech · Brazil",
  },
  title: {
    pt: "GEVTECH— Credenciamento & Pagamentos",
    en: "GEVTECH — Credentialing & Payments",
  },
  desc: {
    pt: "Front-end web para CRM multi-tenant de credenciamento e pagamentos. Next.js + TypeScript com BFF em Route Handlers integrando API REST e sistemas PHP legados. Dashboard transacional, white labels, estabelecimentos, taxas, compliance e terminais.",
    en: "Web front-end for a multi-tenant CRM for credentialing and payments. Next.js + TypeScript with BFF in Route Handlers integrating REST API and legacy PHP systems. Transactional dashboard, white labels, establishments, fees, compliance, and terminals.",
  },
  stack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Socket.IO", "Docker"],
  badge: {
    pt: "🏢 Sistema Empresarial — Confidencial",
    en: "🏢 Enterprise System — Confidential",
  },
} as const;

export const PROJECTS_PER_PAGE = 6;

export const projectPagination = {
  prev: { pt: "Anterior", en: "Previous" },
  next: { pt: "Próxima", en: "Next" },
  page: { pt: "Página", en: "Page" },
  of: { pt: "de", en: "of" },
} as const;
