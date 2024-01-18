// import block
import bogoSort from "../sortingAlogorithms/bogoSort"

// blank test to confirm correct set up
test('blank test to confrim set up', () => {
    null
})

// Testing bogo Sort
test('test with small array', () => {
const result = bogoSort([1, 3, 2, 4, 9, 8])
    expect(result).toBe(true);
})

// Testing sorting array
test('test with pre sorted array', () => {
    const result = bogoSort([1, 2, 3])
        expect(result).toBe(true);
    })