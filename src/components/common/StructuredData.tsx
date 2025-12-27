"use client";

import { useLocale, useMessages, useTranslations } from 'next-intl';

export default function StructuredData() {
  const locale = useLocale();
  const t = useTranslations("metadata");
  const messages = useMessages() as any;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://curateseoul.com";

  // Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Curate Seoul",
    "image": `${baseUrl}/logo.png`,
    "description": t("home.description"),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seoul",
      "addressCountry": "KR"
    },
    "url": baseUrl,
    "telephone": "+82-10-2557-1506"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}/${locale}`
      }
    ]
  };

  // FAQ Schema
  const faqItems = messages.experiencePage?.faqSection?.items;
  let faqSchema = null;
  if (faqItems) {
    const mainEntity = Object.keys(faqItems).map(key => ({
      "@type": "Question",
      "name": faqItems[key].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqItems[key].answer
      }
    }));

    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
