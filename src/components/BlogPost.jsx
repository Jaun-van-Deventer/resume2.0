import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostData } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { useMenu } from '../components/MenuContext';
import { DarkModeContext } from '../components/DarkModeContext';

export default function BlogPost() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const d = isDarkMode;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPostData(id);
                setPost(postData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    useEffect(() => {
        setMenuTitle("Jaun");
        setMenuItems([
            { label: "Home", link: "/" },
            { label: "Certificates", link: "/jauncert" },
            { label: "Projects", link: "/jaunprojects" },
            { label: "About Me", link: "/jaunresume" },
            { label: "Blog", link: "/blog" }
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer",
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

                .bpost-page {
                    min-height: 100vh;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    font-family: 'DM Sans', sans-serif;
                    background: #f4f1ec;
                    color: #1a1208;
                    transition: background 0.4s ease, color 0.4s ease;
                }
                .bpost-page.dark {
                    background: #111114;
                    color: #e8e4dc;
                }

                /* ── Loading / Error ── */
                .bpost-state {
                    max-width: 680px;
                    margin: 80px auto;
                    padding: 0 24px;
                    text-align: center;
                    color: #9e9788;
                    font-size: 1rem;
                }
                .bpost-state.error { color: #c0392b; }

                /* ── Hero image ── */
                .bpost-cover-wrap {
                    width: 100%;
                    max-height: 480px;
                    overflow: hidden;
                    position: relative;
                    margin-bottom: 0;
                }
                .bpost-cover-wrap::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 200px;
                    background: linear-gradient(to bottom, transparent, #f4f1ec);
                    pointer-events: none;
                }
                .bpost-page.dark .bpost-cover-wrap::after {
                    background: linear-gradient(to bottom, transparent, #111114);
                }
                .bpost-cover {
                    width: 100%;
                    height: 480px;
                    object-fit: cover;
                    display: block;
                    filter: grayscale(10%);
                }

                /* ── Article container ── */
                .bpost-article {
                    max-width: 720px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* ── Back link ── */
                .bpost-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #b07d4a;
                    text-decoration: none;
                    letter-spacing: 0.04em;
                    margin-bottom: 32px;
                    margin-top: 40px;
                    transition: gap 0.2s ease, color 0.2s ease;
                }
                .bpost-back:hover { gap: 10px; color: #8a5d2e; }

                /* ── Meta ── */
                .bpost-meta {
                    margin-bottom: 12px;
                }
                .bpost-date {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                }

                /* ── Title ── */
                .bpost-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    line-height: 1.15;
                    color: #1a1208;
                    margin: 8px 0 32px;
                }
                .bpost-page.dark .bpost-title { color: #f0ece3; }

                /* ── Divider ── */
                .bpost-divider {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 40px;
                }
                .bpost-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #d9d0c0;
                }
                .bpost-page.dark .bpost-divider-line { background: #2a2a30; }
                .bpost-divider-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #b07d4a;
                }

                /* ── Prose ── */
                .bpost-prose {
                    font-size: 1.05rem;
                    line-height: 1.85;
                    color: #4a3f30;
                }
                .bpost-page.dark .bpost-prose { color: #c8c0b0; }

                .bpost-prose h1,
                .bpost-prose h2,
                .bpost-prose h3,
                .bpost-prose h4 {
                    font-family: 'DM Serif Display', serif;
                    color: #1a1208;
                    margin-top: 2em;
                    margin-bottom: 0.5em;
                    line-height: 1.2;
                }
                .bpost-page.dark .bpost-prose h1,
                .bpost-page.dark .bpost-prose h2,
                .bpost-page.dark .bpost-prose h3,
                .bpost-page.dark .bpost-prose h4 {
                    color: #f0ece3;
                }
                .bpost-prose h2 { font-size: 1.8rem; }
                .bpost-prose h3 { font-size: 1.4rem; }

                .bpost-prose p { margin-bottom: 1.4em; }

                .bpost-prose a {
                    color: #b07d4a;
                    text-decoration: underline;
                    text-decoration-color: rgba(176,125,74,0.4);
                    text-underline-offset: 3px;
                    transition: color 0.2s;
                }
                .bpost-prose a:hover { color: #8a5d2e; }

                .bpost-prose strong { color: #b07d4a; font-weight: 600; }

                .bpost-prose blockquote {
                    border-left: 3px solid #b07d4a;
                    margin: 2em 0;
                    padding: 16px 24px;
                    background: rgba(176,125,74,0.06);
                    border-radius: 0 8px 8px 0;
                    font-style: italic;
                    color: #6b6257;
                }
                .bpost-page.dark .bpost-prose blockquote {
                    background: rgba(176,125,74,0.08);
                    color: #9e9788;
                }

                .bpost-prose code {
                    background: rgba(176,125,74,0.1);
                    color: #8a5d2e;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 0.9em;
                    font-family: 'Fira Code', 'Courier New', monospace;
                }
                .bpost-page.dark .bpost-prose code {
                    background: rgba(176,125,74,0.12);
                    color: #d4a86a;
                }

                .bpost-prose pre {
                    background: #1a1208;
                    color: #e8e4dc;
                    border-radius: 10px;
                    padding: 24px;
                    overflow-x: auto;
                    margin: 1.5em 0;
                    font-size: 0.9em;
                }
                .bpost-page.dark .bpost-prose pre {
                    background: #0a0a0d;
                    border: 1px solid #2a2a32;
                }
                .bpost-prose pre code {
                    background: transparent;
                    color: inherit;
                    padding: 0;
                }

                .bpost-prose ul, .bpost-prose ol {
                    padding-left: 1.5em;
                    margin-bottom: 1.4em;
                }
                .bpost-prose li { margin-bottom: 0.4em; }

                .bpost-prose img {
                    max-width: 100%;
                    border-radius: 10px;
                    margin: 1.5em 0;
                }

                .bpost-prose hr {
                    border: none;
                    height: 1px;
                    background: #d9d0c0;
                    margin: 2.5em 0;
                }
                .bpost-page.dark .bpost-prose hr { background: #2a2a30; }

                .bpost-prose table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5em 0;
                    font-size: 0.92em;
                }
                .bpost-prose th {
                    background: rgba(176,125,74,0.1);
                    color: #b07d4a;
                    padding: 10px 14px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 0.8em;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    border-bottom: 2px solid rgba(176,125,74,0.2);
                }
                .bpost-prose td {
                    padding: 10px 14px;
                    border-bottom: 1px solid #e6dfd3;
                    color: #6b6257;
                }
                .bpost-page.dark .bpost-prose td {
                    border-bottom-color: #252530;
                    color: #9e9788;
                }

                /* ── Footer ── */
                .bpost-footer {
                    background: #0f0d0a;
                    color: #9e9788;
                    text-align: center;
                    padding: 32px 24px;
                    font-size: 0.85rem;
                    border-top: 1px solid rgba(176,125,74,0.12);
                    margin-top: 80px;
                }
                .bpost-footer span { color: #b07d4a; }
                .bpost-footer-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: #b07d4a;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-top: 8px;
                    transition: gap 0.2s;
                }
                .bpost-footer-back:hover { gap: 10px; color: #d4a86a; }
            `}</style>

            <div className={`bpost-page${d ? ' dark' : ''}`}>
                {loading && (
                    <div className="bpost-state">Loading article…</div>
                )}
                {error && (
                    <div className="bpost-state error">Error: {error}</div>
                )}

                {!loading && !error && post && (
                    <>
                        {/* Cover image */}
                        {post.image && (
                            <div className="bpost-cover-wrap">
                                <img src={post.image} alt={post.title} className="bpost-cover" />
                            </div>
                        )}

                        <div className="bpost-article">
                            <Link to="/blog" className="bpost-back">← Back to Blog</Link>

                            <div className="bpost-meta">
                                <span className="bpost-date">{post.date}</span>
                            </div>

                            <h1 className="bpost-title">{post.title}</h1>

                            <div className="bpost-divider">
                                <div className="bpost-divider-line" />
                                <div className="bpost-divider-dot" />
                                <div className="bpost-divider-line" />
                            </div>

                            <div className="bpost-prose">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                            </div>
                        </div>
                    </>
                )}

                <footer className="bpost-footer">
                    <p style={{ margin: 0 }}>© 2025 <span>Jaun van Deventer</span>. All rights reserved.</p>
                    <Link to="/blog" className="bpost-footer-back">← More articles</Link>
                </footer>
            </div>
        </>
    );
}