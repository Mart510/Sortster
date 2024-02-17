// Thanos Sort
// Note: Joke sort, snap the array in half until it's sorted.
import sortChecker from "../utils/sortChecker";

// Thanos sort
export default async function thanosSort(setBarArr: (arr: number[]) => void, arr: number[], setMoveCount: (moves: number) => void, stopRef: React.MutableRefObject<boolean>) {

    let moves = 0;

    while (!sortChecker(arr) && !stopRef.current) {
        // split the array in half
        if (!sortChecker(arr)) {
            arr.splice(Math.ceil(arr.length)/2);
        }
        // increment move counter
        moves++;
        // update state to visualise status
        setBarArr([...arr]);
        setMoveCount(moves);

        // Add a delay
        await new Promise((resolve) => setTimeout(resolve, 100));

    }

    // return the sorted array
    console.log(`Thanos sort complete in only ${moves} moves`);
    stopRef.current = true;

    return true;

}