// Bogo sort algo
// Note: Bogo is a joke sort, that in one universe is the fastest possible sort method of all time, however in ours it is a crapshoot and not considered a good method. But it is funny so it gets points for that.

import sortChecker from "../utils/sortChecker";

// Fischer-Yates shuffle function
    // randomise the array
    const bogoArray = (currentArray) => {
        let currentIndex = currentArray.length, randomIndex;

        // While there remain elements to shuffle
        while (currentIndex > 0) {
            // pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            // decrement current index
            currentIndex--;

        // Swap it with the current element
        [currentArray[currentIndex], currentArray[randomIndex]] = [currentArray[randomIndex], currentArray[currentIndex]];
        }
    
        // return the shuffled array
        return currentArray
    } 


export default function bogoSort(arr: number[]) {
    // Start loop
    while(!sortChecker(arr)) {
        // Randomise the array
        arr = bogoArray(arr);
    }
    // if the array is sorted, return the sorted array
    return true
}