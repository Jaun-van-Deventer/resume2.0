import React, { useEffect, useRef } from "react";
import { useMenu } from "../components/MenuContext";
import { Link } from "react-router-dom";
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import '../styles/JaunProjects.scss';
import resumeGameImage from '../assets/resume-game.png';
import invenManager from '../assets/inven-man.png';
import movieBrowser from '../assets/movie-browser.png';
import guessNum from '../assets/guess-num.png';
import pigGame from '../assets/pig-game.png';
import quicklink from '../assets/quicklink.png'

function JaunProjects() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const carouselRef = useRef(null);

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Profile', link: '/Jaun' },
            { label: 'About Me', link: '/' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    useEffect(() => {
        const options = {
            accessibility: true,
            prevNextButtons: true,
            pageDots: true,
            setGallerySize: false,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 60,
                y2: 45,
                x3: 15
            }
        };

        const flkty = new Flickity(carouselRef.current, options);

        // Parallax scroll effect for each slide
        flkty.on('scroll', () => {
            const slides = carouselRef.current.getElementsByClassName('carousel-cell');
            flkty.slides.forEach((slide, i) => {
                const image = slides[i];
                const x = (slide.target + flkty.x) * -1 / 3;
                image.style.backgroundPosition = `${x}px`;
            });
        });

        return () => flkty.destroy(); // Cleanup on unmount
    }, []);

    return (
        <div className="hero-slider" ref={carouselRef} data-carousel>
            <div className="carousel-cell" style={{ backgroundImage: `url(${resumeGameImage})` }}>
                <div className="overlay"></div>
                <div className="inner">
                    <h3 className="subtitle">Resume Game</h3>
                    <h3 className="">Gamified way to explore my resume using Kaboom.js and Vite</h3>
                    <a href="https://flickity.metafizzy.co/" target="_blank" rel="noopener noreferrer" className="btn">Tell me more</a>
                </div>
            </div>
            <div className="carousel-cell" style={{ backgroundImage: `url(${quicklink})` }}>
                <div className="overlay"></div>
                <div className="inner">
                    <h3 className="subtitle">Quicklink-QR</h3>
                    <h3 className="">An extension that I made to turn any link into a scannable and shareable QR code</h3>
                    <a href="https://github.com/Jaun-van-Deventer/Quicklink-QR" target="_blank" rel="noopener noreferrer" className="btn">Tell me more</a>
                </div>
            </div>
            <div className="carousel-cell" style={{ backgroundImage: `url(${invenManager})` }}>
                <div className="overlay"></div>
                <div className="inner">
                    <h3 className="subtitle">Inventory Manager</h3>
                    <h3 className="">Inventory management system using React, Node and MongoDB</h3>
                    <a href="https://flickity.metafizzy.co/" target="_blank" rel="noopener noreferrer" className="btn">Tell me more</a>
                </div>
            </div>
            <div className="carousel-cell" style={{ backgroundImage: `url(${movieBrowser})` }}>
                <div className="overlay"></div>
                <div className="inner">
                    <h3 className="subtitle">Movie Browser</h3>
                    <h3 className="">An unfinished movie browser that lets you search for any movie using React, API implementation needs to be finished</h3>
                    <a href="https://jaun-van-deventer.github.io/react-movie-database/" target="_blank" rel="noopener noreferrer" className="btn">Tell me more</a>
                </div>
            </div>
            <div className="carousel-cell" style={{ backgroundImage: `url(${guessNum})` }}>
                <div className="overlay"></div>
                <div className="inner">
                    <h3 className="subtitle">Guess My Number</h3>
                    <h3 className="">A simple guess my number game using JavaScript,HTML and CSS</h3>
                    <a href="https://jaun-van-deventer.github.io/guess-my-number/" target="_blank" rel="noopener noreferrer" className="btn">Tell me more</a>
                </div>
            </div>
            <div className="carousel-cell" style={{ backgroundImage: `url(${pigGame})` }}>
                <div className="overlay"></div>
                <div className="inner">
                    <h3 className="subtitle">Pig Game</h3>
                    <h3 className="">Another simple Javascript game with HTML and CSS, the first player to 100 wins, but if you roll a 1 you lose all current points, you can hold on to your points by pressing the hold button</h3>
                    <a href="https://flickity.metafizzy.co/" target="_blank" rel="noopener noreferrer" className="btn">Tell me more</a>
                </div>
            </div>
        </div>
    );
}

export default JaunProjects;
