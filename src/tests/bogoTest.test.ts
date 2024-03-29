import bogoSort from '../sortingAlogorithms/bogoSort';

describe('bogoSort', () => {
  it('should return true for an already sorted array', async () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const setBarArrMock = jest.fn();
    const setMoveCountMock = jest.fn();
    const stopRefMock = {current: false};

    // Call bogoSort function
    const result = await bogoSort(setBarArrMock, sortedArray, setMoveCountMock, stopRefMock);

    // Expectations
    expect(result).toBe(true);
  });

  it('should return true for an unsorted array', async () => {
    const unsortedArray = [1, 3, 2];
    const setBarArrMock = jest.fn();
    const setMoveCountMock = jest.fn();
    const stopRefMock = {current: false};


    // Call bogoSort function
    const result = await bogoSort(setBarArrMock, unsortedArray, setMoveCountMock, stopRefMock);

    // Expectations
    expect(result).toBe(true);
  });
});
