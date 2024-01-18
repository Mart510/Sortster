// import block
import { useContext, useEffect, useState } from "react"
import { ColumnNumberContext } from "../contexts/columnNumberContext"


// component to manage the column controls at the top of the page
export default function SortControls() {

    // state block
    const { columnNumber: colNum, updateColumnNumber } = useContext(ColumnNumberContext)

    return (
    <>
      {/* set number of columns to sort */}
      <div className="w-3/5 flex items-center m-auto justify-center text-xs md:text-2xl">
        <p>Number of Columns:</p>
        {/* input slider to control num of columns */}
        <input
          type="range"
          min="10"
          max="1000"
          value={colNum}
          className="slider ml-1"
          onChange={(e) => updateColumnNumber(parseInt(e.target.value, 10))}
          // scroll wheel adjustment functionality
          onWheel={e => {
            // change colNum based on wheel event
            if (e.deltaY > 0) {
                // Scroll down, decrement columns
                updateColumnNumber((currentColNum) => Math.max(10, currentColNum - 10))
            } else {
            // Scroll up, increment columns
            updateColumnNumber((currentColNum) => Math.min(1000, currentColNum + 10))
                }
            }
        }
        />
        {/* box to display the num of columns and allow it to be typed in */}
        <input
          type="number"
          min="10"
          max="1000"
          value={colNum}
          className="number ml-4 pl-2 pr-2 rounded-lg"
          onChange={(e) => updateColumnNumber(parseInt(e.target.value, 10))}
          // scroll wheel adjustment functionality
          onWheel={e => {
            // change colNum based on wheel event
            if (e.deltaY > 0) {
                // Scroll down, decrement columns
                updateColumnNumber((currentColNum) => Math.max(10, currentColNum - 10))
            } else {
            // Scroll up, increment columns
            updateColumnNumber((currentColNum) => Math.min(1000, currentColNum + 10))
                }
            }
        }
        />
      </div>
    </>
    )
}