// import block
import { useContext } from "react"
import { ColumnNumberContext } from "../contexts/columnNumberContext"

// component to manage the column controls at the top of the page
export default function SortControls() {
    // state block
    const { columnNumber, updateColumnNumber } = useContext(ColumnNumberContext)

    // when scroll wheel over slider or input box increment/decrement by 10
    const handleWheelInput = (e: React.WheelEvent<HTMLInputElement>) => {
    // TO DO
    // Add way to stop the window scrolling when interacting with these elements using on onWheel
        // change number in input
        if (e.deltaY > 0) {
            // scroll down, decrement
            // check if number is a multiple of 10
            if (columnNumber % 10 !== 0) {
                // if not round it down to the next 10
                updateColumnNumber((prevColNum: number) => Math.ceil(prevColNum / 10) * 10);
          }
          updateColumnNumber((prevColNum: number) => Math.max(10, prevColNum - 10));
        } else {
          // scroll up, increment
          // check if number is a multiple of 10
          if (columnNumber % 10 !== 0) {
              // if not round it up to the next 10
              updateColumnNumber((prevColNum: number) => Math.floor(prevColNum / 10) * 10);
          }
          // scroll up, increment
          updateColumnNumber((prevColNum: number) => Math.min(1000, prevColNum + 10));
      }
  };

    return (
    <>
      {/* set number of columns to sort */}
      <div className="w-auto lg:w-3/5 flex items-center m-auto justify-center text-xs md:text-2xl">
        <p>Number of Columns:</p>
        {/* input slider to control num of columns */}
        <input
          type="range"
          min="10"
          max="1000"
          value={columnNumber}
          className="slider ml-1"
          onChange={(e) => updateColumnNumber(parseInt(e.target.value, 10))}
          // scroll wheel adjustment functionality
          onWheel={handleWheelInput}
        />
        {/* box to display the num of columns and allow it to be typed in */}
        <input
          type="number"
          min="10"
          max="1000"
          value={columnNumber}
          className="number ml-4 pl-2 pr-2 rounded-lg"
          onChange={(e) => updateColumnNumber(parseInt(e.target.value, 10))}
          // scroll wheel adjustment functionality
          onWheel={handleWheelInput}
        />
      </div>
    </>
    )
}