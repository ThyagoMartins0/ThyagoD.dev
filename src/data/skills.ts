import type { TranslationKey } from "@/i18n/translations";

export type SkillItem = {
  name: string;
  width: number;
};

export type SkillCategory = {
  icon: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  skills: SkillItem[];
  delay?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "☕",
    titleKey: "sk1_h",
    descKey: "sk1_p",
    skills: [
      { name: "Java 11/17", width: 88 },
      { name: "Spring Boot / Security", width: 85 },
      { name: "Spring Cloud / JPA", width: 78 },
      { name: "LDAP / IAM", width: 80 },
    ],
  },
  {
    icon: "🟢",
    titleKey: "sk2_h",
    descKey: "sk2_p",
    delay: "d1",
    skills: [
      { name: "Node.js / TypeScript", width: 90 },
      { name: "NestJS", width: 85 },
      { name: "Express.js", width: 88 },
      { name: "REST / GraphQL APIs", width: 86 },
    ],
  },
  {
    icon: "⚛️",
    titleKey: "sk3_h",
    descKey: "sk3_p",
    delay: "d2",
    skills: [
      { name: "React / Next.js", width: 85 },
      { name: "React Native", width: 75 },
      { name: "Angular", width: 65 },
      { name: "Vue.js 3", width: 60 },
    ],
  },
  {
    icon: "🐘",
    titleKey: "sk4_h",
    descKey: "sk4_p",
    skills: [
      { name: "PostgreSQL / MySQL", width: 85 },
      { name: "MongoDB", width: 78 },
      { name: "Redis", width: 80 },
      { name: "TypeORM / Hibernate", width: 82 },
    ],
  },
  {
    icon: "📡",
    titleKey: "sk5_h",
    descKey: "sk5_p",
    delay: "d1",
    skills: [
      { name: "Apache Kafka", width: 78 },
      { name: "RabbitMQ", width: 72 },
      { name: "AWS", width: 75 },
      { name: "Docker / Kubernetes", width: 80 },
    ],
  },
  {
    icon: "🏛️",
    titleKey: "sk6_h",
    descKey: "sk6_p",
    delay: "d2",
    skills: [
      { name: "DDD", width: 78 },
      { name: "Hexagonal Arch.", width: 75 },
      { name: "Microservices", width: 82 },
      { name: "Distributed Systems", width: 76 },
    ],
  },
  {
    icon: "🤖",
    titleKey: "sk7_h",
    descKey: "sk7_p",
    skills: [
      { name: "LLM / OpenAI API", width: 82 },
      { name: "RAG", width: 78 },
      { name: "Fine-tuning", width: 72 },
      { name: "Machine Learning", width: 70 },
    ],
  },
];
