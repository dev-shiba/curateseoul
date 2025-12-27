"use client";
import React from "react";
import { useTranslations } from "next-intl";
import MotionSection from "../common/MotionSection";
import {
    MdOutlineHealthAndSafety,
    MdOutlineRestaurant,
    MdOutlineStorefront,
    MdOutlineCoffee,
    MdOutlineShoppingBag,
    MdOutlineFace,
    MdOutlineAutoAwesome
} from "react-icons/md";

export default function PartnerLogos() {
    const t = useTranslations("partnerLogos");

    const categories = [
        { key: "skin", icon: <MdOutlineFace size={24} />, color: "bg-blue-50 text-blue-600" },
        { key: "plastic", icon: <MdOutlineAutoAwesome size={24} />, color: "bg-purple-50 text-purple-600" },
        { key: "wellness", icon: <MdOutlineHealthAndSafety size={24} />, color: "bg-green-50 text-green-600" },
        { key: "dining", icon: <MdOutlineRestaurant size={24} />, color: "bg-orange-50 text-orange-600" },
        { key: "cafe", icon: <MdOutlineCoffee size={24} />, color: "bg-amber-50 text-amber-600" },
        { key: "popup", icon: <MdOutlineStorefront size={24} />, color: "bg-rose-50 text-rose-600" },
        { key: "shopping", icon: <MdOutlineShoppingBag size={24} />, color: "bg-zinc-50 text-zinc-600" },
    ];

    // Placeholder for 10 logos
    const partners = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        name: `Partner ${i + 1}`,
    }));

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <MotionSection>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
                            {t("title")}
                        </h2>
                        <p className="text-zinc-500 text-lg font-medium">
                            {t("subtitle")}
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {categories.map((cat) => (
                            <div
                                key={cat.key}
                                className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-100 shadow-sm bg-white hover:shadow-md transition-all group cursor-default"
                            >
                                <div className={`p-2 rounded-xl ${cat.color} group-hover:scale-110 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <span className="font-bold text-zinc-700">{t(`categories.${cat.key}`)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Logos Grids - Simple Placeholder Style */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="aspect-[3/2] bg-zinc-50 rounded-3xl flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all border border-zinc-100 group"
                            >
                                <div className="w-full h-full bg-zinc-200 rounded-xl animate-pulse group-hover:animate-none group-hover:bg-brand-gold/10 transition-colors flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-brand-gold tracking-tighter">
                                        Partner Logo
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-zinc-400 text-xs font-medium tracking-wide">
                            AND MORE TOP LOCAL PARTNERS IN SEOUL
                        </p>
                    </div>
                </MotionSection>
            </div>
        </section>
    );
}
