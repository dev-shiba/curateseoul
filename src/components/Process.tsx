'use client';

import { useLanguage } from './LanguageProvider';

export default function Process() {
    const { t } = useLanguage();

    const steps = [
        { number: '01', title: t.process.step1_title, desc: t.process.step1_desc },
        { number: '02', title: t.process.step2_title, desc: t.process.step2_desc },
        { number: '03', title: t.process.step3_title, desc: t.process.step3_desc },
    ];

    return (
        <section id="process" style={{ padding: '120px 0', background: 'var(--color-soft-black)', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        color: 'var(--color-gold)',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '20px'
                    }}>Process</div>
                    <h2 style={{ fontSize: '48px', marginBottom: '24px', fontWeight: 300, color: 'white' }}>
                        {t.process.title}
                    </h2>
                    <p style={{ opacity: 0.7, fontWeight: 300 }}>{t.process.desc}</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '60px',
                    position: 'relative'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                margin: '0 auto 32px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-display)',
                                fontSize: '32px',
                                color: 'var(--color-gold)'
                            }}>
                                {step.number}
                            </div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 400 }}>{step.title}</h3>
                            <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.6, fontWeight: 300 }}>{step.desc}</p>
                        </div>
                    ))}

                    {/* Connector Line */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '15%',
                        right: '15%',
                        height: '1px',
                        background: 'rgba(255,255,255,0.1)',
                        zIndex: 1
                    }}></div>
                </div>
            </div>
        </section>
    );
}
