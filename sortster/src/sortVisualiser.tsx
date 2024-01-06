// import block
import React, { useEffect, useState } from "react";
import randomIntInator from "./utils/randomIntGenerator";

const SortVisualiser = () => {
// Animation speed controller
const ANIMATION_SPEED = 1;
// set num of bars in the array
const NUMBER_OF_BARS = 420;
// Primary colour of array bars
const BAR_COLOUR = 'teal-900';
// colour of compared bars (when animated)
const COMP_COLOUR = 'red-900';
// bar width (bars to take up 80% of container in total with the spacing taking up the rest)
const BAR_WIDTH = ((100/NUMBER_OF_BARS) * 0.8);

// state for array bars, init to empty 
const [barArr, setBarArr] = useState<number[]>([])

// reset bar array
const resetBarArr = () => {
    // create a new empty array
    const barArray: number[] = [];
    // loop to create each entry
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
        // for each get a random number and add it to the array
        barArray.push
        // values increased by 10 for better visualisation
        (randomIntInator(10, NUMBER_OF_BARS+10));
    }
    // set the array as the state
    setBarArr(barArray)
}

// After rendering reset the array
    useEffect(() => {
        console.log('setting initial array')
        resetBarArr()
    }, []) // empty dependency array gets it to run just the once

    return (
    // main div to hold everything
    <div className="max-w-bigScreen w-full h-[600rem] justify-between flex">
        {/* bars generated via map */}
        {barArr.map((value, idx) => (
            <div
            className={`
            array-bar 
            bg-teal-900 
            `}
            key={idx}
            style={{
                backgroundColor: BAR_COLOUR,
                height: `${value / 100}%`,
                width: `${BAR_WIDTH}%`
            }}
            >
            &nbsp;
            </div>
        ))}

    </div>
    )
}


export default SortVisualiser