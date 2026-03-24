import { useEffect } from "react";
import { useMenu } from "../components/MenuContext";
import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import {
    FaJs, FaGitAlt, FaNodeJs, FaReact, FaPython, FaBootstrap,
    FaCss3Alt, FaHtml5, FaPhp, FaCode, FaDocker, FaRust,
    FaPhone, FaEnvelope, FaGlobe, FaLocationArrow
} from "react-icons/fa";
import { SiGo, SiCplusplus, SiPostman, SiMongodb, SiMysql, SiC } from "react-icons/si";

const skills = [
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaCode />, label: "C#" },
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <FaReact />, label: "React" },
    { icon: <FaPython />, label: "Python" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaPhp />, label: "PHP" },
    { icon: <SiMysql />, label: "SQL" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiC />, label: "C" },
];

const learning = [
    { icon: <FaDocker />, label: "Docker" },
    { icon: <SiCplusplus />, label: "C++" },
    { icon: <SiGo />, label: "GoLang" },
    { icon: <FaRust />, label: "Rust" },
    { icon: <SiPostman />, label: "Postman" },
];

const contact = [
    { icon: <FaPhone />, label: "Phone", value: "079 741 6919" },
    { icon: <FaEnvelope />, label: "Email", value: "jaunvdeventer78@gmail.com" },
    { icon: <FaGlobe />, label: "Website", value: "www.goresume.co.za" },
    { icon: <FaLocationArrow />, label: "Location", value: "Vaalpark, Sasolburg, Freestate" },
];

