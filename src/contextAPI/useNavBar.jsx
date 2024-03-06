import { createContext, useContext, useState } from "react";

export const NavContext = createContext({
    openNav: true,
    toggleNav: ()=>{}
})

export const NavBarProvider = ({ children }) => {
    const [OpenNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav((prev) => (!prev));
    };

    return (
        <NavContext.Provider value={{ OpenNav, toggleNav }}>
            {children}
        </NavContext.Provider>
    );
};
export const useNavBar = () => useContext(NavContext);