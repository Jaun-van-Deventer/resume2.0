import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [menuTitle, setMenuTitle] = useState('Home');
    const [menuItems, setMenuItems] = useState([]);

    return (
        <MenuContext.Provider value={{ menuTitle, setMenuTitle, menuItems, setMenuItems }}>
        {children}
        </MenuContext.Provider>
    );
};