import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../components/DarkModeContext';
import { useMenu } from '../components/MenuContext';

export default function NotFound() {
    const { isDarkMode } = useContext(DarkModeContext);
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        document.title = '404 | Jaun van Deventer';
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'About Me', link: '/jaunresume' },
            { label: 'Blog', link: '/blog' },
        ]);
        setMenuSocial({
            linkedin: 'https://www.linkedin.com/in/jaun-van-deventer-51314628a/',
            github: 'https://github.com/Jaun-van-Deventer',
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <>
            <style>{`
                .nf-page {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: var(--nav-height) var(--page-pad) 60px;
                    background: var(--bg);
                    font-family: var(--font-sans);
                    text-align: center;
                    transition: background var(--transition-slow);
                }
                .nf-page.dark { background: var(--bg-dark); }

                .nf-code {
                    font-family: var(--font-serif);
                    font-size: clamp(6rem, 20vw, 12rem);
                    line-height: 1;
                    color: var(--border);
                    margin-bottom: 0;
                    font-style: italic;
                    user-select: none;
                }
                .nf-page.dark .nf-code { color: var(--border-dark); }

                .nf-gold-line {
                    width: 60px;
                    height: 3px;
                    background: var(--gold);
                    border-radius: 2px;
                    margin: 16px auto 28px;
                }

                .nf-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(1.6rem, 4vw, 2.4rem);
                    color: var(--text);
                    margin-bottom: 12px;
                }
                .nf-page.dark .nf-heading { color: #f0ece3; }
                .nf-heading em { font-style: italic; color: var(--gold); }

                .nf-sub {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    max-width: 420px;
                    line-height: 1.65;
                    margin-bottom: 40px;
                }
                .nf-page.dark .nf-sub { color: var(--text-secondary-dark); }

                .nf-actions {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            `}</style>

            <div className={`nf-page${isDarkMode ? ' dark' : ''}`}>
                <div className="nf-code">404</div>
                <div className="nf-gold-line" />
                <h1 className="nf-heading">Page <em>not found</em></h1>
                <p className="nf-sub">
                    Looks like this page doesn&apos;t exist. It may have been moved, deleted, or you may have mistyped the URL.
                </p>
                <div className="nf-actions">
                    <Link to="/" className="btn-gold">← Back to Home</Link>
                    <Link to="/blog" className="btn-outline-gold">Read the Blog</Link>
                </div>
            </div>
        </>
    );
}