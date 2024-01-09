// to check if an array has been sorted
export default function sortChecker(arr: number[]): boolean {
    for (const item of arr) {
        if (arr[item] > arr[item+1]) {
            return false
        }
    }
    return true
}