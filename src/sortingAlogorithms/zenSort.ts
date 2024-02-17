// Zen sort
// Note: Joke sort, everything is already in it's place, the array is one with the universe

// Zen sort
export default async function zenSort(setBarArr: (arr: number[]) => void, arr:number[], setMoveCount: (moves:number) => void, stopRef: React.MutableRefObject<boolean>) {

    let moves = 0;

    // delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    moves++;

    // update state
    setMoveCount(moves);
    setBarArr([...arr]);
    
    // return the zen'd array
    console.log(`Zen sort complete in only ${moves} move!, it is now one with the universe`);
    stopRef.current = true;

    return true;
}