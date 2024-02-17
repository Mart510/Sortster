// Genghis Kahn Sort
// Note: joke sort, you delete all but the first item of the array, then repopulate it with copies of the first item.
import sortChecker from "../utils/sortChecker";

// Genghis Kahn sort
export default async function genghisKhanSort(setBarArr: (arr: number[]) => void, arr: number[], setMoveCount: (moves:number) => void, stopRef: React.MutableRefObject<boolean>) {

    let moves = 0;

    // copy number of columns
    const numberOfRequiredKhans: number = arr.length;
    let numberOfCurrentKhans: number = 1;
    const khanValue: number = arr[0];

    // delete all but the first index
    arr = arr.splice(0,1);
    moves++;
    // update states
    setBarArr([...arr]);
    setMoveCount(moves);
    // Add a delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    // duplicate index until you have the same number of columns
    while( numberOfCurrentKhans < numberOfRequiredKhans && !stopRef.current) {
        // add an duplicate to the end of the index
        arr.push(khanValue);
        numberOfCurrentKhans++;
        moves++;
        // update states
        setBarArr([...arr]);
        setMoveCount(moves);
        // Add a delay
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // return index
    console.log(`Ghenghis Khan sort complete in only ${moves} generations`);
    stopRef.current = true;
    sortChecker(arr);
    return true;


}