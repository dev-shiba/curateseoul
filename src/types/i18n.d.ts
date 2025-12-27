export type Locale = 'zh-CN' | 'ja' | 'en';

// Augment next-intl types
declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
  }
}
