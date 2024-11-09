import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jaunImage from "../assets/jaun.jpg";
import chevonneImage from "../assets/chevonne.jpg";
import { useMenu } from "../components/MenuContext";

function Home() {
  const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
  // State to track which half the cursor is hovering over
  const [hoveredHalf, setHoveredHalf] = useState(null);

  useEffect(() => {
    setMenuTitle('Home');
    setMenuItems([
      { label: 'Home', link: '/' },
      { label: 'Jaun', link: 'Jaun' },
      { label: 'Chevonne', link: 'Chevonne' },
    ]);
    setMenuSocial({
      linkedin: "/",
      github: "/"
  });
}, [setMenuTitle, setMenuItems, setMenuSocial]);

  return (
    <div className="home-container">
      {/* Left Half - Jaun's Profile */}
      <div
        className={`half left-half ${hoveredHalf === 'left' ? 'focused' : 'blurred'}`}
        onMouseEnter={() => setHoveredHalf('left')}
        onMouseLeave={() => setHoveredHalf(null)}
      >
        <div className="content text-light">
          <img src={jaunImage} alt="Jaun" className="profile-photo" />
          <h1><strong>Jaun van Deventer</strong></h1>
          <p><strong>Graduate Developer</strong></p>
          <p>Tech Stack: JavaScript, React, MongoDB</p>
          <Link to="/jaun" className="link-style">
          <button type="button" className="btn btn-light">Click here to learn more</button>
          </Link>
        </div>
      </div>

      {/* Right Half - Chevonne's Profile */}
      <div
        className={`half right-half ${hoveredHalf === 'right' ? 'focused' : 'blurred'}`}
        onMouseEnter={() => setHoveredHalf('right')}
        onMouseLeave={() => setHoveredHalf(null)}
      >
        <div className="content text-light">
          <img src={chevonneImage} alt="Chevonne" className="profile-photo" />
          <h1><strong>Chevonne Serfontein</strong></h1>
          <p><strong>Graduate Developer</strong></p>
          <p>Tech Stack: C#, React, DynamoDB</p>
          <Link to="/chevonne" className="link-style">
          <button type="button" className="btn btn-light">Click here to learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
