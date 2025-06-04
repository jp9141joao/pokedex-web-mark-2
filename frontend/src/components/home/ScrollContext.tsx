import React, { createContext, useContext, useState } from "react"

// Create a context with TypeScript types for scroll state and setter function.
// The context value can be either the defined object or undefined initially.
const ScrollContext = createContext<{
  scroll: 'Left' | 'Right' | 'Bottom',
  setScroll: (value: 'Left' | 'Right' | 'Bottom') => void
} | undefined>(undefined);

// ScrollProvider component that wraps children and provides scroll state
export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    
    // Internal state to hold current scroll position, defaulting to 'Left'
    const [ scroll, setScroll ] = useState<'Left' | 'Right' | 'Bottom'>('Left');

    return (
        // Provide scroll state and setter function to descendant components
        <ScrollContext.Provider value={{ scroll, setScroll }}>
            { children }
        </ScrollContext.Provider>
    )
};

// Custom hook to consume ScrollContext values easily
export const useScroll = () => {

    // Get the context value
    const context = useContext(ScrollContext);

    // If the context is undefined, it means this hook is used outside the provider
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    
    // Return the scroll state and setter function
    return context;
};
