import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jaunImage from "/assets/jaun.jpg";
import otherUser from "/assets/otherUser.jpg";
import backgroundA from "/assets/left_half.png";
import backgroundB from "/assets/right_half.png";
import { useMenu } from "../components/MenuContext";

function Home() {
  const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
  const [hoveredHalf, setHoveredHalf] = useState(null);

  useEffect(() => {
    setMenuTitle('Home');
    setMenuItems([
      { label: 'Home', link: '/' },
      { label: 'Jaun', link: 'Jaun' },
      { label: 'Other User', link: 'OtherUser' },
    ]);
    setMenuSocial({
      linkedin: "/",
      github: "/"
  });
}, [setMenuTitle, setMenuItems, setMenuSocial]);

  return (
    <div className="home-container">
      <div
        className={`half left-half ${hoveredHalf === 'left' ? 'focused' : 'blurred'}`}
        style={{backgroundImage: `url(${backgroundA})`, backgroundColor: "#000"}}
        onMouseEnter={() => setHoveredHalf('left')}
        onMouseLeave={() => setHoveredHalf(null)}
      >
        <div className="content text-light">
          <img src={jaunImage} alt="Jaun" className="profile-photo" />
          <h1><strong>Jaun van Deventer</strong></h1>
          <p><strong>Software Developer</strong></p>
          <p>Tech Stack: JavaScript, React, MongoDB</p>
          <Link to="/jaun" className="link-style">
          <button type="button" className="btn btn-light">Click here to open Profile</button>
          </Link>
        </div>
      </div>

      <div
        className={`half right-half ${hoveredHalf === 'right' ? 'focused' : 'blurred'}`}
        style={{backgroundImage: `url(${backgroundB})`, backgroundColor: "#000"}}
        onMouseEnter={() => setHoveredHalf('right')}
        onMouseLeave={() => setHoveredHalf(null)}
      >
        <div className="content text-light">
          <img src={otherUser} alt="Other User" className="profile-photo" />
          <h1><strong>Other User</strong></h1>
          <p><strong>Software Developer</strong></p>
          <p>Tech Stack: C#, React, MySQL</p>
          <Link to="/" className="link-style">
          <button type="button" className="btn btn-light">Click here to open Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
