import React, { createContext, useContext, useState } from "react"

const ScrollContext = createContext<{ scrollLeft: boolean, setScrollLeft: (value: boolean) => void } | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [ scrollLeft, setScrollLeft ] = useState<boolean>(false);

    return (
        <ScrollContext.Provider value={{ scrollLeft, setScrollLeft }}>
            { children }
        </ScrollContext.Provider>
    )
};

export const useScroll = () => {

    const context = useContext(ScrollContext);

    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    
    return context;
};