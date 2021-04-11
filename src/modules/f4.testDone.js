const f4 = require('./f4');

describe('f4', () => {
  test('undefined', () => {
    const result = f4({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c.d');
    const toBe = undefined
    expect(result).toEqual(toBe);
  });
  test('Gets the value at path of object.', () => {
    const result =f4({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c');
    const toBe = 3
    expect(result).toEqual(toBe);
  });
})
