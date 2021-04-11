const f5 = require('./f5');

describe('f5', () => {
  test('Sets the value at path of object', () => {
    const object = { 'a': { 'b': { 'c': 3 } } };
    const result = f5(object, 'a.b.c', 5);
    expect(result).toEqual({ a: { b: { c: 5 } } });
  });
  /* test('Sets the value at path of object', () => {
    const object = { a: { b: { c: { d: { e: 7 } } } } };
    const result = f5(object, 'a.b.c.d.e.f', 10);
    expect(result).toEqual({ a: { b: { c: { d: { e: 10 } } } } });
  }); */
});
