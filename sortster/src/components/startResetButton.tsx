// import block
import React from "react"

// component to manage the start/stop and reset of the sorting
export default function StartResetButton() {
    //
    return (
        <>
            <div className="md:w-1/5 flex justify-between content-center ml-auto mr-auto">
                <button className="md:pl-8 md:pr-8">Start</button>
                <button className="md:pl-8 md:pr-8">Reset</button>
            </div>
        </>
    )
}