// import block
import { useEffect, useState } from 'react';

// custom hook to run counter
const useCounter = () => {
    // setting state
    const [count, setCount] = useState(0);

    useEffect(() => {
    }, [count]);

    // function to increment count
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    // function to reset the count
    const resetCount = () => {
        setCount(0)
    };

    // function to output a formatted count
    const printCount = () => {
        // increment count
        increment();
        // convert to string
        const countString = String(count);
        // formatting the outputed number
        if (countString.length > 3) {
            let printString = '';
            let stringer = countString;
            while (stringer.length > 3) {
                printString = printString.concat(stringer.substring(0, 3) + ',');
                stringer = stringer.substring(3);
            }
            return printString.concat(stringer);
        }

        return countString;
    }

    return {
        count,
        increment,
        printCount,
        resetCount,
    };
}

export default useCounter;
