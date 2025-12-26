'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VerifySteps() {
    const { t } = useLanguage();
    useScrollAnimation();

    return (
        <section id="verify" className="section">
            <div className="container scroll-animate">
                <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: '28px',
                    padding: '40px 32px',
                    maxWidth: '900px',
                    margin: '0 auto',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid var(--accent)'
                }}>

                    <div style={{
                        width: '80px', height: '80px', background: 'var(--accent-soft)',
                        border: '2px solid var(--accent)', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '36px', margin: '0 auto 24px'
                    }}>✈️</div>

                    <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-dark)' }}>
                        {t.verify.title}
                    </h2>
                    <p style={{ fontSize: '18px', color: 'var(--text-medium)', marginBottom: '40px', lineHeight: 1.7 }}>
                        {t.verify.subtitle}
                    </p>

                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '20px', marginBottom: '40px', flexWrap: 'wrap'
                    }}>
                        <div className="verify-step scroll-animate delay-100" style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            background: 'var(--bg-soft)', border: '1px solid var(--border)',
                            padding: '16px 24px', borderRadius: '16px', boxShadow: 'var(--shadow)'
                        }}>
                            <div style={{ fontSize: '28px' }}>📱</div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', textTransform: 'uppercase' }}>STEP 1</div>
                                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)' }}>{t.verify.step1}</div>
                            </div>
                        </div>

                        <div style={{ fontSize: '24px', color: 'var(--accent)' }}>➡</div>

                        <div className="verify-step scroll-animate delay-200" style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            background: 'var(--bg-soft)', border: '1px solid var(--border)',
                            padding: '16px 24px', borderRadius: '16px', boxShadow: 'var(--shadow)'
                        }}>
                            <div style={{ fontSize: '28px' }}>💬</div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', textTransform: 'uppercase' }}>STEP 2</div>
                                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)' }}>{t.verify.step2}</div>
                            </div>
                        </div>

                        <div style={{ fontSize: '24px', color: 'var(--accent)' }}>➡</div>

                        <div className="verify-step scroll-animate delay-300" style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            background: 'var(--bg-soft)', border: '1px solid var(--border)',
                            padding: '16px 24px', borderRadius: '16px', boxShadow: 'var(--shadow)'
                        }}>
                            <div style={{ fontSize: '28px' }}>🎁</div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', textTransform: 'uppercase' }}>STEP 3</div>
                                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)' }}>{t.verify.step3}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'
                    }}>
                        {[
                            { icon: '🍖', text: t.verify.benefit1 },
                            { icon: '💆', text: t.verify.benefit2 },
                            { icon: '🏥', text: t.verify.benefit3 },
                            { icon: '🎪', text: t.verify.benefit4 }
                        ].map((item, i) => (
                            <div key={i} className={`scroll-animate hover-scale delay-${(i + 1) * 100}`} style={{
                                background: 'var(--bg-soft)', border: '1px solid var(--border)',
                                borderRadius: '16px', padding: '24px 16px', textAlign: 'center',
                                transition: 'transform 0.3sEase'
                            }}>
                                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)' }}>{item.text}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
