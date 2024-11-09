import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function ChevonneProfile () {

    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Chevonne');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/' },
            { label: 'About Me', link: '/' },
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/chevonne-serfontein/",
            github: "https://github.com/ChevonneSerfontein2020"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <div>
                <h1>About Page</h1>
                <p>Welcome to the About page!</p>
        </div>
    )
}

export default ChevonneProfile;