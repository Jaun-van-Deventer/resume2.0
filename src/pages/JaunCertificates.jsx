import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function JaunProfile () {
    
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Profile', link: '/jaun' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'About Me', link: '/' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
        }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <div className="cert-container">
                <img src="/assets/jcert.png" alt="Harvard CS50"  /> &nbsp;
                <img src="/assets/jcert2.png" alt="Upskillist CS" />
        </div>
    )
}

export default JaunProfile;
