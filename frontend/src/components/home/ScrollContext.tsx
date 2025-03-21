import React, { createContext, useContext, useState } from "react"

const ScrollContext = createContext<{ scroll: 'Left' | 'Right' | 'Bottom', setScroll: (value: 'Left' | 'Right' | 'Bottom') => void } | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [ scroll, setScroll ] = useState<'Left' | 'Right' | 'Bottom'>('Left');

    return (
        <ScrollContext.Provider value={{ scroll, setScroll }}>
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