'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Shortform() {
    const { t } = useLanguage();
    useScrollAnimation();

    return (
        <section className="section section-alt">
            <div className="container">
                <div className="section-header scroll-animate">
                    <div className="section-tag">▶ Members Vlog</div>
                    <h2 className="section-title">{t.shortform.title}</h2>
                    <p className="section-desc">{t.shortform.desc}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {[
                        { tag: t.timeline.tag_food, views: '12.3K', title: 'Hanwoo Omakase', user: '@foodie_kim' },
                        { tag: 'K-Beauty', views: '8.7K', title: 'Gangnam Facial', user: '@beauty_guru' },
                        { tag: t.timeline.tag_cafe, views: '15.2K', title: 'Seongsu Cafe', user: '@travel_vlog' },
                        { tag: t.timeline.tag_popup, views: '9.4K', title: 'No Waiting Popup', user: '@trendy_seoul' },
                    ].map((item, i) => (
                        <div key={i} className={`scroll-animate hover-scale delay-${(i + 1) * 100}`} style={{
                            position: 'relative', aspectRatio: '9/16', borderRadius: '24px', overflow: 'hidden',
                            background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)',
                            cursor: 'pointer'
                        }}>
                            <div className="placeholder-img" style={{ height: '100%', background: '#ccc' }}>
                                Thumbnail
                            </div>
                            <div style={{
                                position: 'absolute', top: '12px', left: '12px',
                                background: 'var(--accent)', color: 'white', padding: '6px 12px',
                                borderRadius: '20px', fontSize: '11px', fontWeight: 700
                            }}>{item.tag}</div>

                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }}>
                                <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>{item.user}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
