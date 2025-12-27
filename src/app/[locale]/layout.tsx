import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import ScrollToTop from "@/components/common/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/common/StructuredData";

import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://curateseoul.com";

  return {
    title: t('home.title'),
    description: t('home.description'),
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: t('home.ogTitle'),
      description: t('home.ogDescription'),
      locale: locale,
      type: 'website',
      siteName: 'Curate Seoul',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Curate Seoul - Premium K-Beauty & Seoul Travel'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.ogTitle'),
      description: t('home.ogDescription'),
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'zh-CN': '/zh-CN',
        'ja-JP': '/ja',
        'en-US': '/en'
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
      </head>
      <body className="antialiased bg-brand-cream">
        <NextIntlClientProvider messages={messages}>
          <StructuredData />
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
