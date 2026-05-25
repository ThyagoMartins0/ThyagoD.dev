"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import {
  CERT_ITEM_HEIGHT,
  CERT_SCROLL_SECONDS_PER_ITEM,
  CERT_VISIBLE_COUNT,
  certifications,
  getCertText,
  type Certification,
} from "@/data/certifications";

function CertCard({ cert }: { cert: Certification }) {
  const { lang } = useLanguage();

  return (
    <div className="cert cert-carousel-item">
      <div className="cert-ico">{cert.icon}</div>
      <div className="cert-body">
        <div className="cert-name">{getCertText(cert.name, lang)}</div>
        <div className="cert-issuer">{getCertText(cert.platform, lang)}</div>
      </div>
      <div className="cert-yr">{getCertText(cert.date, lang)}</div>
    </div>
  );
}

export function CertCarousel() {
  const loopItems = [...certifications, ...certifications];
  const scrollDistance = certifications.length * CERT_ITEM_HEIGHT;
  const scrollDuration = certifications.length * CERT_SCROLL_SECONDS_PER_ITEM;

  return (
    <div className="cert-carousel reveal">
      <div
        className="cert-carousel-viewport"
        style={{
          height: CERT_ITEM_HEIGHT * CERT_VISIBLE_COUNT - 10,
          ["--cert-scroll-distance" as string]: `${scrollDistance}px`,
          ["--cert-scroll-duration" as string]: `${scrollDuration}s`,
        }}
      >
        <div className="cert-carousel-track cert-carousel-track--continuous">
          {loopItems.map((cert, i) => (
            <CertCard key={`${cert.id}-${i}`} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
