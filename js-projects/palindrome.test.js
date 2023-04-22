const palindrome = require("./palindrome");

describe("palindrome function", () => {
  test("should return true when given 'eye'", () => {
    expect(palindrome("eye")).toBe(true);
  });

  test("should return true when given 'racecar'", () => {
    expect(palindrome("racecar")).toBe(true);
  });

  test("should return true when given 'RaceCar'", () => {
    expect(palindrome("RaceCar")).toBe(true);
  });

  test("should return true when given 'race CAR'", () => {
    expect(palindrome("race CAR")).toBe(true);
  });

  test("should return true when given '2A33a2'", () => {
    expect(palindrome("2A33a2")).toBe(true);
  });

  test("should return true when given '2A3 3a2'", () => {
    expect(palindrome("2A3 3a2")).toBe(true);
  });

  test("should return true when given '2_A33#A2'", () => {
    expect(palindrome("2_A33#A2")).toBe(true);
  });

  test("should return false when given 'mars'", () => {
    expect(palindrome("mars")).toBe(false);
  });
});
