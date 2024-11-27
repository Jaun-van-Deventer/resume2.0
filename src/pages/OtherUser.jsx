import React, { useEffect } from "react";
import { useMenu } from "../components/MenuContext";

function OtherUser () {

    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();

    useEffect(() => {
        setMenuTitle('Other User');
        setMenuItems([
            { label: 'Home', link: '/' },
            { label: 'Certificates', link: '/' },
            { label: 'About Me', link: '/' },
        ]);
        setMenuSocial({
            linkedin: "#",
            github: "#"
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    return (
        <div>
                <h1>About Page</h1>
                <p>Welcome to the About page!</p>
        </div>
    )
}

export default OtherUser;