import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Home(){
    // State to track which half the cursor is hovering over
    const [hoveredHalf, setHoveredHalf] = useState(null);
  
    return (
      <div className="home-container">
        {/* Left Half */}
        <div
          className={`half left-half ${hoveredHalf === 'left' ? 'focused' : 'blurred'} `}
          onMouseEnter={() => setHoveredHalf('left')}
          onMouseLeave={() => setHoveredHalf(null)}
        >
          <div className="content"  style={{ color: 'white' }}>
            <h1>Welcome to My Resume</h1>
            <p>About me, skills, and more...</p>
            <Link to="/jaun" >
            <button type="button" class="btn btn-light">Click here to learn more</button>
            </Link>
          </div>
        </div>
  
        {/* Right Half */}
        <div
          className={`half right-half ${hoveredHalf === 'right' ? 'focused' : 'blurred'}`}
          onMouseEnter={() => setHoveredHalf('right')}
          onMouseLeave={() => setHoveredHalf(null)}
        >
          <div className="content" style={{ color: 'white' }}>
            <h1>Contact Information</h1>
            <p>Let's connect!</p>
            <Link to="/chevonne" >
            <button type="button" class="btn btn-light">Click here to learn more</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default Home;