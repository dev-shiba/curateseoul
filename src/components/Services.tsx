'use client';

import { useLanguage } from './LanguageProvider';

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: 'marketing',
            icon: '📈',
            title: t.services.marketing,
            desc: t.services.marketing_desc
        },
        {
            id: 'concierge',
            icon: '🏥',
            title: t.services.concierge,
            desc: t.services.concierge_desc
        },
        {
            id: 'consulting',
            icon: '🤝',
            title: t.services.consulting,
            desc: t.services.consulting_desc
        }
    ];

    return (
        <section id="services" style={{ padding: '120px 0', background: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
                    <div style={{
                        fontSize: '11px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: 'var(--color-taupe)',
                        marginBottom: '20px'
                    }}>
                        Services
                    </div>
                    <h2 style={{
                        fontSize: '48px',
                        marginBottom: '24px',
                        color: 'var(--color-soft-black)'
                    }}>
                        {t.services.title}
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: 1.8,
                        color: '#666',
                        fontWeight: 300
                    }}>
                        {t.services.desc}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '40px'
                }}>
                    {services.map((service) => (
                        <div key={service.id} style={{
                            padding: '48px 32px',
                            background: 'white',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                            transition: 'transform 0.4s ease',
                            cursor: 'default'
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                margin: '0 auto 24px',
                                background: 'rgba(139, 115, 85, 0.08)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: 400,
                                marginBottom: '16px',
                                color: 'var(--color-soft-black)'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                lineHeight: 1.7,
                                color: '#666',
                                fontWeight: 300
                            }}>
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
