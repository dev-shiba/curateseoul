'use client';

import { useLanguage } from './LanguageProvider';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" style={{
            padding: '100px 0',
            background: 'var(--bg-warm)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Gradient Orb */}
            <div style={{
                position: 'absolute', top: -100, right: -100,
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
                opacity: 0.3, filter: 'blur(80px)', pointerEvents: 'none'
            }} />

            <div className="container" style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
                <div className="section-header">
                    <span className="section-tag">CONTACT US</span>
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p className="section-desc">{t.contact.desc}</p>
                </div>

                <form className="scroll-animate delay-100" style={{
                    background: 'var(--bg-card)',
                    padding: '48px',
                    borderRadius: '28px',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.8)'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-medium)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {t.contact.name}
                        </label>
                        <input type="text" style={{
                            width: '100%',
                            padding: '16px 20px',
                            borderRadius: '16px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-cream)',
                            fontSize: '16px',
                            transition: 'all 0.2s ease',
                            outline: 'none',
                            color: 'var(--text-dark)'
                        }}
                            className="hover-bright"
                            placeholder="Your Name"
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-medium)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {t.contact.email}
                        </label>
                        <input type="email" style={{
                            width: '100%',
                            padding: '16px 20px',
                            borderRadius: '16px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-cream)',
                            fontSize: '16px',
                            transition: 'all 0.2s ease',
                            outline: 'none',
                            color: 'var(--text-dark)'
                        }}
                            className="hover-bright"
                            placeholder="hello@example.com"
                        />
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-medium)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {t.contact.message}
                        </label>
                        <textarea rows={4} style={{
                            width: '100%',
                            padding: '16px 20px',
                            borderRadius: '16px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-cream)',
                            fontSize: '16px',
                            transition: 'all 0.2s ease',
                            outline: 'none',
                            color: 'var(--text-dark)',
                            resize: 'none',
                            fontFamily: 'inherit'
                        }}
                            className="hover-bright"
                            placeholder="How can we help you?"
                        />
                    </div>

                    <button type="submit" className="hover-scale" style={{
                        width: '100%',
                        padding: '20px',
                        background: 'var(--text-dark)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '16px',
                        fontSize: '16px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}>
                        {t.contact.submit}
                    </button>
                </form>
            </div>
        </section>
    );
}
