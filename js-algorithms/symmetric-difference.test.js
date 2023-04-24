const symDif = require("./symmetric-difference");

describe("symDif function", () => {
  test("should return [3, 4, 5] when given [1, 2, 3], [5, 2, 1, 4]", () => {
    expect(symDif([1, 2, 3], [5, 2, 1, 4])).toStrictEqual([3, 4, 5]);
  });

  test("should return [3, 4, 5] when given [1, 2, 3, 3], [5, 2, 1, 4]", () => {
    expect(symDif([1, 2, 3, 3], [5, 2, 1, 4])).toStrictEqual([3, 4, 5]);
  });

  test("should return [3, 4, 5] when given [1, 2, 3], [5, 2, 1, 4, 5]", () => {
    expect(symDif([1, 2, 3], [5, 2, 1, 4, 5])).toStrictEqual([3, 4, 5]);
  });

  test("should return [1, 4, 5] when given [1, 2, 5], [2, 3, 5], [3, 4, 5]", () => {
    expect(symDif([1, 2, 5], [2, 3, 5], [3, 4, 5])).toStrictEqual([1, 4, 5]);
  });

  test("should return [1, 4, 5] when given [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]", () => {
    expect(symDif([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toStrictEqual([
      1, 4, 5,
    ]);
  });

  test("should return [2, 3, 4, 6, 7] when given [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]", () => {
    expect(
      symDif([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
    ).toStrictEqual([2, 3, 4, 6, 7]);
  });

  test("should return [1, 2, 4, 5, 6, 7, 8, 9] when given [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]", () => {
    expect(
      symDif(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      )
    ).toStrictEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });
});
