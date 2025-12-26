'use client';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--color-soft-black)',
            color: 'white',
            padding: '80px 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    letterSpacing: '2px',
                    marginBottom: '20px'
                }}>CURATE SEOUL</h2>
                <p style={{
                    opacity: 0.6,
                    fontSize: '13px',
                    letterSpacing: '0.5px'
                }}>
                    © 2025 Curate Seoul. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
