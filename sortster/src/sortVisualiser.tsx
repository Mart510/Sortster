// import block
import React, { useEffect, useState } from "react";
import randomIntInator from "./utils/randomIntGenerator";

const SortVisualiser = () => {
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

  return (
    <>
      {/* set number of columns to sort */}
      <div className="w-3/5 flex items-center m-auto justify-center">
        <p>Number of Columns:</p>
        {/* input slider to control num of columns */}
        <input
          type="range"
          min="10"
          max="1000"
          value={colNum}
          className="slider ml-1"
          onChange={(e) => setColNum(parseInt(e.target.value, 10))}
        />
        {/* box to display the num of columns and allow it to be typed in */}
        <input
          type="number"
          min="10"
          max="1000"
          value={colNum}
          className="number ml-4 pl-2 pr-2 rounded-lg"
          onChange={(e) => setColNum(parseInt(e.target.value, 10))}
        />
      </div>
      {/* Master columbn container */}
      <div className="border-slate-900 dark:border-stone-500 border-2 p-4 m-4 rounded-2xl">
      {/* header control container */}
        <div className="flex justify-between">
        {/* sort method selector */}
            <div>
                <select name="sortMethod">
                    <option value={''} disabled selected>Choose sort alogorithm</option>
                    <option value={'bogoSort'}>Bogo sort</option>
                </select>
            </div>
        {/* number of moves counter */}
            <div className="inline-flex">
                <p>Total number of moves:</p><p>{`moveCount`}</p>
            </div>
        {/* timer */}
            <div>
                <p>00:00</p>
            </div>
        </div>
      {/* column container */}
      <div className="h-[20rem] justify-between flex items-end box-content">
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
              width: `${barWidth}%`,
            }}
          >
            &nbsp;
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SortVisualiser;
