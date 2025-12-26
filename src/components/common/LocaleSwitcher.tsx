"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "ko" ? "zh-CN" : "ko";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all group"
    >
      <span className={`text-[10px] font-black tracking-widest ${locale === "ko" ? "text-brand-gold" : "text-zinc-400 group-hover:text-zinc-200"}`}>
        KO
      </span>
      <div className="w-[1px] h-2.5 bg-white/20" />
      <span className={`text-[10px] font-black tracking-widest ${locale === "zh-CN" ? "text-brand-gold" : "text-zinc-400 group-hover:text-zinc-200"}`}>
        ZH
      </span>
    </button>
  );
}
