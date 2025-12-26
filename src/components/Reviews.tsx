'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Reviews() {
    const { t } = useLanguage();
    useScrollAnimation();

    return (
        <section id="reviews" className="section">
            <div className="container">
                <div className="section-header scroll-animate">
                    <div className="section-tag">⭐ Real Reviews</div>
                    <h2 className="section-title">{t.reviews.title}</h2>
                    <p className="section-desc">{t.reviews.desc}</p>
                </div>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
                }}>
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className={`scroll-animate hover-scale delay-${(i + 1) * 100}`} style={{
                            background: 'var(--bg-card)', border: '1px solid var(--border)',
                            borderRadius: '24px', overflow: 'hidden',
                            boxShadow: 'var(--shadow)', transition: 'all 0.3s'
                        }}>
                            {/* Image Grid in Card */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', height: '120px' }}>
                                {[1, 2, 3].map((j) => (
                                    <div key={j} className="placeholder-img" style={{ height: '100%', background: '#eee' }}>IMG</div>
                                ))}
                            </div>

                            <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: 'var(--accent-soft)', border: '2px solid var(--accent-light)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>😊</div>
                                    <div>
                                        <h4 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: 'var(--text-dark)' }}>{t.reviews[`user${i + 1}`] || 'User'}</h4>
                                        <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>Verified Member</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                                    {[1, 2, 3, 4, 5].map(star => <span key={star} style={{ color: 'var(--accent)', fontSize: '14px' }}>★</span>)}
                                </div>

                                <p style={{ fontSize: '14px', color: 'var(--text-medium)', lineHeight: 1.7, marginBottom: '16px' }}>
                                    {t.reviews[`review${i + 1}`]}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {(t.reviews[`tags${i + 1}`] || []).map((tag: string, idx: number) => (
                                        <span key={idx} style={{
                                            background: 'var(--accent-soft)', color: 'var(--accent-dark)',
                                            padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600
                                        }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
