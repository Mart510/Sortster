// import block
import bogoSort from "./sortingAlogorithms/bogoSort";
import miracleSort from "./sortingAlogorithms/miracleSort";

// WebWorker to run the sort
self.addEventListener('message', (event) => {
    const {SortSelection, barArr} = event.data;
    let result;

    switch(SortSelection) {
        case 'bogo sort':
          result = bogoSort(setBarArr, barArr.slice(), setMoveCount);
          break;
        case 'miracle sort':
          miracleSort(setBarArr, barArr.slice(), setMoveCount);
          break;
      }
})