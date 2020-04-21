const arrayChunk = require('./arrayChunk');

// Function exists
test('Function exists', () => {
    expect(arrayChunk).toBeDefined();
});


test('Chunk an array of 10 values with length', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;
    const chunedArr = arrayChunk(numbers, len);

    expect(chunedArr).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
});