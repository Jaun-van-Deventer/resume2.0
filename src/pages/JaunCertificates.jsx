import { useEffect, useState, useContext } from "react";
import { useMenu } from "../components/MenuContext";
import { DarkModeContext } from "../components/DarkModeContext";
import jcert from "/assets/jcert.png";
import jcert2 from "/assets/jcert2.png";

const certs = [
    {
        img: jcert,
        title: "Harvard CS50",
        subtitle: "Introduction to Computer Science",
        issuer: "HarvardX",
        year: "2024",
    },
    {
        img: jcert2,
        title: "Professional Diploma",
        subtitle: "Computer Science",
        issuer: "Upskillist",
        year: "2023",
    },
];

function JaunCertificates() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const [selectedCert, setSelectedCert] = useState(null);
    const d = isDarkMode;

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Profile', link: '/jaun' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'About Me', link: '/jaunresume' },
            { label: "Blog", link: "/blog" },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

                .jc-page {
                    min-height: 100vh;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    font-family: 'DM Sans', sans-serif;
                    background: #f4f1ec;
                    color: #1a1208;
                    transition: background 0.4s ease, color 0.4s ease;
                }
                .jc-page.dark {
                    background: #111114;
                    color: #e8e4dc;
                }

                /* ── Header ── */
                .jc-header {
                    max-width: 860px;
                    margin: 0 auto 56px;
                    padding: 0 24px;
                    text-align: center;
                }
                .jc-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 12px;
                }
                .jc-heading {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(2.4rem, 6vw, 4rem);
                    line-height: 1.1;
                    margin: 0 0 16px;
                    color: #1a1208;
                }
                .jc-page.dark .jc-heading { color: #f0ece3; }
                .jc-heading em { font-style: italic; color: #b07d4a; }
                .jc-sub {
                    font-size: 1rem;
                    color: #7a6f60;
                    line-height: 1.65;
                    max-width: 520px;
                    margin: 0 auto;
                }
                .jc-page.dark .jc-sub { color: #9e9788; }

                /* ── Divider ── */
                .jc-divider {
                    max-width: 1100px;
                    margin: 0 auto 40px;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .jc-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #d9d0c0;
                }
                .jc-page.dark .jc-divider-line { background: #2a2a30; }
                .jc-divider-label {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    white-space: nowrap;
                }

                /* ── Grid ── */
                .jc-grid {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
                    gap: 28px;
                }

                /* ── Certificate card ── */
                .jc-card {
                    background: #fff;
                    border: 1px solid #e6dfd3;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    display: flex;
                    flex-direction: column;
                }
                .jc-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 48px rgba(176,125,74,0.18);
                }
                .jc-page.dark .jc-card {
                    background: #1a1a20;
                    border-color: #2a2a32;
                }
                .jc-card-img-wrap {
                    overflow: hidden;
                    position: relative;
                    height: 240px;
                    background: #e6dfd3;
                }
                .jc-page.dark .jc-card-img-wrap { background: #252530; }
                .jc-card-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s ease;
                }
                .jc-card:hover .jc-card-img-wrap img {
                    transform: scale(1.04);
                }
                .jc-card-zoom {
                    position: absolute;
                    inset: 0;
                    background: rgba(176,125,74,0.0);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.25s ease, background 0.25s ease;
                }
                .jc-card:hover .jc-card-zoom {
                    opacity: 1;
                    background: rgba(176,125,74,0.15);
                }
                .jc-card-zoom-icon {
                    background: rgba(255,255,255,0.9);
                    border-radius: 50%;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: #b07d4a;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
                    transform: scale(0.8);
                    transition: transform 0.25s ease;
                }
                .jc-card:hover .jc-card-zoom-icon { transform: scale(1); }

                .jc-card-body {
                    padding: 20px 24px 24px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 12px;
                }
                .jc-card-issuer {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 4px;
                }
                .jc-card-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.1rem;
                    color: #1a1208;
                    margin: 0 0 2px;
                }
                .jc-page.dark .jc-card-title { color: #f0ece3; }
                .jc-card-subtitle {
                    font-size: 0.85rem;
                    color: #9e9788;
                }
                .jc-card-year {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.4rem;
                    color: #d9d0c0;
                    flex-shrink: 0;
                }
                .jc-page.dark .jc-card-year { color: #2e2e38; }

                /* ── Modal ── */
                .jc-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(10, 8, 5, 0.85);
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    backdrop-filter: blur(6px);
                    animation: jc-fade-in 0.2s ease;
                }
                @keyframes jc-fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .jc-modal-box {
                    background: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                    max-width: 800px;
                    width: 100%;
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 32px 80px rgba(0,0,0,0.4);
                    animation: jc-slide-up 0.25s ease;
                }
                @keyframes jc-slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .jc-modal-img {
                    width: 100%;
                    object-fit: contain;
                    max-height: 70vh;
                    display: block;
                }
                .jc-modal-footer {
                    padding: 16px 24px;
                    display: flex;
                    justify-content: flex-end;
                    border-top: 1px solid #e6dfd3;
                }
                .jc-modal-close {
                    background: #b07d4a;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 24px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }
                .jc-modal-close:hover { background: #8a5d2e; }

                /* ── Footer ── */
                .jc-footer {
                    background: #0f0d0a;
                    color: #9e9788;
                    text-align: center;
                    padding: 32px 24px;
                    font-size: 0.85rem;
                    border-top: 1px solid rgba(176,125,74,0.12);
                    margin-top: 72px;
                }
                .jc-footer span { color: #b07d4a; }
            `}</style>

            <div className={`jc-page${d ? ' dark' : ''}`}>
                {/* Header */}
                <div className="jc-header">
                    <p className="jc-eyebrow">Credentials</p>
                    <h1 className="jc-heading">My <em>Certificates</em></h1>
                    <p className="jc-sub">
                        Formal recognition of the courses and programs I&apos;ve completed on my self-taught development journey.
                    </p>
                </div>

                <div className="jc-divider">
                    <div className="jc-divider-line" />
                    <span className="jc-divider-label">{certs.length} Certificates</span>
                    <div className="jc-divider-line" />
                </div>

                {/* Grid */}
                <div className="jc-grid">
                    {certs.map((cert, i) => (
                        <div
                            className="jc-card"
                            key={i}
                            onClick={() => setSelectedCert(cert.img)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && setSelectedCert(cert.img)}
                        >
                            <div className="jc-card-img-wrap">
                                <img src={cert.img} alt={cert.title} />
                                <div className="jc-card-zoom">
                                    <div className="jc-card-zoom-icon">🔍</div>
                                </div>
                            </div>
                            <div className="jc-card-body">
                                <div>
                                    <p className="jc-card-issuer">{cert.issuer}</p>
                                    <h2 className="jc-card-title">{cert.title}</h2>
                                    <p className="jc-card-subtitle">{cert.subtitle}</p>
                                </div>
                                <div className="jc-card-year">{cert.year}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedCert && (
                    <div className="jc-modal-overlay" onClick={() => setSelectedCert(null)}>
                        <div className="jc-modal-box" onClick={e => e.stopPropagation()}>
                            <img src={selectedCert} alt="Certificate" className="jc-modal-img" />
                            <div className="jc-modal-footer">
                                <button className="jc-modal-close" onClick={() => setSelectedCert(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <footer className="jc-footer">
                    <p style={{ margin: 0 }}>© 2025 <span>Jaun van Deventer</span>. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default JaunCertificates;