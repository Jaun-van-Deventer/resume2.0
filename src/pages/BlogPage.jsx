import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData } from '../lib/posts';
import { useMenu } from '../components/MenuContext';
import { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext';
import usePageMeta from '../hooks/usePageMeta';

// Skeleton card shown while loading
function SkeletonCard() {
    return (
        <div className="bp-card bp-skeleton">
            <div className="bp-card-image-wrap bp-skel-block" />
            <div className="bp-card-body">
                <div className="bp-skel-line bp-skel-title" />
                <div className="bp-skel-line bp-skel-date" />
                <div className="bp-skel-line" />
                <div className="bp-skel-line bp-skel-short" />
                <div className="bp-skel-btn" />
            </div>
        </div>
    );
}

export default function BlogPage() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getSortedPostsData();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
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

    const filtered = posts.filter(
        (p) =>
            p.title?.toLowerCase().includes(search.toLowerCase()) ||
            p.excerpt?.toLowerCase().includes(search.toLowerCase())
    );

    usePageMeta('Blog');

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

                .bp-page {
                    min-height: 100vh;
                    padding-top: 80px;
                    padding-bottom: 60px;
                    font-family: 'DM Sans', sans-serif;
                    background: #f4f1ec;
                    transition: background 0.4s ease, color 0.4s ease;
                }

                .bp-page.dark {
                    background: #111114;
                    color: #e8e4dc;
                }

                /* Hero */
                .bp-hero {
                    max-width: 860px;
                    margin: 0 auto 56px;
                    padding: 0 24px;
                    text-align: center;
                }

                .bp-hero-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 12px;
                }

                .bp-hero h1 {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(2.4rem, 6vw, 4rem);
                    line-height: 1.1;
                    margin: 0 0 20px;
                    color: #1a1208;
                }

                .bp-page.dark .bp-hero h1 {
                    color: #f0ece3;
                }

                .bp-hero-sub {
                    font-size: 1.05rem;
                    color: #7a6f60;
                    margin-bottom: 32px;
                    line-height: 1.6;
                }

                .bp-page.dark .bp-hero-sub {
                    color: #9e9788;
                }

                /* Search */
                .bp-search-wrap {
                    position: relative;
                    max-width: 480px;
                    margin: 0 auto;
                }

                .bp-search-wrap svg {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #b07d4a;
                    pointer-events: none;
                }

                .bp-search {
                    width: 100%;
                    padding: 12px 16px 12px 42px;
                    border-radius: 8px;
                    border: 2px solid #d9d0c0;
                    background: #fff;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.95rem;
                    color: #1a1208;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                }

                .bp-search:focus {
                    border-color: #b07d4a;
                    box-shadow: 0 0 0 3px rgba(176,125,74,0.15);
                }

                .bp-page.dark .bp-search {
                    background: #1e1e24;
                    border-color: #333;
                    color: #e8e4dc;
                }

                .bp-page.dark .bp-search:focus {
                    border-color: #c9954f;
                }

                /* Divider */
                .bp-divider {
                    max-width: 1200px;
                    margin: 0 auto 40px;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .bp-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #d9d0c0;
                }

                .bp-page.dark .bp-divider-line {
                    background: #2a2a30;
                }

                .bp-divider-count {
                    font-size: 0.8rem;
                    color: #9e9788;
                    white-space: nowrap;
                    font-weight: 500;
                }

                /* Grid */
                .bp-grid {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 28px;
                }

                /* Card */
                .bp-card {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #e6dfd3;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    display: flex;
                    flex-direction: column;
                }

                .bp-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.10);
                }

                .bp-page.dark .bp-card {
                    background: #1a1a20;
                    border-color: #2a2a32;
                }

                .bp-card-image-wrap {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #e6dfd3;
                }

                .bp-page.dark .bp-card-image-wrap {
                    background: #252530;
                }

                .bp-card-image-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                    display: block;
                }

                .bp-card:hover .bp-card-image-wrap img {
                    transform: scale(1.04);
                }

                .bp-card-body {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .bp-card-date {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 8px;
                }

                .bp-card-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.25rem;
                    line-height: 1.3;
                    color: #1a1208;
                    margin: 0 0 10px;
                }

                .bp-page.dark .bp-card-title {
                    color: #f0ece3;
                }

                .bp-card-excerpt {
                    font-size: 0.9rem;
                    line-height: 1.65;
                    color: #6b6257;
                    margin-bottom: 20px;
                    flex: 1;
                }

                .bp-page.dark .bp-card-excerpt {
                    color: #9e9788;
                }

                .bp-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #b07d4a;
                    text-decoration: none;
                    letter-spacing: 0.04em;
                    transition: gap 0.2s ease, color 0.2s ease;
                }

                .bp-card-link:hover {
                    gap: 10px;
                    color: #8a5d2e;
                }

                .bp-page.dark .bp-card-link:hover {
                    color: #d4a86a;
                }

                /* Empty state */
                .bp-empty {
                    text-align: center;
                    padding: 60px 24px;
                    color: #9e9788;
                    font-size: 1rem;
                    grid-column: 1 / -1;
                }

                .bp-empty-icon {
                    font-size: 2.5rem;
                    margin-bottom: 12px;
                }

                /* Error */
                .bp-error {
                    text-align: center;
                    padding: 60px 24px;
                    color: #c0392b;
                }

                /* Skeleton */
                .bp-skeleton {
                    pointer-events: none;
                }

                .bp-skel-block, .bp-skel-line, .bp-skel-btn {
                    background: linear-gradient(90deg, #e6dfd3 25%, #f0ebe2 50%, #e6dfd3 75%);
                    background-size: 200% 100%;
                    animation: bp-shimmer 1.4s infinite;
                    border-radius: 4px;
                }

                .bp-page.dark .bp-skel-block,
                .bp-page.dark .bp-skel-line,
                .bp-page.dark .bp-skel-btn {
                    background: linear-gradient(90deg, #252530 25%, #2e2e3a 50%, #252530 75%);
                    background-size: 200% 100%;
                    animation: bp-shimmer 1.4s infinite;
                }

                @keyframes bp-shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                .bp-skel-block { height: 200px; border-radius: 0; }
                .bp-skel-line { height: 14px; margin-bottom: 10px; width: 100%; }
                .bp-skel-title { height: 20px; width: 80%; }
                .bp-skel-date { width: 40%; }
                .bp-skel-short { width: 60%; }
                .bp-skel-btn { height: 16px; width: 100px; margin-top: 12px; }
            `}</style>

            <div className={`bp-page${isDarkMode ? ' dark' : ''}`}>
                {/* Hero */}
                <div className="bp-hero">
                    <p className="bp-hero-eyebrow">Jaun van Deventer</p>
                    <h1>Thoughts & Writing</h1>
                    <p className="bp-hero-sub">
                        Articles on development, tools, and the tech industry — written from a self-taught developer&apos;s perspective.
                    </p>
                    <div className="bp-search-wrap">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                        <input
                            className="bp-search"
                            type="text"
                            placeholder="Search articles..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Post count divider */}
                {!loading && !error && (
                    <div className="bp-divider">
                        <div className="bp-divider-line" />
                        <span className="bp-divider-count">
                            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
                        </span>
                        <div className="bp-divider-line" />
                    </div>
                )}

                {/* Grid */}
                <div className="bp-grid">
                    {error && (
                        <div className="bp-error">Failed to load posts: {error}</div>
                    )}

                    {loading && !error && (
                        Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                    )}

                    {!loading && !error && filtered.length === 0 && (
                        <div className="bp-empty">
                            <div className="bp-empty-icon">🔍</div>
                            No articles match &quot;{search}&quot;
                        </div>
                    )}

                    {!loading && !error && filtered.map((post) => (
                        <div key={post.id} className="bp-card">
                            <div className="bp-card-image-wrap">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="bp-card-body">
                                <p className="bp-card-date">{post.date}</p>
                                <h2 className="bp-card-title">{post.title}</h2>
                                <p className="bp-card-excerpt">{post.excerpt}</p>
                                <Link to={`/blog/${post.id}`} className="bp-card-link">
                                    Read article →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}