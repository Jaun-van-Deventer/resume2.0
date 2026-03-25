import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useMenu } from "./MenuContext";
import { DarkModeContext } from "./DarkModeContext";

function NavbarOffCanvas() {
    const { menuTitle, menuItems, menuSocial } = useMenu();
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const closeDrawer = () => setIsOpen(false);
    const openDrawer = () => setIsOpen(true);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

                .nav-root {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    padding: 0 24px;
                    background: rgba(15, 13, 10, 0.82);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border-bottom: 1px solid rgba(176, 125, 74, 0.15);
                    font-family: 'DM Sans', sans-serif;
                    transition: background 0.4s ease;
                }

                .nav-root.light {
                    background: rgba(244, 241, 236, 0.88);
                    border-bottom: 1px solid rgba(176, 125, 74, 0.2);
                }

                /* Brand */
                .nav-brand {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.4rem;
                    color: #f0ece3;
                    text-decoration: none;
                    letter-spacing: 0.01em;
                    flex: 1;
                    transition: color 0.2s ease;
                }

                .nav-root.light .nav-brand {
                    color: #1a1208;
                }

                .nav-brand span {
                    color: #b07d4a;
                }

                /* Right side controls */
                .nav-controls {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                /* Dark mode toggle */
                .nav-toggle-btn {
                    background: none;
                    border: 1px solid rgba(176, 125, 74, 0.3);
                    border-radius: 20px;
                    padding: 6px 12px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    color: #b07d4a;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 500;
                    transition: background 0.2s ease, border-color 0.2s ease;
                    white-space: nowrap;
                }

                .nav-toggle-btn:hover {
                    background: rgba(176, 125, 74, 0.1);
                    border-color: rgba(176, 125, 74, 0.6);
                }

                /* Burger */
                .nav-burger {
                    background: none;
                    border: 1px solid rgba(176, 125, 74, 0.3);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    cursor: pointer;
                    padding: 0;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }

                .nav-burger:hover {
                    background: rgba(176, 125, 74, 0.1);
                    border-color: rgba(176, 125, 74, 0.6);
                }

                .nav-burger-bar {
                    width: 18px;
                    height: 2px;
                    background: #b07d4a;
                    border-radius: 2px;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }

                /* Offcanvas overlay */
                .nav-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1100;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                    backdrop-filter: blur(2px);
                }

                .nav-overlay.open {
                    opacity: 1;
                    pointer-events: all;
                }

                /* Offcanvas drawer */
                .nav-drawer {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: 100vh;
                    background: #0f0d0a;
                    z-index: 1200;
                    display: flex;
                    flex-direction: column;
                    transform: translateX(100%);
                    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    border-left: 1px solid rgba(176, 125, 74, 0.15);
                }

                .nav-drawer.open {
                    transform: translateX(0);
                }

                .nav-root.light ~ .nav-overlay + .nav-drawer,
                .nav-drawer.light {
                    background: #f4f1ec;
                    border-left: 1px solid rgba(176, 125, 74, 0.2);
                }

                /* Drawer header */
                .nav-drawer-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 24px;
                    border-bottom: 1px solid rgba(176, 125, 74, 0.12);
                }

                .nav-drawer-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.3rem;
                    color: #f0ece3;
                    margin: 0;
                }

                .nav-drawer.light .nav-drawer-title {
                    color: #1a1208;
                }

                .nav-close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #9e9788;
                    font-size: 1.2rem;
                    padding: 4px;
                    line-height: 1;
                    transition: color 0.2s ease;
                }

                .nav-close-btn:hover {
                    color: #b07d4a;
                }

                /* Nav items */
                .nav-drawer-items {
                    flex: 1;
                    padding: 24px 0;
                    list-style: none;
                    margin: 0;
                }

                .nav-drawer-items li {
                    margin: 0;
                    padding: 0;
                }

                .nav-drawer-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 24px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #9e9788;
                    text-decoration: none;
                    transition: color 0.2s ease, background 0.2s ease, padding-left 0.2s ease;
                    border-left: 2px solid transparent;
                }

                .nav-drawer-link:hover {
                    color: #f0ece3;
                    background: rgba(176, 125, 74, 0.06);
                    padding-left: 28px;
                }

                .nav-drawer.light .nav-drawer-link:hover {
                    color: #1a1208;
                }

                .nav-drawer-link.active {
                    color: #b07d4a;
                    border-left-color: #b07d4a;
                    background: rgba(176, 125, 74, 0.08);
                }

                .nav-drawer-link-arrow {
                    font-size: 0.75rem;
                    opacity: 0;
                    transform: translateX(-4px);
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .nav-drawer-link:hover .nav-drawer-link-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Social icons */
                .nav-drawer-social {
                    padding: 20px 24px;
                    border-top: 1px solid rgba(176, 125, 74, 0.12);
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }

                .nav-social-link {
                    color: #9e9788;
                    font-size: 1.5rem;
                    transition: color 0.2s ease, transform 0.2s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .nav-social-link:hover {
                    transform: translateY(-2px);
                }

                .nav-social-link.linkedin:hover { color: #0077b5; }
                .nav-social-link.github:hover { color: #f0ece3; }

                .nav-drawer-footer {
                    padding: 12px 24px 20px;
                    font-size: 0.72rem;
                    color: #4a4540;
                    font-family: 'DM Sans', sans-serif;
                }

                .nav-drawer.light .nav-drawer-footer {
                    color: #b0a898;
                }
            `}</style>

            {/* Navbar */}
            <nav className={`nav-root${isDarkMode ? '' : ' light'}`}>
                <Link to="/" className="nav-brand" onClick={closeDrawer}>
                    {menuTitle}<span>.</span>
                </Link>
                <div className="nav-controls">
                    <button className="nav-toggle-btn" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
                    </button>
                    <button className="nav-burger" aria-label="Open menu" onClick={openDrawer}>
                        <span className="nav-burger-bar" />
                        <span className="nav-burger-bar" />
                        <span className="nav-burger-bar" />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={closeDrawer}
                className={`nav-overlay${isOpen ? " open" : ""}`}
            />

            {/* Drawer */}
            <div
                className={`nav-drawer${isOpen ? " open" : ""}`}
                style={{
                    background: isDarkMode ? '#0f0d0a' : '#f4f1ec',
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(176,125,74,0.12)' }}>
                    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', color: isDarkMode ? '#f0ece3' : '#1a1208' }}>
                        {menuTitle}<span style={{ color: '#b07d4a' }}>.</span>
                    </span>
                    <button
                        onClick={closeDrawer}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9e9788', fontSize: '1.4rem', lineHeight: 1, padding: '4px', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#b07d4a'}
                        onMouseLeave={e => e.currentTarget.style.color = '#9e9788'}
                    >
                        ✕
                    </button>
                </div>

                {/* Nav Items */}
                <ul style={{ listStyle: 'none', margin: 0, padding: '24px 0', flex: 1, overflowY: 'auto' }}>
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.link;
                        return (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    onClick={closeDrawer}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '14px 24px',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: isActive ? '#b07d4a' : (isDarkMode ? '#9e9788' : '#6b6257'),
                                        textDecoration: 'none',
                                        borderLeft: isActive ? '2px solid #b07d4a' : '2px solid transparent',
                                        background: isActive ? 'rgba(176,125,74,0.08)' : 'transparent',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = isDarkMode ? '#f0ece3' : '#1a1208';
                                            e.currentTarget.style.background = 'rgba(176,125,74,0.06)';
                                            e.currentTarget.style.paddingLeft = '28px';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = isDarkMode ? '#9e9788' : '#6b6257';
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.paddingLeft = '24px';
                                        }
                                    }}
                                >
                                    {item.label}
                                    <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>→</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Social Links */}
                <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(176,125,74,0.12)', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {menuSocial?.linkedin && (
                        <a
                            href={menuSocial.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#9e9788', fontSize: '1.6rem', transition: 'color 0.2s, transform 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#9e9788'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                    )}
                    {menuSocial?.github && (
                        <a
                            href={menuSocial.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#9e9788', fontSize: '1.6rem', transition: 'color 0.2s, transform 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.color = isDarkMode ? '#f0ece3' : '#1a1208'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#9e9788'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <i className="fa-brands fa-square-github" />
                        </a>
                    )}
                </div>

                {/* Footer */}
                <div style={{ padding: '12px 24px 24px', fontSize: '0.72rem', color: isDarkMode ? '#4a4540' : '#b0a898' }}>
                    © {new Date().getFullYear()} Jaun van Deventer
                </div>
            </div>
        </>
    );
}

export default NavbarOffCanvas;