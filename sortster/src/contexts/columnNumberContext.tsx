// import block
import React, { createContext, ReactNode, useState } from "react";

// interface for context value
interface ColumnNumberContextType {
    columnNumber: number;
    updateColumnNumber: (newColNum: number) => void;
}

// interface for children
interface ChildrenContextProviderProps {
    children: ReactNode;
}

// this holds context for the number of columns, sets default values
export const ColumnNumberContext = createContext<ColumnNumberContextType>({
    columnNumber: 420,
    updateColumnNumber: () => {},
});


const ColumnNumberContextProvider: React.FC<ChildrenContextProviderProps> = ({ children }) => {
    //Use state to manage the column number
    const [colNum, setColNum] = useState(420);

    // function to update the number of columns
    const updateColumnNumber = (newColNum :number) => {
        setColNum(newColNum)
    }
    
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