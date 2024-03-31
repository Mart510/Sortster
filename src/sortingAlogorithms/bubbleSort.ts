// Bubble sort
// Note: inefficient-ish sort algo but simple to implement. Only really suited to sorting small data sets.

import sortChecker from "../utils/sortChecker";

// bubble sort
export default async function bubbleSort(setBarArr: (arr: number[]) => void, arr:number[], setMoveCount: (moves:number) => void, stopRef: React.MutableRefObject<boolean>) {

    let moves = 0;

    // start while loop
    while (!sortChecker(arr) && !stopRef.current) {

        // start loop thru array
        for (let i = 0; i < arr.length -1; i++) {

            // check stop state
            if (stopRef.current) {
                break;
            }
          
            // compare it to the next one
            if (arr[i] > arr[i+1]) {

                // if out of order, swap it
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                // delay

                await new Promise((resolve) => setTimeout(resolve, 100));
                moves++;

                // update state
                setMoveCount(moves);
                setBarArr([...arr]);
            }

        }            
    }

    // return the sorted array
    console.log(`Bubble sort complete in only ${moves} moves!`);
    stopRef.current = true;

    return true;
}