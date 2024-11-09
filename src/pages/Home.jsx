import React, { useState } from "react";
import { Link } from "react-router-dom";
import jaunImage from "../assets/jaun.jpg";
import chevonneImage from "../assets/chevonne.jpg";

function Home() {
  // State to track which half the cursor is hovering over
  const [hoveredHalf, setHoveredHalf] = useState(null);

  return (
    <div className="home-container">
      {/* Left Half - Jaun's Profile */}
      <div
        className={`half left-half ${hoveredHalf === 'left' ? 'focused' : 'blurred'}`}
        onMouseEnter={() => setHoveredHalf('left')}
        onMouseLeave={() => setHoveredHalf(null)}
      >
        <div className="content">
          <img src={jaunImage} alt="Jaun" className="profile-photo" />
          <h1><strong>Jaun van Deventer</strong></h1>
          <p><strong>Graduate Developer</strong></p>
          <p>Tech Stack: React, Angular, MongoDB</p>
          <Link to="/jaun-profile" className="link-style">
            <p>Click here to learn more!</p>
          </Link>
        </div>
      </div>

      {/* Right Half - Chevonne's Profile */}
      <div
        className={`half right-half ${hoveredHalf === 'right' ? 'focused' : 'blurred'}`}
        onMouseEnter={() => setHoveredHalf('right')}
        onMouseLeave={() => setHoveredHalf(null)}
      >
        <div className="content">
          <img src={chevonneImage} alt="Chevonne" className="profile-photo" />
          <h1><strong>Chevonne Serfontein</strong></h1>
          <p><strong>Graduate Developer</strong></p>
          <p>Tech Stack: C#, React, DynamoDB</p>
          <Link to="/chevonne-profile" className="link-style">
            <p>Click here to learn more!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
