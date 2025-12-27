import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['zh-CN', 'ja', 'en'],

  // Used when no locale matches
  defaultLocale: 'zh-CN',

  // Optional: Always use locale prefix
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
