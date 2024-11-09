import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    // State to track which half the cursor is hovering over
    const [hoveredHalf, setHoveredHalf] = useState(null);
  
    return (
      <div className="home-container">
        {/* Left Half */}
        <div
          className={`half left-half ${hoveredHalf === 'left' ? 'focused' : 'blurred'}`}
          onMouseEnter={() => setHoveredHalf('left')}
          onMouseLeave={() => setHoveredHalf(null)}
        >
          <Link to="/jaun" >
          <div className="content, link-no-underline"  style={{ textDecoration: 'none', color: 'white' }}>
            <h1>Welcome to My Resume</h1>
            <p>About me, skills, and more...</p>
          </div>
          </Link>
        </div>
  
        {/* Right Half */}
        <div
          className={`half right-half ${hoveredHalf === 'right' ? 'focused' : 'blurred'}`}
          onMouseEnter={() => setHoveredHalf('right')}
          onMouseLeave={() => setHoveredHalf(null)}
        >
          <div className="content">
            <h1>Contact Information</h1>
            <p>Let's connect!</p>
          </div>
        </div>
      </div>
    );
  };

  export default Home;