const f2 = require('./f2');

describe('f2', () => {
  test('works well with empty array', () => {
    const result = f2([2, 1,null, 3,6,8,undefined,false,null], [2, 3, 4]);
    const toBe = [1,6,8]
    expect(result).toEqual(toBe);
  });
  test('Find difference of two arrays.', () => {
    const result = f2([2, 1, 3], [2, 3, 4]);
    const toBe = [1]
    expect(result).toEqual(toBe);
  });
});
