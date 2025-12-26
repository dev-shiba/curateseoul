import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR, Noto_Sans_SC } from 'next/font/google'
import { LanguageProvider } from '@/components/LanguageProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-kr',
  display: 'swap',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sc',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Curate Seoul 큐레이트 서울 | Global Medical & Beauty Concierge',
  description: '외국인 환자와 뷰티 여행객을 위한 프리미엄 컨시어지. 병원/뷰티샵 이용 인증 시 다이닝, 투어, 쇼핑 VIP 혜택을 제공합니다. Exclusive membership for medical & beauty tourists in Seoul.',
  keywords: [
    '서울 의료관광', 'K-뷰티 체험', '외국인 환자 유치', '강남 피부과', '성형외과 할인',
    'Seoul Medical Tourism', 'K-Beauty', 'Plastic Surgery Korea', 'Gangnam Dermatology',
    'Medical Concierge', 'Curate Seoul', '큐레이트 서울'
  ],
  openGraph: {
    title: 'Curate Seoul | 큐레이트 서울',
    description: '아름다워진 당신, 서울의 멋도 즐기세요. 의료/뷰티 여행객 전용 프라이빗 혜택 플랫폼.',
    url: 'https://curateseoul.com',
    siteName: 'Curate Seoul',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curate Seoul 큐레이트 서울 | Premium Travel Benefits',
    description: 'Verified Medical & Beauty Tourists get VIP access to Seoul\'s hottest spots.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansKR.variable} ${notoSansSC.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
