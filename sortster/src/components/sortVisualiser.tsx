// import block
import { useContext, useEffect, useState } from "react";
import randomIntInator from "../utils/randomIntGenerator";
import bogoSort from "../sortingAlogorithms/bogoSort";
import useTimer from "../customHooks/useTimer";
// context imports
import { ColumnNumberContext } from "../contexts/columnNumberContext";
import { StopSortContext } from "../contexts/stopSortContext";
import miracleSort from "../sortingAlogorithms/miracleSort";

const SortVisualiser = () => {
  // Animation speed controller
  //const ANIMATION_SPEED = 1;
  // Primary colour of array bars
  const BAR_COLOUR = "teal-900";
  // colour of compared bars (when animated)
  //const COMP_COLOUR = "red-900";

  // STATE BLOCK
    // Global states
    // number of columns from context
    const { columnNumber, updateColumnNumber } = useContext(ColumnNumberContext)
    // is stopped for stop/start and reset functions
    const { isStopped, updateIsStoppedTrue, updateIsStoppedFalse, stopRef } = useContext(
      StopSortContext
    );

    // Local states
    // state for array bars, init to empty (local state allows it to be animated)
    const [barArr, setBarArr] = useState<number[]>([]);
    // state for width (bars to take up 80% of container in total with the spacing taking up the rest)
    const [barWidth, setBarWidth] = useState<number>((100 / columnNumber) * 0.8);
    // state for move number counter
    const [moveCount, setMoveCount] = useState(0)

    // state for timer
    const [startTimer, setStartTimer] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);
    const timerReadout = useTimer(startTimer, resetTimer, stopRef);

    // state to store array at start of sort
    const [barArrReset, setBarArrResetState] = useState(barArr)

    // state for drop down selection
    const [sortChoice, setSortChoice] = useState('')


  // reset bar array
  const resetBarArr = (numOfBars: number) => {
    // create a new empty array
    const barArray: number[] = [];
    // loop to create each entry
    for (let i = 0; i < numOfBars; i++) {
      // for each get a random number and add it to the array
      barArray.push(
        // minimum values increased to 2 for better visualisation
        randomIntInator(2, numOfBars + 10)
      );
    }
    // set the array as the state
    setBarArr(barArray);
    updateColumnNumber(numOfBars); // updates the global var
  };

  // Calculating the max value in the array to use to set bar height
  const maxArrayVal: number = Math.max(...barArr);

  // Re do the bar array on change
  useEffect(() => {
    // update number of cols when slider changes
    resetBarArr(columnNumber);
  }, [columnNumber]); // empty dependency array gets it to run just the once

  // Recalculate BAR_WIDTH whenever the component is rendered
  useEffect(() => {
    setBarWidth((100 / columnNumber) * 0.8);
  }, [columnNumber]);

  // Animation controller
  function startButtonHandler():void {
    // set reset value
    setBarArrResetState(barArr);
    // start timer
    setStartTimer(true);
    // reset the state of timer reset
    setResetTimer(false);
    // Call the sort algo
    sortAlgorithm(sortChoice)

    // If sorting is not in progress, start a new sort
    if (isStopped) {
      updateIsStoppedFalse(); // Reset the stop condition
      sortAlgorithm(sortChoice);
    }
 
  }

  // onChange handler to update the sortChoice state
  const sortChangeHandler = (dropDownChoice: React.ChangeEvent<HTMLSelectElement>) => {
    setSortChoice(dropDownChoice.target.value)
  };


  // Start button handler and sorting algorithm switch
  const sortAlgorithm = (SortSelection:string) => {
    switch(SortSelection) {
      case 'bogo sort':
        bogoSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
        break;
      case 'miracle sort':
        miracleSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
        break;
    }
  }


  // Stop button handler
  const stopSort = () => {
    updateIsStoppedTrue();
    console.log(`Stop button clicked isStopped state is now ${isStopped}`)
  }

  // Log isStopped state when it changes
  useEffect(() => {
  console.log(`isStopped state is now ${isStopped}`);
  }, [isStopped]);
  

  // Reset button handler
  const resetSort = () => {
    // stop sort in progress
    updateIsStoppedTrue();
    console.log(`Reset button clicked isStopped state is now ${isStopped}`)
    // reset column state
    setBarArr(barArrReset);
    // reset move count
    setMoveCount(0);
    // reset the timer
    setResetTimer(true);
  }

  return (
    <>
      {/* Master columbn container */}
      <div className="border-slate-900 dark:border-stone-500 border-2 p-4 m-4 rounded-2xl text-xs sm:text-lg">
      {/* header control container */}
        <div className="flex justify-between mb-6">
        {/* sort method selector */}
            <div className="w-52">
                <select className="sortMethod pl-1 pr-1 rounded-md" onChange={sortChangeHandler}>
                    <option value={''} disabled selected>Choose sort alogorithm</option>
                    <option value={'bogo sort'}>Bogo sort</option>
                    <option value={'miracle sort'}>Miracle sort</option>
                </select>
            </div>
        {/* number of moves counter */}
            <div className="inline-flex w-64 text-center">
                <p>Total number of moves:</p><p>&nbsp;</p><p>{moveCount}</p>
            </div>
        {/* timer */}
            <div className="w-52 text-right">
                <p>{timerReadout}</p>
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
    {/* Start / Reset buttons */}
       <div className="md:w-3/12 flex justify-between content-center ml-auto mr-auto">
          <button className="md:pl-8 md:pr-8" onClick={startButtonHandler}>
            Start
          </button>
          <button className="md:pl-8 md:pr-8" onClick={stopSort}>
            Stop
          </button>
          <button className="md:pl-8 md:pr-8" onClick={resetSort}>
            Reset
          </button>
      </div>
    </>
  );
};

export default SortVisualiser;
