// import block
import React, { createContext, ReactNode, useState } from "react";


// interface for context value
interface StopSortContextType {
    isStopped: boolean,
    updateIsStoppedTrue: () => void;
    updateIsStoppedFalse: () => void;
}

// interface for children
interface StopSortContextProviderProps {
    children: ReactNode;
}

// this context is to handle stopping/intertuppting the sort algorithms
export const StopSortContext = createContext<StopSortContextType>({
    isStopped: false,
    updateIsStoppedTrue: () => {},
    updateIsStoppedFalse: () => {},
});

// Provider
const StopSortContextProvider: React.FC<StopSortContextProviderProps> = ({children}) => {
    // setting state
    const [isStopped, setIsStopped] = useState(false)

    // function to set state to true
    const updateIsStoppedTrue = () => {
        setIsStopped(true)
    }
    // function to set state to false
    const updateIsStoppedFalse = () => {
        setIsStopped(false)
    }

    // provide context value and functions
    const value = {
        isStopped: isStopped,
        updateIsStoppedTrue: updateIsStoppedTrue,
        updateIsStoppedFalse: updateIsStoppedFalse,
    };

    // return component
    return (
        <StopSortContext.Provider value={value}>
            {children}
        </StopSortContext.Provider>
    )

}

export default StopSortContextProvider;