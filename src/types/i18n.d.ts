export type Locale = 'ko' | 'zh-CN';

// Augment next-intl types
declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
  }
}
