// import block
import { useContext, useEffect, useState } from "react";
import randomIntInator from "../utils/randomIntGenerator";
import bogoSort from "../sortingAlogorithms/bogoSort";
import useTimer from "../customHooks/useTimer";
// context imports
import { ColumnNumberContext } from "../contexts/columnNumberContext";
import { StopSortContext } from "../contexts/stopSortContext";
// sort algo imports
import miracleSort from "../sortingAlogorithms/miracleSort";
import stalinSort from "../sortingAlogorithms/stalinSort";
import thanosSort from "../sortingAlogorithms/thanosSort";
import zenSort from "../sortingAlogorithms/zenSort";
import genghisKhanSort from "../sortingAlogorithms/genghisKhanSort";
import communistSort from "../sortingAlogorithms/communistSort";

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

    // If sorting is in progress, do nothing
    if (!isStopped) {
      console.log("Sort is already running. Please wait.");
      return;
    }

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
    // if stopped is false, flip it to true on change to enable the start button
    if (!isStopped) {
      updateIsStoppedTrue();
    }
    // if it's already been working, reset the number of moves and the timer before starting the new one
    if (moveCount > 0) {
      setMoveCount(0);
    }
    if (timerReadout != '00:00') {
      setResetTimer(true);
    }
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
      case 'stalin sort':
        stalinSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
        break;
      case 'thanos sort':
        thanosSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
        break;
      case 'zen sort':
        zenSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
        break;
      case 'ghenghis khan sort':
        genghisKhanSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
        break;
      case 'communist sort':
        communistSort(setBarArr, barArr.slice(), setMoveCount, stopRef);
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
      {/* Master column container */}
      <div className="border-slate-900 dark:border-stone-500 border-2 p-4 m-4 rounded-2xl text-xs sm:text-lg">
      {/* header control container */}
        <div className="flex flex-col content-center lg:flex-row lg:justify-between mb-6 w-full">
        {/* sort method selector */}
            <div className="w-52 ml-auto mr-auto lg:ml-0 lg:mr-0 pb-3 lg:pb-0">
                <select className="sortMethod pl-1 pr-1 rounded-md" onChange={sortChangeHandler}>
                    <option value={''} disabled selected>Choose sort alogorithm</option>
                    <option value={'bogo sort'}>Bogo sort</option>
                    <option value={'miracle sort'}>Miracle sort</option>
                    <option value={'stalin sort'}>Stalin sort</option>
                    <option value={'thanos sort'}>Thanos sort</option>
                    <option value={'zen sort'}>Zen sort</option>
                    <option value={'ghenghis khan sort'}>Ghenghis Khan sort</option>
                    <option value={'communist sort'}>Communist sort</option>
                </select>
            </div>
        {/* number of moves counter */}
            <div className="inline-flex w-auto lg:min-w-96 text-center ml-auto mr-auto lg:ml-0 lg:mr-0 pb-3 lg:pb-0">
                <p>Total number of moves:</p><p>&nbsp;</p><p>{moveCount}</p>
            </div>
        {/* timer */}
            <div className="w-auto lg:w-52 text-center lg:text-right ml-auto mr-auto lg:ml-0 lg:mr-0 pb-3 lg:pb-0">
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
          <button className="md:pl-8 md:pr-8 disabled:bg-gray-800 disabled:opacity-50" onClick={startButtonHandler} disabled={!isStopped}>
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
