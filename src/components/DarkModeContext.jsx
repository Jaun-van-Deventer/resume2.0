import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        try {
            return localStorage.getItem("darkMode") === "true";
        } catch {
            return false;
        }
    });

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
        try {
            localStorage.setItem("darkMode", isDarkMode);
        } catch {
            // localStorage unavailable — silently ignore
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};