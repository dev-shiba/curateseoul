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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as any, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://curateseoul.com";

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: locale,
      type: 'website',
      siteName: 'Curate Seoul',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'ko-KR': '/ko',
        'zh-CN': '/zh-CN',
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
        <StructuredData />
      </head>
      <body className="antialiased bg-brand-cream">
        <NextIntlClientProvider messages={messages}>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
