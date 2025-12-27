import { useLocale, useTranslations } from "next-intl";

export default function StructuredData() {
  const locale = useLocale();
  const t = useTranslations("metadata");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://curateseoul.com";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Curate Seoul",
    "image": `${baseUrl}/logo.png`, // Update with actual logo path
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "", // Add if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "602, 6F, Yeongdong-daero",
      "addressLocality": "Gangnam-gu",
      "addressRegion": "Seoul",
      "postalCode": "06075",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5173,
      "longitude": 127.0591
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "description": t("description")
  };

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
    </>
  );
}
