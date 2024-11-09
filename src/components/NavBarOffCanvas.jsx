import React from "react"
import { useLocation, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useMenu } from "./MenuContext";

function NavbarOffCanvas() {

    const { menuTitle, menuItems } = useMenu();

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {menuTitle}
        </a>
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
        <div
          className="offcanvas offcanvas-end text-bg-dark"
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
              className="btn-close btn-close-white"
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
              <a href="https://linkedin.com" className="" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-4x" style={{color: "#0743ab",}}>&nbsp;</i>
              </a>
              <a href="https://linkedin.com" className="text-info" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-github fa-4x" style={{color: "#fff",}}>&nbsp;</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarOffCanvas;
