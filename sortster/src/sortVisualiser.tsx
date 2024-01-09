// import block
import React, { useEffect, useState } from "react";
import randomIntInator from "./utils/randomIntGenerator";

const SortVisualiser = () => {
// Animation speed controller
const ANIMATION_SPEED = 1;
// set num of bars in the array
let NUMBER_OF_BARS = 420;
// Primary colour of array bars
const BAR_COLOUR = 'teal-900';
// colour of compared bars (when animated)
const COMP_COLOUR = 'red-900';
// bar width (bars to take up 80% of container in total with the spacing taking up the rest)
let BAR_WIDTH = 1;

// state for array bars, init to empty 
const [barArr, setBarArr] = useState<number[]>([])

// reset bar array
const resetBarArr = (numOfBars : number) => {
    // create a new empty array
    const barArray: number[] = [];
    // loop to create each entry
    for (let i = 0; i < numOfBars; i++) {
        // for each get a random number and add it to the array
        barArray.push
        // values increased by 10 for better visualisation
        (randomIntInator(10, numOfBars+10));
    }
    // set the array as the state
    setBarArr(barArray)
    NUMBER_OF_BARS = numOfBars // updates the global var
    BAR_WIDTH = ((100/NUMBER_OF_BARS) * 0.8) // updates the global var
}

// Calculating the max value in the array to use to set bar height
const maxArrayVal : number = Math.max(...barArr)

// state for number of columns slider
const [colNum, setColNum] = useState(NUMBER_OF_BARS)

// After rendering reset the array
    useEffect(() => {
        // update number of cols when slider changes
        resetBarArr(colNum)
    }, [colNum]) // empty dependency array gets it to run just the once


    return (
        <>
        {/* set number of columns to sort */}
            <div className="w-full">
                <p>Number of Columns</p>
                <input type="range" min="10" max="1000" value={colNum} className="slider" onChange={(e) => setColNum(parseInt(e.target.value, 10))}/>
            </div>
        {/* column container */}
            <div className="w-full h-[20rem] justify-between flex items-end">
                {/* columns generated via map */}
                {barArr.map((value, idx) => (
                    <div
                    className={`
                    array-bar 
                    bg-teal-900 
                    `}
                    key={idx}
                    style={{
                        backgroundColor: BAR_COLOUR,
                        height: `${(value / maxArrayVal) * 100}%`,
                        width: `${BAR_WIDTH}%`
                    }}
                    >
                    &nbsp;
                    </div>
                ))}
            </div>
        </>
    )
}


export default SortVisualiser