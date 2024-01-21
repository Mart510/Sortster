// Miracle sort
// Note: Miracle sort is a joke sort, there is no sorting, you just keep checking the array and hope that somethign in the universe happens and your array at some point is sorted.
import sortChecker from "../utils/sortChecker";

// Mircale sort
export default async function miracleSort(setBarArr: (arr: number[]) => void, arr: number[], setMoveCount: (moves:number) => void) {
    const moves = 0;

    // start checking
    while(!sortChecker(arr)) {
        console.log(`miracle sort check number ${moves}`)
        // update state to visualise sort status
                // update state to visualize sort status
                await new Promise((resolve) => {
                    setTimeout(() => {
                        setBarArr([...arr]);
                        setMoveCount(moves)
                        resolve();
                    }, 100);
                })      
    }
            // if the array is sorted, return the sorted array
            console.log(`Mircale sort complete in only ${moves}!`)
            return true;
}