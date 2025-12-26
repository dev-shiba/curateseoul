'use client';

import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Timeline() {
    const { t } = useLanguage();
    useScrollAnimation();

    return (
        <section id="timeline" className="section" style={{
            background: 'linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-warm) 100%)',
            position: 'relative'
        }}>
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">☀️ Perfect Day</div>
                    <h2 className="section-title">{t.timeline.title}</h2>
                    <p className="section-desc">{t.timeline.desc}</p>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute', top: '0', bottom: '0', left: '50%', transform: 'translateX(-50%)',
                        width: '2px', background: 'var(--accent-light)', opacity: 0.5
                    }}></div>

                    {[
                        { time: '09:00', title: t.timeline.item1_title, desc: t.timeline.item1_desc, tag: t.timeline.tag_cafe, save: '₩15,000' },
                        { time: '11:00', title: t.timeline.item2_title, desc: t.timeline.item2_desc, tag: 'K-Beauty', save: '₩150,000' },
                        { time: '13:30', title: t.timeline.item3_title, desc: t.timeline.item3_desc, tag: t.timeline.tag_food, save: '₩50,000' },
                        { time: '16:00', title: t.timeline.item4_title, desc: t.timeline.item4_desc, tag: t.timeline.tag_popup, save: '₩30,000' },
                        { time: '19:00', title: t.timeline.item5_title, desc: t.timeline.item5_desc, tag: t.timeline.tag_fine, save: '₩80,000' },
                        { time: '21:00', title: t.timeline.item6_title, desc: t.timeline.item6_desc, tag: t.timeline.tag_night, save: '₩30,000' },
                    ].map((item, i) => (
                        <div key={i} className="scroll-animate" style={{
                            display: 'flex',
                            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            marginBottom: '32px',
                            position: 'relative'
                        }}>
                            {/* Content Box */}
                            <div style={{
                                width: '45%',
                                background: 'var(--bg-card)', border: '1px solid var(--border)',
                                borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow)',
                                padding: '24px', zIndex: 2
                            }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    background: 'var(--accent)', color: 'white',
                                    padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: 700,
                                    marginBottom: '12px'
                                }}>
                                    {item.time}
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-medium)', lineHeight: 1.6, marginBottom: '12px' }}>
                                    {item.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                                        {item.tag}
                                    </span>
                                    <span style={{ background: 'var(--green-soft)', color: 'var(--green)', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                                        Save {item.save}
                                    </span>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div style={{
                                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                                width: '16px', height: '16px', background: 'var(--accent)',
                                borderRadius: '50%', border: '4px solid var(--bg-foam)', zIndex: 2
                            }}></div>

                            <div style={{ width: '45%' }}></div>
                        </div>
                    ))}

                </div>

                <div style={{
                    background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
                    padding: '28px', textAlign: 'center', marginTop: '48px', borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(200, 169, 126, 0.3)', maxWidth: '500px', margin: '48px auto 0'
                }}>
                    <h3 style={{ color: 'white', fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>Total Daily Savings</h3>
                    <div style={{ color: 'white', fontSize: '36px', fontWeight: 900 }}>₩355,000+</div>
                </div>
            </div>
        </section>
    );
}
