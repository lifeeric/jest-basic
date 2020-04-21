const reverseString = require('./reverseString');

console.log(reverseString('hell'))

test('function exists', () => {
    expect(reverseString).toBeDefined();
});

// Reverse String
test('Check the Reverse String', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

// Lower case
test('Check the reverse with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});