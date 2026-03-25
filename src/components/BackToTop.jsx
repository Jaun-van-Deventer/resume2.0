import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(document.documentElement.scrollTop > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <style>{`
                .btt-btn {
                    position: fixed;
                    bottom: 32px;
                    right: 28px;
                    z-index: 900;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: var(--gold);
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    box-shadow: 0 4px 16px rgba(176, 125, 74, 0.4);
                    opacity: 0;
                    transform: translateY(12px);
                    pointer-events: none;
                    transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
                }

                .btt-btn.visible {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: all;
                }

                .btt-btn:hover {
                    background: var(--gold-hover);
                    transform: translateY(-2px);
                }

                .btt-btn.visible:hover {
                    transform: translateY(-2px);
                }
            `}</style>

            <button
                className={`btt-btn${visible ? ' visible' : ''}`}
                onClick={scrollUp}
                aria-label="Back to top"
                title="Back to top"
            >
                ↑
            </button>
        </>
    );
}