// import block
import React, { useEffect, useState } from "react";
import randomIntInator from "./utils/randomIntGenerator";

// Animation speed controller
const ANIMATION_SPEED = 1;
// set num of bars in the array
const NUMBER_OF_BARS = 420;
// Primary colour of array bars
const BAR_COLOUR = "teal-900";
// colour of compared bars (when animated)
const COMP_COLOUR = "red-900";

// STATE BLOCK
// state for array bars, init to empty
const [barArr, setBarArr] = useState<number[]>([]);
// state for number of columns slider
const [colNum, setColNum] = useState(NUMBER_OF_BARS);
// state for width (bars to take up 80% of container in total with the spacing taking up the rest)
const [barWidth, setBarWidth] = useState<number>((100 / colNum) * 0.8);

// reset bar array
const resetBarArr = (numOfBars: number) => {
  // create a new empty array
  const barArray: number[] = [];
  // loop to create each entry
  for (let i = 0; i < numOfBars; i++) {
    // for each get a random number and add it to the array
    barArray.push(
      // values increased by 10 for better visualisation
      randomIntInator(10, numOfBars + 10)
    );
  }
  // set the array as the state
  setBarArr(barArray);
  setColNum(numOfBars); // updates the global var
};

// Calculating the max value in the array to use to set bar height
const maxArrayVal: number = Math.max(...barArr);

// Re do the bar array on change
useEffect(() => {
  // update number of cols when slider changes
  resetBarArr(colNum);
}, [colNum]); // empty dependency array gets it to run just the once

// Recalculate BAR_WIDTH whenever the component is rendered
useEffect(() => {
  setBarWidth((100 / colNum) * 0.8);
}, [colNum]);