import { useEffect } from "react";
import { useMenu } from "../components/MenuContext";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaJs, FaGitAlt, FaNodeJs, FaReact, FaPython, FaBootstrap, FaCss3Alt, FaHtml5, FaPhp, FaCode,  FaDocker, FaRust , FaPhone, FaEnvelope, FaGlobe, FaLocationArrow } from "react-icons/fa";
import { SiGo, SiCplusplus, SiPostman, SiMongodb, SiMysql, SiC  } from "react-icons/si"; // For GoLang and C++

const JaunResume = () => {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Profile', link: '/Jaun' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'Blog', link: '/blog' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <div className="resume-container">
            {/* Aspiration Section */}
            <div className="section aspiration">
                <h2>Aspiration</h2>
                <p>
                    I am an enthusiastic, self-taught developer with a background in the electrical field and game support. Passionate about technology, I am eager to transition into a development role where I can leverage my problem-solving skills and fast-learning ability. I thrive in team environments and am always excited to learn and grow.
                </p>
            </div>

            {/* Contact Section */}
            <div className="section contact">
                <h2>Contact Information</h2>
                <p><i className="contact-icon"><FaPhone/></i> Phone: 079 741 6919</p>
                <p><i className="contact-icon">< FaEnvelope/></i> Email: jaunvdeventer78@gmail.com</p>
                <p><i className="contact-icon"><FaGlobe/></i> Website: www.goresume.co.za</p>
                <p><i className="contact-icon"><FaLocationArrow/></i> Location: Vaalpark, Sasolburg, Freestate</p>
            </div>

            {/* Education Section */}
            <div className="section education">
                <h2>Education</h2>
                <p>- Diploma in Computer Science - HarvardX CS50</p>
                <p>- Udemy Certifications in Full-Stack Development, C# Master Class, JavaScript, and more</p>
            </div>

            {/* Skills Stack Section */}
            <div className="section stack">
                <h2>Skills Stack</h2>
                <div className="skills-grid">
                    <div className="skill-tile"><FaJs /> JavaScript</div>
                    <div className="skill-tile"><FaCode /> C#</div>
                    <div className="skill-tile"><FaGitAlt /> Git</div>
                    <div className="skill-tile"><FaNodeJs /> Node.js</div>
                    <div className="skill-tile"><FaReact /> React</div>
                    <div className="skill-tile"><FaPython /> Python</div>
                    <div className="skill-tile"><FaBootstrap /> Bootstrap</div>
                    <div className="skill-tile"><FaCss3Alt /> CSS</div>
                    <div className="skill-tile"><FaHtml5 /> HTML5</div>
                    <div className="skill-tile"><FaPhp /> PHP</div>
                    <div className="skill-tile"><SiMysql /> SQL</div>
                    <div className="skill-tile"><SiMongodb /> MongoDB</div>
                    <div className="skill-tile"><SiC /> C</div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="section experience">
                <h2>Experience</h2>
                <h3>Game Support Agent</h3>
                <p>5CA South Africa, 2023-Present</p>
                <ul>
                    <li>Provided technical support and client liaison.</li>
                    <li>Resolved account and tech-related issues via a ticket system.</li>
                </ul>
            </div>

            {/* Technologies I'm Excited About Section */}
            <div className="section">
              <h3>Technologies I&apos;m Excited About Learning</h3>
              <div className="skills-grid">
                  <div className="skill-tile"><FaDocker /> Docker</div>
                  <div className="skill-tile"><SiCplusplus /> C++</div>
                  <div className="skill-tile"><SiGo/> GoLang</div>
                  <div className="skill-tile"><FaRust /> Rust</div>
                  <div className="skill-tile"><SiPostman /> Postman</div>
              </div>
            </div>
</div>
    );
};

export default JaunResume;