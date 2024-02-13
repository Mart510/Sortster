// To check if an array has been sorted
export default function sortChecker(arr: number[]): boolean {
    for (let index = 0; index < arr.length - 1; index++) {
        // if it's greater than the current value return false (duplicate values are not greater than)
        if (arr[index] > arr[index + 1]) {
            return false;
        }
    }
    return true;
}
