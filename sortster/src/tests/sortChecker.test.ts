// import block
import sortChecker from "../utils/sortChecker"

// blank test to confirm correct set up
test('blank test to confrim set up', () => {
    null
})

// Testing sorting array
test('basic test with unordered array', () => {
    const result = sortChecker([1, 2, 3, 5, 4])
    expect(result).toBe(false);
})

test('basic test with ordered array', () => {
    const result = sortChecker([1, 2, 3, 4, 5])
    expect(result).toBe(true);
})

test('unordered array including dupes', () => {
    const result = sortChecker([1, 2, 3, 4, 5, 4, 5, 5, 6, 6, 7, 7])
    expect(result).toBe(false);
})

test('ordered array including dupes', () => {
    const result = sortChecker([1, 2, 3, 4, 4, 4, 5, 6, 7, 7])
    expect(result).toBe(true);
})

test('super long ordered arrays', () => {
    const orderedBatchArrayGenerator = (numOfArrays:number, maxLength:number) => {
        const arrayOfArrays:number[][] = []
        for (let i = 0; i < numOfArrays; i++) {
            const newArray:number[] = []
            // creates an array within 10% of the max length specified
            const arrayLength = (maxLength - (Math.floor(Math.random() * (maxLength/50))))
            for (let j = 0; j <= arrayLength; j++) {
                newArray.push(j)
            }
            arrayOfArrays.push(newArray)
        }
        return arrayOfArrays
    }

    // generate array containing 20 arrays of length between 360 and 400
    const testInput = orderedBatchArrayGenerator(800, 3000);

    for (let i = 0; i < testInput.length; i++) {
        // console.log(`running test ${i} of ${testInput.length}`)
        const result = sortChecker(testInput[i]);
        expect(result).toBe(true);
    }
});