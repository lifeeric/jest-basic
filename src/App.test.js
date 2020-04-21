const { total, functions } = require('./App');

// Mock
const add = jest.fn(() => 3);

// ToBe, Not
test('add', () => {
    expect(add(4,4)).not.toBe(5);
    expect(add()).toBe(3);
    expect(add).toHaveBeenCalledTimes(2);
    expect(add).toHaveBeenCalledWith(4,4);
});

// Integration testt
test('Total', () => {
    expect(total(5,20)).toBe('$25');
});

// toBe null
test('Should be null', () => {
    // expect(functions.isNull()).toBeNull();
    expect(functions.isNull()).toBeUndefined();
})

// toBe falsy
test('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
});

// ToEqual uses Object. toBe uses for primitive data types

test('Object checking', () => {
    expect(functions.createUser()).toEqual({
        first: 'Life',
        last: 'Eric'
    });
});

// Less than and greater than
test('Conditional', () => {
    const data1 = 100;
    const data2 = 50;

    expect(data1 + data2).toBeLessThan(200);
    expect(data1 + data2).toBeGreaterThan(100);
    expect(data1 + data2).toBeLessThanOrEqual(150);
    expect(data1 + data2).toBeGreaterThanOrEqual(150);
});


// Regex
test('There is no I in the team', () => {
    expect('team').not.toMatch(/I/i); 
});

// Array
test('Array', () => {
    const usernames = ['john', 'doe', 'admin'];
    expect(usernames).toContain('admin');
});

// working with async 

// Promise
// test('User fetched name should be Leanne', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     });
// })

// Async
test('User fetched name should be Leanne, Async', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})