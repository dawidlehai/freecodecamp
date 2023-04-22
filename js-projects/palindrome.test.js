const palindrome = require("./palindrome.js");

test("eye -> true", () => {
  expect(palindrome("eye")).toBe(true);
});

test("racecar -> true", () => {
  expect(palindrome("racecar")).toBe(true);
});

test("RaceCar -> true", () => {
  expect(palindrome("RaceCar")).toBe(true);
});

test("race CAR -> true", () => {
  expect(palindrome("race CAR")).toBe(true);
});

test("2A3*3a2 -> true", () => {
  expect(palindrome("2A3*3a2")).toBe(true);
});

test("2A3 3a2 -> true", () => {
  expect(palindrome("2A3 3a2")).toBe(true);
});

test("2_A3*3#A2 -> true", () => {
  expect(palindrome("2_A3*3#A2")).toBe(true);
});

test("mars -> false", () => {
  expect(palindrome("mars")).toBe(false);
});
