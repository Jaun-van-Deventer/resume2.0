import { useEffect, useRef, useContext, useCallback, useState } from "react";
import { useMenu } from "../components/MenuContext";
import { DarkModeContext } from "../components/DarkModeContext";
import resumeGameImage from '/assets/resume-game.png';
import invenManager from '/assets/inven-man.png';
import movieBrowser from '/assets/movie-browser.png';
import devlog from '/assets/devlog.png';
import quicklink from '/assets/quicklink.png';
import cartemplate from '/assets/cartemplate.png';
import usePageMeta from '../hooks/usePageMeta';

const projects = [
    { img: resumeGameImage, tag: "Game / Frontend", title: "Resume Game", desc: "A gamified way to explore my resume built with Kaboom.js and Vite.", link: "https://jaun-van-deventer.github.io/resume_game/" },
    { img: quicklink, tag: "Browser Extension", title: "Quicklink-QR", desc: "A Chrome extension that turns any link into a scannable, shareable QR code.", link: "https://github.com/Jaun-van-Deventer/Quicklink-QR" },
    { img: invenManager, tag: "Full-Stack", title: "Inventory Manager", desc: "An inventory management system built with React, Node.js, and MongoDB.", link: "https://inventory-manager-jade-omega.vercel.app/" },
    { img: movieBrowser, tag: "Frontend / API", title: "Movie Browser", desc: "Search for any movie via an external API. React-based with API integration in progress.", link: "https://jaun-van-deventer.github.io/react-movie-database/" },
    { img: devlog, tag: "Fullstack", title: "Dev Log", desc: "A simple app to keep track of personal development activities.", link: "https://jaun-van-deventer.github.io/guess-my-number/" },
    { img: cartemplate, tag: "Fullstack", title: "Car Reseller Template", desc: "A responsive template for a car reseller website", link: "https://jaun-van-deventer.github.io/pig-game/" },
];

function JaunProjects() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);
    const total = projects.length;

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Profile', link: '/Jaun' },
            { label: 'About Me', link: '/jaunresume' },
            { label: 'Blog', link: '/blog' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    const go = useCallback((idx) => {
        setCurrent(((idx % total) + total) % total);
    }, [total]);

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1);
        touchStartX.current = null;
    };

    usePageMeta('Projects');

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
                .jp-projects-page { font-family: 'DM Sans', sans-serif; background: #0d0b08; }
                .jp-carousel { width: 100%; height: 100vh; position: relative; overflow: hidden; }
                .jp-track {
                    display: flex; height: 100%;
                    transition: transform 0.55s cubic-bezier(0.77,0,0.175,1);
                    will-change: transform;
                }
                .jp-slide {
                    min-width: 100%; height: 100vh;
                    background-size: cover; background-repeat: no-repeat; background-position: center;
                    position: relative; flex-shrink: 0;
                }
                .jp-cell-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(10,8,5,0.92) 0%, rgba(10,8,5,0.35) 55%, transparent 100%);
                }
                .jp-cell-tag {
                    position: absolute; top: 88px; left: 48px;
                    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
                    color: #b07d4a; background: rgba(15,13,10,0.7); border: 1px solid rgba(176,125,74,0.3);
                    border-radius: 20px; padding: 5px 14px; backdrop-filter: blur(8px);
                }
                @media (max-width: 600px) { .jp-cell-tag { left: 24px; top: 80px; } }
                .jp-cell-inner { position: absolute; bottom: 80px; left: 0; right: 0; text-align: center; padding: 0 48px; }
                @media (max-width: 600px) { .jp-cell-inner { padding: 0 24px; bottom: 60px; } }
                .jp-cell-title {
                    font-family: 'DM Serif Display', serif; font-size: clamp(2.4rem, 6vw, 4.5rem);
                    line-height: 1.0; color: #f0ece3; margin: 0 0 12px; font-style: italic;
                }
                .jp-cell-desc {
                    font-size: clamp(0.95rem, 1.5vw, 1.1rem); color: rgba(240,236,227,0.75);
                    max-width: 600px; margin: 0 auto 28px; line-height: 1.65;
                }
                .jp-cell-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; border: 1.5px solid rgba(176,125,74,0.7); color: #f0ece3;
                    padding: 13px 28px; border-radius: 6px; text-decoration: none;
                    font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600;
                    letter-spacing: 0.08em; text-transform: uppercase;
                    transition: background 0.2s, border-color 0.2s, transform 0.2s;
                }
                .jp-cell-btn:hover { background: rgba(176,125,74,0.15); border-color: #b07d4a; transform: translateY(-2px); color: #f0ece3; }
                .jp-cell-counter {
                    position: absolute; top: 88px; right: 48px;
                    font-family: 'DM Serif Display', serif; font-size: 3rem;
                    color: rgba(240,236,227,0.12); line-height: 1; pointer-events: none; user-select: none;
                }
                @media (max-width: 600px) { .jp-cell-counter { right: 24px; } }
                .jp-nav-btn {
                    position: absolute; top: 50%; transform: translateY(-50%);
                    width: 52px; height: 52px; border-radius: 50%;
                    background: rgba(15,13,10,0.65); border: 1px solid rgba(176,125,74,0.25);
                    color: #b07d4a; font-size: 20px; display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 10; transition: background 0.2s, border-color 0.2s;
                }
                .jp-nav-btn:hover { background: rgba(176,125,74,0.15); border-color: rgba(176,125,74,0.6); }
                .jp-nav-prev { left: 20px; }
                .jp-nav-next { right: 20px; }
                .jp-dots { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 10; }
                .jp-dot { width: 28px; height: 3px; border-radius: 2px; background: rgba(240,236,227,0.22); cursor: pointer; transition: background 0.3s; border: none; padding: 0; }
                .jp-dot.active { background: #b07d4a; }
            `}</style>

            <div className={`jp-projects-page${isDarkMode ? ' dark' : ''}`}>
                <div className="jp-carousel">
                    <div
                        className="jp-track"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {projects.map((p, i) => (
                            <div
                                key={i}
                                className="jp-slide"
                                style={{ backgroundImage: `url(${p.img})` }}
                            >
                                <div className="jp-cell-overlay" />
                                <div className="jp-cell-tag">{p.tag}</div>
                                <div className="jp-cell-counter">0{i + 1}</div>
                                <div className="jp-cell-inner">
                                    <h2 className="jp-cell-title">{p.title}</h2>
                                    <p className="jp-cell-desc">{p.desc}</p>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="jp-cell-btn">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="jp-nav-btn jp-nav-prev" onClick={() => go(current - 1)}>&#8592;</button>
                    <button className="jp-nav-btn jp-nav-next" onClick={() => go(current + 1)}>&#8594;</button>

                    <div className="jp-dots">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                className={`jp-dot${i === current ? ' active' : ''}`}
                                onClick={() => go(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default JaunProjects;