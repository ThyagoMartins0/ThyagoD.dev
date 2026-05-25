"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  featuredCertifications,
  getFeaturedCertText,
  type FeaturedCertification,
} from "@/data/featuredCertifications";

function FeaturedCertCard({ cert }: { cert: FeaturedCertification }) {
  const { lang } = useLanguage();

  return (
    <div className="featured-cert" style={{ ["--cert-accent" as string]: cert.accent }}>
      <div className="featured-cert-icon">
        {cert.image ? (
          <Image
            src={cert.image}
            alt={getFeaturedCertText(cert.name, lang)}
            width={40}
            height={40}
            className="featured-cert-img"
          />
        ) : (
          <span aria-hidden>{cert.icon}</span>
        )}
      </div>
      <div className="featured-cert-name">{getFeaturedCertText(cert.name, lang)}</div>
      <div className="featured-cert-platform">{getFeaturedCertText(cert.platform, lang)}</div>
    </div>
  );
}

export function FeaturedCerts() {
  return (
    <div className="featured-certs reveal">
      {featuredCertifications.map((cert) => (
        <FeaturedCertCard key={cert.id} cert={cert} />
      ))}
    </div>
  );
}
