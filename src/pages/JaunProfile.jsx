import { useEffect, useState, useContext } from "react";
import { useMenu } from "../components/MenuContext";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../components/DarkModeContext";
import { getSortedPostsData } from "../lib/posts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import jaunImage from "/assets/jaun.jpg";

function JaunProfile() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const posts = await getSortedPostsData();
                setBlogPosts(posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogPosts();
    }, []);

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

    const d = isDarkMode;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

                .jp-page {
                    min-height: 100vh;
                    font-family: 'DM Sans', sans-serif;
                    background: #f4f1ec;
                    color: #1a1208;
                    transition: background 0.4s ease, color 0.4s ease;
                }

                .jp-page.dark {
                    background: #111114;
                    color: #e8e4dc;
                }

                /* ── Hero ── */
                .jp-hero {
                    min-height: 100vh;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: relative;
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .jp-hero { grid-template-columns: 1fr; }
                    .jp-hero-image-col { display: none; }
                }

                .jp-hero-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 120px 60px 80px;
                    position: relative;
                    z-index: 1;
                }

                .jp-hero-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .jp-hero-eyebrow::before {
                    content: '';
                    display: block;
                    width: 32px;
                    height: 2px;
                    background: #b07d4a;
                }

                .jp-hero-name {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(3rem, 6vw, 5.5rem);
                    line-height: 1.0;
                    margin: 0 0 8px;
                    color: #1a1208;
                }

                .jp-page.dark .jp-hero-name {
                    color: #f0ece3;
                }

                .jp-hero-name em {
                    font-style: italic;
                    color: #b07d4a;
                }

                .jp-hero-role {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(1.2rem, 2.5vw, 2rem);
                    color: #6b6257;
                    margin: 0 0 32px;
                    font-style: italic;
                }

                .jp-page.dark .jp-hero-role {
                    color: #9e9788;
                }

                .jp-hero-desc {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #6b6257;
                    max-width: 480px;
                    margin-bottom: 40px;
                }

                .jp-page.dark .jp-hero-desc {
                    color: #9e9788;
                }

                .jp-hero-actions {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .jp-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #b07d4a;
                    color: #fff;
                    padding: 14px 28px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    letter-spacing: 0.02em;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .jp-btn-primary:hover {
                    background: #8a5d2e;
                    transform: translateY(-2px);
                    color: #fff;
                }

                .jp-btn-outline {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: transparent;
                    color: #b07d4a;
                    padding: 14px 28px;
                    border-radius: 6px;
                    border: 1.5px solid #b07d4a;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    letter-spacing: 0.02em;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .jp-btn-outline:hover {
                    background: rgba(176, 125, 74, 0.08);
                    transform: translateY(-2px);
                    color: #b07d4a;
                }

                /* Hero image col */
                .jp-hero-image-col {
                    position: relative;
                    overflow: hidden;
                }

                .jp-hero-image-col::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #6a11cb22, #2575fc22);
                    z-index: 1;
                }

                .jp-hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top center;
                    filter: grayscale(20%);
                    transition: filter 0.4s ease;
                }

                .jp-hero-image-col:hover .jp-hero-img {
                    filter: grayscale(0%);
                }

                .jp-hero-image-badge {
                    position: absolute;
                    bottom: 40px;
                    left: -20px;
                    background: #b07d4a;
                    color: #fff;
                    padding: 16px 28px;
                    border-radius: 6px;
                    z-index: 2;
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.1rem;
                    box-shadow: 0 8px 32px rgba(176,125,74,0.3);
                }

                .jp-hero-image-badge span {
                    display: block;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.75rem;
                    opacity: 0.85;
                    margin-top: 2px;
                    font-style: normal;
                }

                /* Scroll indicator */
                .jp-scroll-hint {
                    position: absolute;
                    bottom: 32px;
                    left: 60px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.75rem;
                    color: #b07d4a;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    font-weight: 600;
                    animation: jp-bounce 2s infinite;
                }

                @keyframes jp-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(4px); }
                }

                /* ── About Section ── */
                .jp-about {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 100px 40px;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 60px;
                    align-items: start;
                }

                @media (max-width: 768px) {
                    .jp-about { grid-template-columns: 1fr; padding: 60px 24px; }
                }

                .jp-about-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 16px;
                }

                .jp-about-heading {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    line-height: 1.15;
                    margin: 0;
                    color: #1a1208;
                }

                .jp-page.dark .jp-about-heading {
                    color: #f0ece3;
                }

                .jp-about-heading em {
                    font-style: italic;
                    color: #b07d4a;
                }

                .jp-about-text {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: #6b6257;
                    margin-bottom: 20px;
                }

                .jp-page.dark .jp-about-text {
                    color: #9e9788;
                }

                .jp-about-text strong {
                    color: #b07d4a;
                    font-weight: 600;
                }

                /* Stats row */
                .jp-stats {
                    display: flex;
                    gap: 40px;
                    margin-top: 40px;
                    flex-wrap: wrap;
                }

                .jp-stat-item {
                    border-left: 2px solid #b07d4a;
                    padding-left: 16px;
                }

                .jp-stat-number {
                    font-family: 'DM Serif Display', serif;
                    font-size: 2rem;
                    color: #b07d4a;
                    line-height: 1;
                    margin-bottom: 4px;
                }

                .jp-stat-label {
                    font-size: 0.8rem;
                    color: #9e9788;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                }

                /* Section divider */
                .jp-section-divider {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .jp-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #d9d0c0;
                }

                .jp-page.dark .jp-divider-line {
                    background: #2a2a30;
                }

                .jp-divider-label {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    white-space: nowrap;
                }

                /* ── Blog Section ── */
                .jp-blog {
                    padding: 80px 40px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .jp-blog-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .jp-blog-heading {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(1.8rem, 3vw, 2.5rem);
                    margin: 0;
                    color: #1a1208;
                }

                .jp-page.dark .jp-blog-heading {
                    color: #f0ece3;
                }

                .jp-blog-link {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #b07d4a;
                    text-decoration: none;
                    letter-spacing: 0.04em;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: gap 0.2s ease;
                }

                .jp-blog-link:hover {
                    gap: 10px;
                    color: #8a5d2e;
                }

                /* Blog card */
                .jp-blog-card {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #e6dfd3;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .jp-page.dark .jp-blog-card {
                    background: #1a1a20;
                    border-color: #2a2a32;
                }

                .jp-blog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.10);
                }

                .jp-blog-card-img {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s ease;
                }

                .jp-blog-card:hover .jp-blog-card-img {
                    transform: scale(1.04);
                }

                .jp-blog-card-img-wrap {
                    overflow: hidden;
                }

                .jp-blog-card-body {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .jp-blog-card-date {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 8px;
                }

                .jp-blog-card-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.1rem;
                    line-height: 1.3;
                    color: #1a1208;
                    margin: 0 0 10px;
                    flex: 1;
                }

                .jp-page.dark .jp-blog-card-title {
                    color: #f0ece3;
                }

                .jp-blog-card-link {
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #b07d4a;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    transition: gap 0.2s ease;
                    margin-top: 12px;
                }

                .jp-blog-card-link:hover {
                    gap: 9px;
                    color: #8a5d2e;
                }

                /* Swiper overrides */
                .jp-swiper .swiper-button-next,
                .jp-swiper .swiper-button-prev {
                    color: #b07d4a;
                    width: 36px;
                    height: 36px;
                    background: rgba(176,125,74,0.1);
                    border-radius: 50%;
                    border: 1px solid rgba(176,125,74,0.3);
                }

                .jp-swiper .swiper-button-next::after,
                .jp-swiper .swiper-button-prev::after {
                    font-size: 0.8rem;
                    font-weight: 700;
                }

                .jp-swiper .swiper-pagination-bullet {
                    background: #b07d4a;
                    opacity: 0.4;
                }

                .jp-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                }

                /* ── Footer ── */
                .jp-footer {
                    background: #0f0d0a;
                    color: #9e9788;
                    text-align: center;
                    padding: 32px 24px;
                    font-size: 0.85rem;
                    border-top: 1px solid rgba(176,125,74,0.12);
                }

                .jp-footer span {
                    color: #b07d4a;
                }
            `}</style>

            <div className={`jp-page${d ? ' dark' : ''}`}>

                {/* ── Hero ── */}
                <section className="jp-hero">
                    <div className="jp-hero-content">
                        <p className="jp-hero-eyebrow">Full-Stack Developer</p>
                        <h1 className="jp-hero-name">
                            Jaun<br /><em>van Deventer</em>
                        </h1>
                        <p className="jp-hero-role">Problem Solver & Tech Enthusiast</p>
                        <p className="jp-hero-desc">
                            Self-taught developer with a passion for building impactful applications. From elegant frontends to efficient backends — I love the craft of software.
                        </p>
                        <div className="jp-hero-actions">
                            <Link to="/jaunprojects" className="jp-btn-primary">View My Work →</Link>
                            <Link to="/jaunresume" className="jp-btn-outline">About Me</Link>
                        </div>
                    </div>

                    <div className="jp-hero-image-col">
                        <img src={jaunImage} alt="Jaun van Deventer" className="jp-hero-img" />
                        <div className="jp-hero-image-badge">
                            Based in South Africa
                            <span>Sasolburg, Free State</span>
                        </div>
                    </div>

                    <div className="jp-scroll-hint">↓ Scroll</div>
                </section>

                {/* ── About ── */}
                <section className="jp-about">
                    <div>
                        <p className="jp-about-label">About Me</p>
                        <h2 className="jp-about-heading">
                            Building things that <em>matter</em>
                        </h2>
                    </div>
                    <div>
                        <p className="jp-about-text">
                            Hi there! I&apos;m a self-taught developer passionate about building impactful applications. My expertise spans <strong>JavaScript, C#, Python, Node.js, React, PHP, and SQL</strong>. I specialize in creating intuitive front-end experiences with <strong>Bootstrap, CSS, and HTML5</strong>, and building efficient back-end systems using <strong>MongoDB and Node</strong>.
                        </p>
                        <p className="jp-about-text">
                            I got my start fixing computers at 12, transitioned from the electrical field into full-time coding, and haven&apos;t looked back. Check out my projects on GitHub, where I showcase my commitment to clean, maintainable code and open-source collaboration.
                        </p>
                        <div className="jp-stats">
                            <div className="jp-stat-item">
                                <div className="jp-stat-number">2+</div>
                                <div className="jp-stat-label">Years Coding</div>
                            </div>
                            <div className="jp-stat-item">
                                <div className="jp-stat-number">6+</div>
                                <div className="jp-stat-label">Projects Built</div>
                            </div>
                            <div className="jp-stat-item">
                                <div className="jp-stat-number">13+</div>
                                <div className="jp-stat-label">Technologies</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Blog Section ── */}
                <div className="jp-section-divider">
                    <div className="jp-divider-line" />
                    <span className="jp-divider-label">Latest Writing</span>
                    <div className="jp-divider-line" />
                </div>

                <section className="jp-blog">
                    <div className="jp-blog-header">
                        <h2 className="jp-blog-heading">From the Blog</h2>
                        <Link to="/blog" className="jp-blog-link">View all articles →</Link>
                    </div>

                    {loading && <p style={{ color: '#9e9788' }}>Loading posts...</p>}
                    {error && <p style={{ color: '#c0392b' }}>Error: {error}</p>}

                    {!loading && !error && (
                        <Swiper
                            className="jp-swiper"
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: true }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            style={{ paddingBottom: '48px' }}
                        >
                            {blogPosts.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div className="jp-blog-card">
                                        <div className="jp-blog-card-img-wrap">
                                            <img src={post.image} alt={post.title} className="jp-blog-card-img" />
                                        </div>
                                        <div className="jp-blog-card-body">
                                            <p className="jp-blog-card-date">{post.date}</p>
                                            <h3 className="jp-blog-card-title">{post.title}</h3>
                                            <Link to={`/blog/${post.id}`} className="jp-blog-card-link">
                                                Read article →
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </section>

                {/* ── Footer ── */}
                <footer className="jp-footer">
                    <p style={{ margin: 0 }}>
                        © 2025 <span>Jaun van Deventer</span>. All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}

export default JaunProfile;