const JaunResume = () => {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const d = isDarkMode;

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Profile', link: '/Jaun' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'Blog', link: '/blog' },
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

                .jr-page {
                    min-height: 100vh;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    font-family: 'DM Sans', sans-serif;
                    background: #f4f1ec;
                    color: #1a1208;
                    transition: background 0.4s ease, color 0.4s ease;
                }
                .jr-page.dark {
                    background: #111114;
                    color: #e8e4dc;
                }

                /* ── Page header ── */
                .jr-header {
                    max-width: 860px;
                    margin: 0 auto 56px;
                    padding: 0 24px;
                    text-align: center;
                }
                .jr-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 12px;
                }
                .jr-heading {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(2.4rem, 6vw, 4rem);
                    line-height: 1.1;
                    margin: 0 0 16px;
                    color: #1a1208;
                }
                .jr-page.dark .jr-heading { color: #f0ece3; }
                .jr-heading em { font-style: italic; color: #b07d4a; }
                .jr-sub {
                    font-size: 1rem;
                    color: #7a6f60;
                    line-height: 1.65;
                    max-width: 580px;
                    margin: 0 auto;
                }
                .jr-page.dark .jr-sub { color: #9e9788; }

                /* ── Layout ── */
                .jr-body {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 32px;
                    align-items: start;
                }
                @media (max-width: 768px) {
                    .jr-body { grid-template-columns: 1fr; }
                }

                /* ── Sidebar card ── */
                .jr-sidebar-card {
                    background: #fff;
                    border: 1px solid #e6dfd3;
                    border-radius: 12px;
                    overflow: hidden;
                    position: sticky;
                    top: 88px;
                }
                .jr-page.dark .jr-sidebar-card {
                    background: #1a1a20;
                    border-color: #2a2a32;
                }
                .jr-sidebar-top {
                    background: linear-gradient(135deg, #b07d4a, #8a5d2e);
                    padding: 28px 24px;
                    color: #fff;
                }
                .jr-sidebar-name {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.4rem;
                    margin: 0 0 4px;
                }
                .jr-sidebar-role {
                    font-size: 0.82rem;
                    opacity: 0.85;
                    font-style: italic;
                }
                .jr-sidebar-items {
                    padding: 20px 0;
                }
                .jr-contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 10px 24px;
                    border-bottom: 1px solid #f0ece3;
                    font-size: 0.85rem;
                    color: #6b6257;
                    transition: background 0.2s;
                }
                .jr-page.dark .jr-contact-item {
                    border-bottom-color: #252530;
                    color: #9e9788;
                }
                .jr-contact-item:last-child { border-bottom: none; }
                .jr-contact-item:hover { background: rgba(176,125,74,0.05); }
                .jr-contact-icon {
                    color: #b07d4a;
                    margin-top: 2px;
                    flex-shrink: 0;
                    font-size: 0.9rem;
                }
                .jr-contact-label {
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 2px;
                }
                .jr-contact-value { line-height: 1.4; }

                /* ── Main content ── */
                .jr-section {
                    background: #fff;
                    border: 1px solid #e6dfd3;
                    border-radius: 12px;
                    padding: 28px 32px;
                    margin-bottom: 24px;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }
                .jr-section:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 32px rgba(0,0,0,0.07);
                }
                .jr-page.dark .jr-section {
                    background: #1a1a20;
                    border-color: #2a2a32;
                }
                .jr-section-label {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    margin-bottom: 6px;
                }
                .jr-section-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.5rem;
                    color: #1a1208;
                    margin: 0 0 16px;
                }
                .jr-page.dark .jr-section-title { color: #f0ece3; }
                .jr-section-text {
                    font-size: 0.95rem;
                    line-height: 1.75;
                    color: #6b6257;
                    margin: 0;
                }
                .jr-page.dark .jr-section-text { color: #9e9788; }

                /* ── Skills grid ── */
                .jr-skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    gap: 12px;
                }
                .jr-skill-tile {
                    background: #f4f1ec;
                    border: 1px solid #e6dfd3;
                    border-radius: 10px;
                    padding: 16px 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #4a3f30;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                    cursor: default;
                }
                .jr-page.dark .jr-skill-tile {
                    background: #111114;
                    border-color: #2a2a32;
                    color: #c8c0b0;
                }
                .jr-skill-tile:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(176,125,74,0.15);
                    border-color: #b07d4a;
                }
                .jr-skill-tile svg {
                    font-size: 1.5rem;
                    color: #b07d4a;
                    transition: transform 0.3s ease;
                }
                .jr-skill-tile:hover svg {
                    transform: scale(1.2);
                }

                /* ── Experience ── */
                .jr-exp-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 12px;
                }
                .jr-exp-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.15rem;
                    color: #1a1208;
                    margin: 0;
                }
                .jr-page.dark .jr-exp-title { color: #f0ece3; }
                .jr-exp-badge {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    background: rgba(176,125,74,0.12);
                    color: #b07d4a;
                    padding: 4px 10px;
                    border-radius: 20px;
                    white-space: nowrap;
                }
                .jr-exp-company {
                    font-size: 0.85rem;
                    color: #9e9788;
                    margin-bottom: 14px;
                    font-weight: 500;
                }
                .jr-exp-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .jr-exp-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 0.92rem;
                    line-height: 1.6;
                    color: #6b6257;
                }
                .jr-page.dark .jr-exp-list li { color: #9e9788; }
                .jr-exp-list li::before {
                    content: '→';
                    color: #b07d4a;
                    flex-shrink: 0;
                    font-size: 0.8rem;
                    margin-top: 3px;
                }

                /* Education items */
                .jr-edu-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 12px 0;
                    border-bottom: 1px solid #f0ece3;
                    font-size: 0.92rem;
                    color: #6b6257;
                    line-height: 1.5;
                }
                .jr-page.dark .jr-edu-item {
                    border-bottom-color: #252530;
                    color: #9e9788;
                }
                .jr-edu-item:last-child { border-bottom: none; }
                .jr-edu-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #b07d4a;
                    flex-shrink: 0;
                    margin-top: 6px;
                }

                /* ── Footer ── */
                .jr-footer {
                    background: #0f0d0a;
                    color: #9e9788;
                    text-align: center;
                    padding: 32px 24px;
                    font-size: 0.85rem;
                    border-top: 1px solid rgba(176,125,74,0.12);
                    margin-top: 60px;
                }
                .jr-footer span { color: #b07d4a; }

                /* Divider */
                .jr-divider {
                    max-width: 1100px;
                    margin: 0 auto 32px;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .jr-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #d9d0c0;
                }
                .jr-page.dark .jr-divider-line { background: #2a2a30; }
                .jr-divider-label {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b07d4a;
                    white-space: nowrap;
                }
            `}</style>

            <div className={`jr-page${d ? ' dark' : ''}`}>
                {/* Header */}
                <div className="jr-header">
                    <p className="jr-eyebrow">About Me</p>
                    <h1 className="jr-heading">Resume & <em>Stack</em></h1>
                    <p className="jr-sub">
                        A self-taught developer with a background in electrical work and game support — driven by curiosity and a love for building things.
                    </p>
                </div>

                <div className="jr-divider">
                    <div className="jr-divider-line" />
                    <span className="jr-divider-label">Details</span>
                    <div className="jr-divider-line" />
                </div>

                <div className="jr-body">
                    {/* Sidebar */}
                    <aside>
                        <div className="jr-sidebar-card">
                            <div className="jr-sidebar-top">
                                <div className="jr-sidebar-name">Jaun van Deventer</div>
                                <div className="jr-sidebar-role">Full-Stack Developer</div>
                            </div>
                            <div className="jr-sidebar-items">
                                {contact.map((c, i) => (
                                    <div className="jr-contact-item" key={i}>
                                        <span className="jr-contact-icon">{c.icon}</span>
                                        <div>
                                            <div className="jr-contact-label">{c.label}</div>
                                            <div className="jr-contact-value">{c.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main */}
                    <div>
                        {/* Aspiration */}
                        <div className="jr-section">
                            <p className="jr-section-label">Who I Am</p>
                            <h2 className="jr-section-title">Aspiration</h2>
                            <p className="jr-section-text">
                                I am an enthusiastic, self-taught developer with a background in the electrical field and game support. Passionate about technology, I am eager to transition into a development role where I can leverage my problem-solving skills and fast-learning ability. I thrive in team environments and am always excited to learn and grow.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="jr-section">
                            <p className="jr-section-label">Credentials</p>
                            <h2 className="jr-section-title">Education</h2>
                            <div>
                                <div className="jr-edu-item">
                                    <div className="jr-edu-dot" />
                                    <span>Diploma in Computer Science — HarvardX CS50</span>
                                </div>
                                <div className="jr-edu-item">
                                    <div className="jr-edu-dot" />
                                    <span>Udemy Certifications in Full-Stack Development, C# Master Class, JavaScript, and more</span>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="jr-section">
                            <p className="jr-section-label">Work History</p>
                            <h2 className="jr-section-title">Experience</h2>
                            <div className="jr-exp-header">
                                <h3 className="jr-exp-title">Game Support Agent</h3>
                                <span className="jr-exp-badge">2024 – Present</span>
                            </div>
                            <div className="jr-exp-company">5CA South Africa</div>
                            <ul className="jr-exp-list">
                                <li>Provided technical support and client liaison across multiple titles.</li>
                                <li>Resolved account and tech-related issues via a ticket system.</li>
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="jr-section">
                            <p className="jr-section-label">Toolkit</p>
                            <h2 className="jr-section-title">Skills Stack</h2>
                            <div className="jr-skills-grid">
                                {skills.map((s, i) => (
                                    <div className="jr-skill-tile" key={i}>
                                        {s.icon}
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Learning */}
                        <div className="jr-section">
                            <p className="jr-section-label">What&apos;s Next</p>
                            <h2 className="jr-section-title">Technologies I&apos;m Excited About</h2>
                            <div className="jr-skills-grid">
                                {learning.map((s, i) => (
                                    <div className="jr-skill-tile" key={i}>
                                        {s.icon}
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="jr-footer">
                    <p style={{ margin: 0 }}>© 2025 <span>Jaun van Deventer</span>. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default JaunResume;