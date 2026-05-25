import type { TranslationKey } from "@/i18n/translations";

export type ExperienceItem = {
  id: string;
  company: string;
  volunteer?: boolean;
  periodKey: TranslationKey;
  roleKey: TranslationKey;
  descKey: TranslationKey;
  metaKeys: TranslationKey[];
  metaStatic?: string[];
  tags: string[];
  achievements: TranslationKey[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "e1",
    company: "Capgemini → Bradesco",
    periodKey: "e1_period",
    roleKey: "e1_role",
    descKey: "e1_desc",
    metaKeys: ["remote", "e1_period"],
    metaStatic: ["  Capgemini → Banco Bradesco"],
    tags: ["Java", "Spring Boot", "LDAP", "JWT", "API Security", "PostgreSQL", "Microservices"],
    achievements: ["e1_a1", "e1_a2", "e1_a3", "e1_a4"],
  },
  {
    id: "e2",
    company: "Mutant → Vivo Telefônica",
    periodKey: "e2_period",
    roleKey: "e2_role",
    descKey: "e2_desc",
    metaKeys: ["e2_period"],
    metaStatic: ["  Mutant → Vivo (Telefônica Brasil)", "📍 São Paulo, SP"],
    tags: ["React", "Node.js", "Java", "TypeScript", "BFF", "Microservices", "Unit Tests"],
    achievements: ["e2_a1", "e2_a2", "e2_a3", "e2_a4"],
  },
  {
    id: "e3",
    company: "Gaming Innovators",
    periodKey: "e3_period",
    roleKey: "e3_role",
    descKey: "e3_desc",
    metaKeys: ["e3_loc", "e3_period"],
    metaStatic: ["🌎 Gaming Innovators"],
    tags: ["NestJS", "React", "React Native", "PHP", "Laravel", "Microservices"],
    achievements: ["e3_a1", "e3_a2", "e3_a3"],
  },
  {
    id: "e4",
    company: "Codernex",
    periodKey: "e4_period",
    roleKey: "e4_role",
    descKey: "e4_desc",
    metaKeys: ["e4_period"],
    metaStatic: ["  Codernex", "📍 São Paulo, SP"],
    tags: ["Java", "PHP", "Laravel", "JavaScript", "WordPress", "MySQL"],
    achievements: ["e4_a1", "e4_a2", "e4_a3"],
  },
  {
    id: "e5",
    company: "99Freelas",
    periodKey: "e5_period",
    roleKey: "e5_role",
    descKey: "e5_desc",
    metaKeys: ["e5_loc", "e5_period"],
    metaStatic: ["💻 99Freelas"],
    tags: ["PHP/Laravel", "Java/Spring", "Node.js", "React", "Python", "Kafka", "Docker", "AWS"],
    achievements: ["e5_a1", "e5_a2", "e5_a3"],
  },
  {
    id: "e6",
    company: "DevsFree",
    volunteer: true,
    periodKey: "e6_period",
    roleKey: "e6_role",
    descKey: "e6_desc",
    metaKeys: ["e6_period"],
    metaStatic: ["🤝 DevsFree — ICPA Project", "📍 São Paulo, SP"],
    tags: ["Java 11/17", "Spring Boot", "Spring Security", "PostgreSQL", "Swagger", "Scrum", "UML"],
    achievements: ["e6_a1", "e6_a2", "e6_a3"],
  },
];
