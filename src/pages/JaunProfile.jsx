import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function JaunProfile () {
    
    const { setMenuTitle, setMenuItems } = useMenu();

    useEffect(() => {
        setMenuTitle('Jaun');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/' },
            { label: 'About Me', link: '/' },
        ]);
        }, [setMenuTitle, setMenuItems]);

    return (
        <div>
                <h1>About Page</h1>
                <p>Welcome to the About page!</p>
        </div>
    )
}

export default JaunProfile;