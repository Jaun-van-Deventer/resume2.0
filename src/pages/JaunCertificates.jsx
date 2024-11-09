import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function JaunProfile () {
    
    const { setMenuTitle, setMenuItems } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Profile', link: '/jaun' },
            { label: 'About Me', link: '/' },
        ]);
        }, [setMenuTitle, setMenuItems]);

    return (
        <div className="cert-container">
                <img src="/src/assets/jcert.png" alt="Harvard CS50"  /> &nbsp;
                <img src="/src/assets/jcert2.png" alt="Upskillist CS" />
        </div>
    )
}

export default JaunProfile;