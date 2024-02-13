// import block
import { useEffect, useState } from "react";

// custom hook to run timer
const useTimer = (shouldStart :boolean, resetTimer:boolean, stopRef: React.MutableRefObject<boolean>) => {
    
    // Setting units
    const [hundrethOfaSecond, sethundrethOfaSecond] = useState(0);

    useEffect(() => {
        let interval;

        // only start when start state is truthy
        if (shouldStart) {
        interval = setInterval(() => {
            // check to see if the timer has been stopped
            if (!stopRef.current){
            // increment the timer by 1
            sethundrethOfaSecond((prevhundrethOfaSecond) => prevhundrethOfaSecond + 1);
            }
            // every hundreth of a second
        }, 10);
    }

    // clear the interval
    return () => clearInterval(interval);
    }, [shouldStart, stopRef]);

    // Reset the timer
    useEffect(() => {
        if (resetTimer) {
            sethundrethOfaSecond(0);
        }
    }, [resetTimer]);

    // clock display
        // calc hours
        const hours = Math.floor(hundrethOfaSecond / 360000)
        // calc mins
        const mins = Math.floor((hundrethOfaSecond % 360000) / 6000);
        // calc seconds
        const seconds = Math.floor((hundrethOfaSecond % 6000) / 100);
        // format all to two digits
        const printHours = hours.toString().padStart(2, '0');
        const printMins = mins.toString().padStart(2, '0');
        const printSeconds =  seconds.toString().padStart(2, '0');
        const printHundreths = hundrethOfaSecond.toString().slice(-2).padStart(2, '0');

        // defaults to show only seconds and hundreths first
        let timeStamp: string = `${printSeconds}:${printHundreths}`;
        // when 1 min is passed show it
        if (Number(printMins) >= 1) {
            timeStamp = `${printMins}:` + timeStamp
        }
        // when 1 hour is passed show it
        if (Number(printHours) >= 1) {
            timeStamp = `${printHours}:` + timeStamp
        }

    return timeStamp;
}

export default useTimer;