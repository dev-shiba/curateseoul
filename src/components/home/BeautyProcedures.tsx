"use client";

import Image from "next/image";
import Link from "next/link";

export default function BeautyProcedures() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl">
                        <Image
                            src="/images/hero.png" // Using the hero image as a placeholder for consistency
                            alt="Beauty Procedure"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black leading-tight font-noto">
                            Prosedur Kecantikan <br />
                            <span className="text-brand-gold">One-day di Seoul</span>
                        </h2>
                        <p className="text-text-medium text-lg leading-relaxed">
                            Nikmati perawatan kecantikan dengan harga terjangkau di Seoul.
                            Dari skin booster hingga laser treatment, kami menyediakan pilihan
                            terbaik yang bisa diselesaikan dalam satu hari perjalanan Anda.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 border border-brand-warm bg-brand-cream/30">
                                <div className="w-12 h-12 bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">01</div>
                                <div>
                                    <h4 className="font-bold">Skin Booster</h4>
                                    <p className="text-sm text-text-light">Hydrate and glow from within</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-brand-warm bg-brand-cream/30">
                                <div className="w-12 h-12 bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">02</div>
                                <div>
                                    <h4 className="font-bold">Mini Lifting</h4>
                                    <p className="text-sm text-text-light">Instant rejuvenation</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 border border-brand-warm bg-brand-cream/30">
                                <div className="w-12 h-12 bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">03</div>
                                <div>
                                    <h4 className="font-bold">Petite Surgery</h4>
                                    <p className="text-sm text-text-light">Subtle but effective changes</p>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="#procedures"
                            className="inline-block border-2 border-text-dark px-10 py-4 font-black uppercase tracking-widest hover:bg-text-dark hover:text-white transition-all mt-6"
                        >
                            See Detailed Procedures
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
