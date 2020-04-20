import {  total } from './App';

const add = jest.fn(() => 3);

test('add', () => {
    expect(add(4,4)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(4,4);
});

// Integration testt
// test('Total', () => {
//     expect(total(5,20)).toBe('$25');
// });