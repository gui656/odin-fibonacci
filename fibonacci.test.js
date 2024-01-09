const fibonacci = require('./fibonacci');

test('Fibonacci sequence 0 = 0', () => {
    expect(fibonacci(0)).toBe(0);
});


test('Fibonacci sequence 1 = 1', () => {
    expect(fibonacci(1)).toBe(1);
});


test('Fibonacci sequence 2 = 1',() => {
    expect(fibonacci(2)).toBe(1);
});


test('Fibonacci sequence 3 = 2',() => {
    expect(fibonacci(3)).toBe(2);
});


test('Fibonacci sequence 4 = 3',() => {
    expect(fibonacci(4)).toBe(3);
});


test('Fibonacci sequence 5 = 5',() => {
    expect(fibonacci(5)).toBe(5);
});


test('Fibonacci sequence 6 = 8',() => {
    expect(fibonacci(6)).toBe(8);
});


test('Fibonacci sequence 7 = 13',() => {
    expect(fibonacci(7)).toBe(13);
});


test('Fibonacci sequence 8 = 21',() => {
    expect(fibonacci(8)).toBe(21);
});


test('Fibonacci sequence 9 = 34',() => {
    expect(fibonacci(9)).toBe(34);
});


test('Fibonacci sequence 10 = 55',() => {
    expect(fibonacci(10)).toBe(55);
});







