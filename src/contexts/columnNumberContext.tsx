// import block
import React, { createContext, ReactNode, useState } from "react";

// interface for context value
interface ColumnNumberContextType {
    columnNumber: number;
    updateColumnNumber: (newColNum: number | ((prevColNum: number) => number)) => void;
}

// interface for children
interface ChildrenContextProviderProps {
    children: ReactNode;
}

// defaul context values
const defaultColumnNumberContextValue: ColumnNumberContextType = {
    columnNumber: 420,
    updateColumnNumber: () => {},
};

// init context with default values
export const ColumnNumberContext = createContext<ColumnNumberContextType>(defaultColumnNumberContextValue);

// Provider 
const ColumnNumberContextProvider: React.FC<ChildrenContextProviderProps> = ({ children }) => {
    //Use state to manage the column number
    const [colNum, setColNum] = useState(420);

    // function to update the number of columns
    const updateColumnNumber = (newColNum: number | ((prevColNum: number) => number)) => {
        if (typeof newColNum === 'function') {
            // If it's a function, update the column number using the function
            setColNum((prevColNum) => (newColNum as (prevColNum: number) => number)(prevColNum));
        } else {
            // If it's a number, update the column number directly
            setColNum(newColNum);
        }
    };
    
    // provide context value and update function
    const value = {
        columnNumber: colNum,
        updateColumnNumber: updateColumnNumber,
    };
    
    // return component
    return (
        <ColumnNumberContext.Provider value={value}>
            {children}
        </ColumnNumberContext.Provider>
        )
        
};

// export to use elsewhere 
export default ColumnNumberContextProvider;