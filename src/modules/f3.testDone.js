const f3 = require('./f3');

describe('f3', () => {
  test('works well with empty array', () => {
    const result = f3([1,1,1,2, 1, 3,6,8,1,1,1], [2, 3, 4,1,6]);
    const toBe = [1,2,3,6]
    expect(result).toEqual(toBe);
  });
  test('Find intersection of two arrays.', () => {
    const result =f3([2, 1, 3], [2, 3, 4]);
    const toBe = [2, 3]
    expect(result).toEqual(toBe);
  });
})
