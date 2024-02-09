// import block
import React, { createContext, ReactNode, useState, useRef } from "react";


// interface for context value
interface StopSortContextType {
    isStopped: boolean,
    updateIsStoppedTrue: () => void;
    updateIsStoppedFalse: () => void;
    stopRef: React.MutableRefObject<boolean>;
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
    stopRef: {current: false}, // init state for the ref
});

// Provider
const StopSortContextProvider: React.FC<StopSortContextProviderProps> = ({children}) => {
    // setting state
    const [isStopped, setIsStopped] = useState(false)
    // ref for the stop condition
    const stopRef = useRef(false);

    // function to set state to true
    const updateIsStoppedTrue = () => {
        setIsStopped(true)
        stopRef.current = true;
    }
    // function to set state to false
    const updateIsStoppedFalse = () => {
        setIsStopped(false)
        stopRef.current = false;
    }

    // provide context value and functions
    const value = {
        isStopped: isStopped,
        updateIsStoppedTrue: updateIsStoppedTrue,
        updateIsStoppedFalse: updateIsStoppedFalse,
        stopRef: stopRef,
    };

    // return component
    return (
        <StopSortContext.Provider value={value}>
            {children}
        </StopSortContext.Provider>
    )

}

export default StopSortContextProvider;