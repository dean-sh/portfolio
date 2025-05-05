import { useState, useEffect, RefObject } from 'react';

export function useIsInViewport(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state when observer callback fires
                setIsIntersecting(entry.isIntersecting);
            },
            {
                rootMargin: '0px',
                threshold: 0.1, // Element is considered visible when 10% is visible
            }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
} 