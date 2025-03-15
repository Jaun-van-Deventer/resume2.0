import { useState } from "react"; // Add useState for dark mode
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useMenu } from "./MenuContext";
import "../App.css";

function NavbarOffCanvas() {
    const { menuTitle, menuItems, menuSocial } = useMenu();
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            document.body.classList.toggle("dark-mode", newMode); // Use newMode
            return newMode;
        });
    };

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                {/* Navbar Brand */}
                <a className="navbar-brand" href="#">
                    {menuTitle}
                </a>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="dark-mode-toggle me-2"
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? "🌙" : "☀️"}
                </button>

                {/* Burger Menu Button */}
                <div className="card">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Offcanvas Menu */}
                <div
                    className="offcanvas offcanvas-end "
                    tabIndex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                            {menuTitle}
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column">
                        <ul className="navbar-nav flex-grow-1">
                            {menuItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <Link className="nav-link" to={item.link}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <a href={menuSocial.linkedin} className="text-info" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-4x" style={{ color: "#0743ab" }}>&nbsp;</i>
                            </a>
                            <a href={menuSocial.github} className="text-info" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-square-github fa-4x" style={{ color: "#000" }}>&nbsp;</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarOffCanvas;