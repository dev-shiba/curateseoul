'use client';

import { useLanguage } from './LanguageProvider';

export default function CulturePreview() {
    const { t } = useLanguage();

    const programs = [
        {
            key: 'palace',
            title: t.culture.prog1_title,
            desc: t.culture.prog1_desc,
            alt: 'Night view of Gyeongbokgung Palace with soft lighting.'
        },
        {
            key: 'tea',
            title: t.culture.prog2_title,
            desc: t.culture.prog2_desc,
            alt: 'Close up of hands pouring tea in a traditional Hanok setting.'
        },
        {
            key: 'color',
            title: t.culture.prog3_title,
            desc: t.culture.prog3_desc,
            alt: 'Color swatches and fabric drapes for personal color analysis.'
        },
    ];

    return (
        <section id="culture" style={{ padding: '120px 0', background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '48px', marginBottom: '24px', color: 'var(--color-soft-black)' }}>
                        {t.culture.title}
                    </h2>
                    <p style={{ color: '#666', fontWeight: 300 }}>{t.culture.desc}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {programs.map((prog, idx) => (
                        <div key={idx} style={{ textAlign: 'left' }}>
                            <div style={{
                                aspectRatio: '4/5',
                                marginBottom: '24px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div className="placeholder-img" style={{ background: '#fafafa' }}>
                                    <p>{prog.alt}</p>
                                </div>
                            </div>
                            <h3 style={{ fontSize: '22px', marginBottom: '12px', fontWeight: 400 }}>{prog.title}</h3>
                            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{prog.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
