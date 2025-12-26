'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { Language } from '@/lib/dictionary';

export default function Header() {
    const { t, language, setLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: scrolled ? '14px 60px' : '20px 60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(250, 247, 244, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(139, 115, 85, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
        }}>
            <a href="#" className="logo" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                letterSpacing: '2px',
                fontWeight: 600,
                color: 'var(--color-charcoal)',
            }}>CURATE SEOUL</a>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {['verify', 'timeline', 'benefits', 'reviews', 'contact'].map((key) => (
                        <a key={key} href={`#${key}`} style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'var(--text-medium)',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}>
                            {/* @ts-ignore */}
                            {t.nav[key]}
                        </a>
                    ))}
                </nav>

                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginLeft: '30px',
                    paddingLeft: '20px',
                    borderLeft: '1px solid #ddd',
                }}>
                    {(['en', 'ko', 'cn'] as Language[]).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            style={{
                                fontSize: '12px',
                                fontWeight: 600,
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                opacity: language === lang ? 1 : 0.5,
                                textDecoration: language === lang ? 'underline' : 'none',
                                textTransform: 'uppercase',
                                transition: 'opacity 0.3s',
                            }}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
