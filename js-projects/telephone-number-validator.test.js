const telephoneCheck = require("./telephone-number-validator.js");

describe("telephoneCheck function", () => {
  test("should return true when given '1 555-555-5555'", () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
  });

  test("should return true when given '1 (555) 555-5555'", () => {
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
  });

  test("should return true when given '5555555555'", () => {
    expect(telephoneCheck("5555555555")).toBe(true);
  });

  test("should return true when given '555-555-5555'", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
  });

  test("should return true when given '(555)555-5555'", () => {
    expect(telephoneCheck("(555)555-5555")).toBe(true);
  });

  test("should return true when given '1(555)555-5555'", () => {
    expect(telephoneCheck("1(555)555-5555")).toBe(true);
  });

  test("should return false when given '555-5555'", () => {
    expect(telephoneCheck("555-5555")).toBe(false);
  });

  test("should return false when given '5555555'", () => {
    expect(telephoneCheck("5555555")).toBe(false);
  });

  test("should return false when given '1 555)555-5555'", () => {
    expect(telephoneCheck("1 555)555-5555")).toBe(false);
  });

  test("should return true when given '1 555 555 5555'", () => {
    expect(telephoneCheck("1 555 555 5555")).toBe(true);
  });

  test("should return true when given '1 456 789 4444'", () => {
    expect(telephoneCheck("1 456 789 4444")).toBe(true);
  });

  test("should return false when given '123**&!!asdf#'", () => {
    expect(telephoneCheck("123**&!!asdf#")).toBe(false);
  });

  test("should return false when given '55555555'", () => {
    expect(telephoneCheck("55555555")).toBe(false);
  });

  test("should return false when given '(6054756961)'", () => {
    expect(telephoneCheck("(6054756961)")).toBe(false);
  });

  test("should return false when given '2 (757) 622-7382'", () => {
    expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
  });

  test("should return false when given '0 (757) 622-7382'", () => {
    expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
  });

  test("should return false when given '-1 (757) 622-7382'", () => {
    expect(telephoneCheck("-1 (757) 622-7382")).toBe(false);
  });

  test("should return false when given '2 757 622-7382'", () => {
    expect(telephoneCheck("2 757 622-7382")).toBe(false);
  });

  test("should return false when given '10 (757) 622-7382'", () => {
    expect(telephoneCheck("10 (757) 622-7382")).toBe(false);
  });

  test("should return false when given '27576227382'", () => {
    expect(telephoneCheck("27576227382")).toBe(false);
  });

  test("should return false when given '(275)76227382'", () => {
    expect(telephoneCheck("(275)76227382")).toBe(false);
  });

  test("should return false when given '2(757)6227382'", () => {
    expect(telephoneCheck("2(757)6227382")).toBe(false);
  });

  test("should return false when given '2(757)622-7382'", () => {
    expect(telephoneCheck("2(757)622-7382")).toBe(false);
  });

  test("should return false when given '555)-555-5555'", () => {
    expect(telephoneCheck("555)-555-5555")).toBe(false);
  });

  test("should return false when given '(555-555-5555'", () => {
    expect(telephoneCheck("(555-555-5555")).toBe(false);
  });

  test("should return false when given '(555)5(55?)-5555'", () => {
    expect(telephoneCheck("(555)5(55?)-5555")).toBe(false);
  });

  test("should return false when given '55 55-55-555-5'", () => {
    expect(telephoneCheck("55 55-55-555-5")).toBe(false);
  });

  test("should return false when given '11 555-555-5555'", () => {
    expect(telephoneCheck("11 555-555-5555")).toBe(false);
  });
});
