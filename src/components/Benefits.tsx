'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Benefits() {
    const { t } = useLanguage();
    useScrollAnimation();

    return (
        <section id="benefits" className="section">
            <div className="container">
                <div className="section-header scroll-animate">
                    <div className="section-tag">🎁 Member Benefits</div>
                    <h2 className="section-title">{t.benefits.title}</h2>
                    <p className="section-desc">{t.benefits.desc}</p>
                </div>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'
                }}>
                    {[
                        { icon: '🍖', title: t.benefits.item1_title, desc: t.benefits.item1_desc, value: '₩150,000' },
                        { icon: '☕', title: t.benefits.item2_title, desc: t.benefits.item2_desc, value: '₩30,000' },
                        { icon: '🎪', title: t.benefits.item3_title, desc: t.benefits.item3_desc, value: '₩100,000' },
                        { icon: '💆', title: t.benefits.item4_title, desc: t.benefits.item4_desc, value: '₩150,000', featured: true },
                    ].map((item, i) => (
                        <div key={i} className={`scroll-animate hover-scale delay-${(i + 1) * 100}`} style={{
                            background: item.featured ? 'linear-gradient(180deg, rgba(200, 169, 126, 0.08) 0%, white 100%)' : 'var(--bg-card)',
                            border: item.featured ? '2px solid var(--accent)' : '1px solid var(--border)',
                            borderRadius: '24px', padding: '32px 24px', textAlign: 'center',
                            boxShadow: 'var(--shadow)', position: 'relative'
                        }}>
                            {item.featured && (
                                <div style={{
                                    position: 'absolute', top: '12px', right: '12px',
                                    background: 'var(--accent)', color: 'white', padding: '4px 10px',
                                    borderRadius: '20px', fontSize: '10px', fontWeight: 700
                                }}>HOT</div>
                            )}
                            <div style={{ fontSize: '32px', marginBottom: '20px' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-dark)' }}>{item.title}</h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '16px', lineHeight: 1.6, minHeight: '40px' }}>
                                {item.desc}
                            </p>
                            <div style={{ background: 'var(--bg-soft)', borderRadius: '12px', padding: '14px' }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Value</div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent-dark)' }}>{item.value}+</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
