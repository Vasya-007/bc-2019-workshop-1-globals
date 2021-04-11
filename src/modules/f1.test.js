const f1 = require('./f1');

describe('f1', () => {
  test('works well with empty array', () => {
    const result = f1({ a: 1, b: 2 }, { b: 3, c: 4 },{ a: 0, b: 4, d: 5})
    expect(result).toEqual({ a: 1, b: 2, c: 4, d: 5 });
  });
  test('Merges two objects', () => {
    const result = f1({ a: 1, b: 2 }, { b: 3, c: 4 })
    expect(result).toEqual({ a: 1, b: 2, c:4 });
    
     /* const result = f1({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
    expect(result).toEqual({ a: { b: 2, c: 3 } }); */
  });
});
