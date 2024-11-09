import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function ChevonneProfile () {

    const { setMenuTitle, setMenuItems } = useMenu();

    useEffect(() => {
        setMenuTitle('Chevonne');
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

export default ChevonneProfile;