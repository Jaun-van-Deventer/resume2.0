import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";
import { Link } from "react-router-dom";
import "../App.css";
import jaunImage from "/assets/jaun.jpg";


function JaunProfile() {
    const { setMenuTitle, setMenuItems, setMenuSocial, menuItems } = useMenu();

    useEffect(() => {
        setMenuTitle("Jaun");
        setMenuItems([
            { label: "Home", link: "/" },
            { label: "Certificates", link: "/jauncert" },
            { label: "Projects", link: "/jaunprojects" },
            { label: "About Me", link: "/jaunresume" },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer",
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <div id="lPBackImg">
            <div className="center">
                <img src={jaunImage} alt="Jaun" className="profile-photo profile-container" /> <br />
                <h1 className="light-text">Jaun Van Deventer</h1>
                <p className="section">
                    Hi there, and welcome to my profile. <br /> <br />
                    My name is <strong>Jaun</strong> and I'm a self-taught developer with a passion for building impactful applications and a solid background in both front-end and back-end technologies. My skill set spans a variety of languages and frameworks, including <strong> JavaScript, C#, Python, Node.js, React, PHP, and SQL</strong>. I enjoy creating intuitive, responsive front-end experiences with <strong>Bootstrap, CSS, and HTML5,</strong> while also building efficient back-end systems using <strong>MongoDB and Node.</strong> <br /><br />
                    Most of my current projects, including this website, are hosted on GitHub, showcasing my commitment to clean, maintainable code and open-source collaboration. I’m always looking to expand my knowledge, tackle challenging projects, and contribute to meaningful solutions in tech. You can view some of my projects from the Projects page, however that's only a few of them a lot of the others are not deployed yet or won't be deployed.
                </p>
            </div>
            <div className="bottom-buttons-container">
                <Link to="/" className="btn btn-info mx-2 my-1 text-light"><strong>Home</strong></Link>
                <Link to="/jauncert" className="btn btn-info mx-2 my-1 text-light"><strong>Certificates</strong></Link>
                <Link to="/jaunprojects" className="btn btn-info mx-2 my-1 text-light"><strong>Projects</strong></Link>
                <Link to="/jaunresume" className="btn btn-info mx-2 my-1 text-light"><strong>About Me</strong></Link>
            </div>

        </div>
    );
}

export default JaunProfile;
