'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
    const { t } = useLanguage();
    useScrollAnimation();

    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '100px 0 60px',
            background: 'linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-warm) 100%)',
            position: 'relative'
        }}>
            <div className="container" style={{
                display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px',
                gap: '40px', alignItems: 'center'
            }}>
                {/* Text Content */}
                <div>
                    <div className="scroll-animate" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'var(--accent-soft)', border: '1px solid var(--accent-light)',
                        padding: '10px 20px', borderRadius: '50px',
                        fontSize: '13px', fontWeight: 700, color: 'var(--accent-dark)',
                        marginBottom: '24px'
                    }}>
                        ✈️ {t.hero.tag}
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(48px, 7vw, 76px)', fontWeight: 800,
                        lineHeight: 1.1, marginBottom: '28px', whiteSpace: 'pre-line',
                        wordBreak: 'keep-all' // Prevent mid-word breaks
                    }}>
                        {t.hero.title}
                    </h1>

                    <div style={{
                        fontSize: '20px', color: 'var(--text-medium)', marginBottom: '48px', lineHeight: 1.6,
                        wordBreak: 'keep-all' // Prevent mid-word breaks
                    }}>
                        <span style={{ color: 'var(--text-dark)', fontWeight: 700, display: 'block', marginBottom: '8px', fontSize: '22px' }}>
                            {t.hero.desc_bold}
                        </span>
                        {t.hero.desc}
                    </div>

                    <div style={{ display: 'flex', gap: '48px' }}>
                        {[
                            { val: t.hero.stat1_val, lbl: t.hero.stat1_lbl },
                            { val: t.hero.stat2_val, lbl: t.hero.stat2_lbl },
                            { val: t.hero.stat3_val, lbl: t.hero.stat3_lbl },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-dark)', marginBottom: '4px' }}>
                                    {stat.val}
                                </div>
                                <div style={{ fontSize: '15px', color: 'var(--text-medium)', fontWeight: 500 }}>
                                    {stat.lbl}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact/Action Card */}
                <div className="scroll-animate delay-200 hover-scale" style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: '24px', padding: '36px 32px', textAlign: 'center',
                    boxShadow: 'var(--shadow-lg)', position: 'relative',
                    transition: 'transform 0.3s ease'
                }}>
                    <div style={{
                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                        background: 'var(--red)', color: 'white', padding: '8px 20px',
                        borderRadius: '50px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap'
                    }}>
                        {t.hero.card_badge}
                    </div>

                    <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '16px 0 8px', color: 'var(--text-dark)' }}>
                        {t.hero.card_title}
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '24px' }}>
                        {t.hero.card_sub}
                    </p>

                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                        background: 'var(--bg-soft)', padding: '14px 20px', borderRadius: '12px', marginBottom: '20px'
                    }}>
                        <span style={{ fontSize: '13px', color: 'var(--text-light)' }}>ID</span>
                        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 700, color: 'var(--accent-dark)' }}>CurateSeoul</span>
                    </div>

                    <button style={{
                        width: '100%', padding: '16px', borderRadius: '14px',
                        background: 'var(--kakao)', color: 'var(--kakao-text)',
                        border: 'none', fontSize: '16px', fontWeight: 700, cursor: 'pointer'
                    }}>
                        {t.hero.btn_kakao}
                    </button>

                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px' }}>24/7 Response</p>
                </div>
            </div>
        </section>
    );
}
