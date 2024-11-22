import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const JaunResume = () => {

    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Profile', link: '/Jaun' },
            { label: 'Projects', link: '/jaunprojects' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

  return (
    <div className="resume-container" id="lPBackImg">
      <div className="section aspiration">
        <h2>Aspiration</h2>
        <p>
            I am an enthusiastic, self-taught developer. I have previous
            experience in the electrical construction field and I am currently
            working in Game Support for one of the biggest game companies out
            there, but have always been passionate about technology, and would
            like to embark on a new challenge in the field of development. I 
            am self-driven, a fast learner and consider myself to be a positive
            asset to a team. I enjoy keeping up to date with the latest technology
            and trends, therefore will always be eager to learn and improve my skills.
        </p>
      </div>
      
      <div className="section contact">
        <h2>Contact Information</h2>
        <p><i className="fa-solid fa-phone"></i> Phone: 079 741 6919</p>
        <p><i className="fa-solid fa-envelope"></i> Email: jaunvdeventer78@gmail.com</p>
        <p><i className="fa-solid fa-globe"></i> Website: www.goresume.co.za</p>
        <p><i className="fa-solid fa-location-pin"></i> Location: Vaalpark, Sasolburg, Freestate</p>
      </div>

      <div className="section education">
        <h2>Education</h2>
        <p>- Diploma in Computer Science - Harvard University CS50</p>
        <p>- Udemy Certifications in Full-Stack Development, C# Master Class, JavaScript, and more</p>
      </div>

      <div className="section stack">
        <h2>Skills Stack</h2>
        <ul>
            <li>JavaScript</li>
            <li>C#</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Python</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>C</li>
        </ul>
      </div>

      <div className="section experience">
        <h2>Experience</h2>
        <h3>Game Support Agent</h3>
        <p>5CA South Africa, 2023-Present</p>
        <ul>
          <li>Technical support and client liaison</li>
          <li>Handled account and tech related issues via ticket system</li>
        </ul>
      </div>
      <div className="section">
        <h3>Technologies I'm excited about learning</h3>
        <ul>
            <li>Docker</li>
            <li>C++</li>
            <li>GoLang</li>
            <li>Rust</li>
            <li>Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default JaunResume;
