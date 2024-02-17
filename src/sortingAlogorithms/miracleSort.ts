// Miracle sort
// Note: Miracle sort is a joke sort, there is no sorting, you just keep checking the array and hope that somethign in the universe happens and your array at some point is sorted.
import sortChecker from "../utils/sortChecker";

// Miracle sort
export default async function miracleSort(setBarArr: (arr: number[]) => void, arr: number[], setMoveCount: (moves:number) => void, stopRef: React.MutableRefObject<boolean>) {
    let moves = 0;

    // start checking
    while(!sortChecker(arr) && !stopRef.current) {
        console.log(`miracle sort check number ${moves}`)
        // increment move counter
        moves++;
    
        // Update state to visualize sort status
        setBarArr([...arr]);
        setMoveCount(moves);
    
        // Add a delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        }

    // if the array is sorted, return the sorted array
    console.log(`Mircale sort complete in only ${moves}!`)
    stopRef.current = true;
    return true;
}