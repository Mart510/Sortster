// Stalin sort
// Note: Joke sort, single pass that destroys out of order items to end up with a 'correctly' sorted list in O(n).
import sortChecker from "../utils/sortChecker";

// Stalin sort
export default async function stalinSort(setBarArr: (arr: number[]) => void, arr: number[], setMoveCount: (moves: number) => void, stopRef: React.MutableRefObject<boolean>) {

    let moves = 0;

    while (!sortChecker(arr) && !stopRef.current) {
        // Loop through the list
        // Increment move counter
        moves++;

        let prevElement = arr[0];
        let i = 1;

        while (i < arr.length && !sortChecker(arr) && !stopRef.current) {
            // If the current element is smaller than the previous element, remove it
            if (arr[i] < prevElement) {
                arr.splice(i, 1);
            } else {
                // Move to the next element
                prevElement = arr[i];
                i++;
            }

            // Update state to visualize sort status
            setBarArr([...arr]);

            // Add a delay
            await new Promise((resolve) => setTimeout(resolve, 100));
        }

        setMoveCount(moves);

        if (sortChecker(arr)) {
            break;
        }
    }

    // Return the sorted list
    console.log(`Stalin sort complete in only ${moves} moves`);
    stopRef.current = true;
    sortChecker(arr)
    return true;
}