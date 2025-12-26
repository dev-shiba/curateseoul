'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observerRef.current?.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '50px', // Trigger slightly before comes into view
        });

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);
}
