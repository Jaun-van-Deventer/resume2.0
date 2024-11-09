import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function JaunProfile () {
    
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/jauncert' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'About Me', link: '/' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <div>
                <h1>About Page</h1>
                <p>Welcome to the About page!</p>
        </div>
    )
}

export default JaunProfile;