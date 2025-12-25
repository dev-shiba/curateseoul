"use client";

import Image from "next/image";
import Link from "next/link";

const clinics = [
    {
        id: 1,
        name: "Dream Plastic Surgery",
        location: "Every day, Every moment",
        image: "/images/clinic_1.png",
    },
    {
        id: 2,
        name: "Urban Plastic Surgery",
        location: "Every day, Every moment",
        image: "/images/clinic_2.png",
    },
    {
        id: 3,
        name: "Lienjang Plastic Surgery",
        location: "Every day, Every moment",
        image: "/images/clinic_3.png",
    },
];

export default function FeaturedClinics() {
    return (
        <section id="clinics" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black mb-4 font-noto">Our Partner Clinics</h2>
                        <p className="text-text-medium">Kunjungi klinik kami yang terpercaya</p>
                    </div>
                    <Link
                        href="/clinics"
                        className="border border-text-light px-8 py-3 text-sm font-bold text-text-medium hover:bg-gray-50 transition-all"
                    >
                        Browse all clinics
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clinics.map((clinic) => (
                        <div key={clinic.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden mb-6">
                                <Image
                                    src={clinic.image}
                                    alt={clinic.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-noto group-hover:text-brand-gold transition-colors">
                                {clinic.name}
                            </h3>
                            <p className="text-text-light text-sm mb-4">{clinic.location}</p>
                            <Link
                                href={`/clinics/${clinic.id}`}
                                className="text-xs font-black uppercase tracking-widest border-b-2 border-brand-gold pb-1 inline-block"
                            >
                                More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
