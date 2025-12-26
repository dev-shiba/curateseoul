'use client';

import { useLanguage } from './LanguageProvider';

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" style={{ padding: '120px 0', background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: '48px',
                        marginBottom: '24px',
                        color: 'var(--color-soft-black)'
                    }}>
                        {t.portfolio.title}
                    </h2>
                    <p style={{ color: '#666', fontWeight: 300 }}>{t.portfolio.desc}</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px'
                }}>
                    {/* Portfolio Item 1 */}
                    <div style={{ aspectRatio: '16/9', position: 'relative' }}>
                        <div className="placeholder-img">
                            <p>Portfolio 1: Clean Dermatology Clinic Interior. Warm lighting.</p>
                        </div>
                    </div>

                    {/* Portfolio Item 2 */}
                    <div style={{ aspectRatio: '16/9', position: 'relative' }}>
                        <div className="placeholder-img">
                            <p>Portfolio 2: Plastic Surgery Consultation. Professional atmosphere.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
