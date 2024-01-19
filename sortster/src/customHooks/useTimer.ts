// import block
import { useEffect, useState } from "react";

// custom hook to run timer
const useTimer = (shouldStart :boolean) => {
    // Setting units
    const [hundrethOfaSecond, sethundrethOfaSecond] = useState(0);

    useEffect(() => {
        let interval

        // only start when start state is truthy
        if (shouldStart) {
        interval = setInterval(() => {
            sethundrethOfaSecond((prevhundrethOfaSecond) => prevhundrethOfaSecond + 1);
        }, 10);
    }

        // clear the interval
        return () => clearInterval(interval);
    }, [shouldStart]);
    return hundrethOfaSecond;
}

export default useTimer;