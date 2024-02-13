// import block
import { useState } from "react";

// component to manage the start/stop and reset of the sorting
export default function StartResetButton() {
  // State to track whether sorting is currently in progress
  const [sortingInProgress, setSortingInProgress] = useState(false);

    

  // Function to handle the start button click
  const handleStartClick = () => {
    console.log(`Starting sort(s)`)
    if (!sortingInProgress) {
      setSortingInProgress(true);
    }
  };

  // Function to reset the sorts
  const handleResetClick = () => {
    console.log(`Stopping and resetting sort(s)`)
    null;
  }

  return (
    <>
      <div className="md:w-1/5 flex justify-between content-center ml-auto mr-auto">
        <button className="md:pl-8 md:pr-8" onClick={handleStartClick}>
          Start
        </button>
        <button className="md:pl-8 md:pr-8" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </>
  );
}