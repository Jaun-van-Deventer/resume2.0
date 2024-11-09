import React, { useEffect, useRef } from "react";
import { useMenu } from "../components/MenuContext";
import "../styles/jaunProjects.css";

function JaunProjects() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const dragContainerRef = useRef(null);
    const spinContainerRef = useRef(null);
    let radius = 240;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Profile', link: 'Jaun' },
            { label: 'About Me', link: '/' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    useEffect(() => {
        const odrag = dragContainerRef.current;
        const ospin = spinContainerRef.current;
        const aImg = ospin.getElementsByTagName('img');

        ospin.style.width = `${imgWidth}px`;
        ospin.style.height = `${imgHeight}px`;

        const ground = document.getElementById('ground');
        ground.style.width = `${radius * 3}px`;
        ground.style.height = `${radius * 3}px`;

        function init(delayTime) {
            for (let i = 0; i < aImg.length; i++) {
                aImg[i].style.transform = `rotateY(${i * (360 / aImg.length)}deg) translateZ(${radius}px)`;
                aImg[i].style.transition = "transform 1s";
                aImg[i].style.transitionDelay = delayTime || `${(aImg.length - i) / 4}s`;
            }
        }

        let tX = 0, tY = 10, desX = 0, desY = 0;
        const applyTransform = () => {
            if (tY > 180) tY = 180;
            if (tY < 0) tY = 0;
            odrag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
        };

        if (autoRotate) {
            ospin.style.animation = `${rotateSpeed > 0 ? 'spin' : 'spinRevert'} ${Math.abs(rotateSpeed)}s infinite linear`;
        }

        const pointerDownHandler = (e) => {
            e.preventDefault();
            const sX = e.clientX;
            const sY = e.clientY;

            const pointerMoveHandler = (e) => {
                const nX = e.clientX;
                const nY = e.clientY;
                desX = nX - sX;
                desY = nY - sY;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTransform();
            };

            const pointerUpHandler = () => {
                document.removeEventListener("pointermove", pointerMoveHandler);
                document.removeEventListener("pointerup", pointerUpHandler);
            };

            document.addEventListener("pointermove", pointerMoveHandler);
            document.addEventListener("pointerup", pointerUpHandler);
        };

        odrag.addEventListener("pointerdown", pointerDownHandler);
        document.addEventListener("wheel", (e) => {
            const d = e.deltaY / 20;
            radius += d;
            init(1);
        });

        init(1000);

        return () => {
            odrag.removeEventListener("pointerdown", pointerDownHandler);
            document.removeEventListener("wheel", init);
        };
    }, []);

    return (
        <div ref={dragContainerRef} id="drag-container">
            <div ref={spinContainerRef} id="spin-container">
                {[
                    "/src/assets/guess-num.png",
                    "/src/assets/pig-game.png",
                    "/src/assets/resume.png",
                    "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                ].map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
                <p>My Projects</p>
            </div>
            <div id="ground"></div>
        </div>
    );
}

export default JaunProjects;
