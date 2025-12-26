'use client';

import { useLanguage } from './LanguageProvider';

export default function Stats() {
    const { t } = useLanguage();

    return (
        <section style={{
            padding: '80px 0',
            background: 'white',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px',
                textAlign: 'center'
            }}>
                {/* Stat 1 */}
                <div className="stat-item">
                    <div style={{
                        fontSize: '56px',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-gold)',
                        marginBottom: '10px'
                    }}>98%</div>
                    <div style={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#666'
                    }}>{t.stats.satisfaction}</div>
                </div>

                {/* Stat 2 */}
                <div className="stat-item">
                    <div style={{
                        fontSize: '56px',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-gold)',
                        marginBottom: '10px'
                    }}>50+</div>
                    <div style={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#666'
                    }}>{t.stats.partners}</div>
                </div>

                {/* Stat 3 */}
                <div className="stat-item">
                    <div style={{
                        fontSize: '56px',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-gold)',
                        marginBottom: '10px'
                    }}>5,000+</div>
                    <div style={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#666'
                    }}>{t.stats.travelers}</div>
                </div>
            </div>
        </section>
    );
}
