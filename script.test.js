const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');

test('First letter matches', () => {
    expect(capitalize('banana').charAt(0)).toBe('B');
});

test('String is reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Calculations are correct', () => {
    expect(calculator.sum(2, 2)).toBe(4);
    expect(calculator.subtract(6, 3)).toBe(3);
    expect(calculator.divide(18, 2)).toBe(9);
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('Cipher is correct', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('Calculations match', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});