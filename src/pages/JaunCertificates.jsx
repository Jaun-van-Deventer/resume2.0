import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";
import jcert from "/assets/jcert.png"
import jcert2 from "/assets/jcert2.png"

function JaunProfile () {
    
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Profile', link: '/jaun' },
            { label: 'Projects', link: '/jaunprojects' },
            { label: 'About Me', link: '/jaunresume' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer"
        });
        }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
            <div className="cert-container" id="lPBackImg">
                <img src={jcert} alt="Harvard CS50"  /> &nbsp;
                <img src={jcert2} alt="Upskillist CS" />
            </div>
    )
}

export default JaunProfile;
