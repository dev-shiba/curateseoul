"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "zh-CN", label: "ZH" },
    { code: "ja", label: "JA" },
    { code: "en", label: "EN" },
  ];

  const onLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale as any });
    });
  };

  return (
    <div className="flex items-center gap-1 bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => onLocaleChange(l.code)}
          disabled={isPending || locale === l.code}
          className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${locale === l.code
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-400 hover:text-zinc-600"
            }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
