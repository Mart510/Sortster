// Communist sort
// Note: joke sort, makes all indexs equal

import sortChecker from "../utils/sortChecker";

// Communist sort
export default async function communistSort(setBarArr: (arr: number[]) => void, arr: number[], setMoveCount: (moves: number) => void, stopRef: React.MutableRefObject<boolean>) {
    
    let moves = 0;

    // find the average value of all indexs in the array
    function averageValue() {
        const totalNumofIndcies = arr.length;
        let totalSum = 0;
        for (const index of arr) {
            totalSum += index;
        }
        return totalSum / totalNumofIndcies
    }

    const communistEquals = averageValue();

    while (!sortChecker(arr) && !stopRef.current) {
    // start loop
    for (let i = 0; i < arr.length; i++) {
        // make index the same as the average
        arr[i] = communistEquals;
        moves++;
        // update states
        setBarArr([...arr]);
        setMoveCount(moves);
        // Add a delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }
    // return array
    console.log(`Communist sort complete comrade in only ${moves} moves, equality is achieved for all`);
    stopRef.current = true;

    return true;
}