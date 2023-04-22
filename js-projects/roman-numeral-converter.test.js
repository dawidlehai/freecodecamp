const convertToRoman = require("./roman-numeral-converter");

describe("convertToRoman function", () => {
  test("should throw when given 0", () => {
    expect(() => convertToRoman(0)).toThrow(/range/);
  });

  test("should throw when given 4000", () => {
    expect(() => convertToRoman(0)).toThrow(/range/);
  });

  test("should not throw when given 1", () => {
    expect(() => convertToRoman(1)).not.toThrow(/range/);
  });

  test("should not throw when given 3999", () => {
    expect(() => convertToRoman(3999)).not.toThrow(/range/);
  });

  test("should return II when given 2", () => {
    expect(convertToRoman(2)).toBe("II");
  });

  test("should return III when given 3", () => {
    expect(convertToRoman(3)).toBe("III");
  });

  test("should return IV when given 4", () => {
    expect(convertToRoman(4)).toBe("IV");
  });

  test("should return V when given 5", () => {
    expect(convertToRoman(5)).toBe("V");
  });

  test("should return IX when given 9", () => {
    expect(convertToRoman(9)).toBe("IX");
  });

  test("should return XII when given 12", () => {
    expect(convertToRoman(12)).toBe("XII");
  });

  test("should return XVI when given 16", () => {
    expect(convertToRoman(16)).toBe("XVI");
  });

  test("should return XXIX when given 29", () => {
    expect(convertToRoman(29)).toBe("XXIX");
  });

  test("should return XLIV when given 44", () => {
    expect(convertToRoman(44)).toBe("XLIV");
  });

  test("should return XLV when given 45", () => {
    expect(convertToRoman(45)).toBe("XLV");
  });

  test("should return LXVIII when given 68", () => {
    expect(convertToRoman(68)).toBe("LXVIII");
  });

  test("should return LXXXIII when given 83", () => {
    expect(convertToRoman(83)).toBe("LXXXIII");
  });

  test("should return XCVII when given 97", () => {
    expect(convertToRoman(97)).toBe("XCVII");
  });

  test("should return XCIX when given 99", () => {
    expect(convertToRoman(99)).toBe("XCIX");
  });

  test("should return CD when given 400", () => {
    expect(convertToRoman(400)).toBe("CD");
  });

  test("should return D when given 500", () => {
    expect(convertToRoman(500)).toBe("D");
  });

  test("should return DI when given 501", () => {
    expect(convertToRoman(501)).toBe("DI");
  });

  test("should return DCXLIX when given 649", () => {
    expect(convertToRoman(649)).toBe("DCXLIX");
  });

  test("should return DCCXCVIII when given 798", () => {
    expect(convertToRoman(798)).toBe("DCCXCVIII");
  });

  test("should return DCCCXCI when given 891", () => {
    expect(convertToRoman(891)).toBe("DCCCXCI");
  });

  test("should return M when given 1000", () => {
    expect(convertToRoman(1000)).toBe("M");
  });

  test("should return MIV when given 1004", () => {
    expect(convertToRoman(1004)).toBe("MIV");
  });

  test("should return MVI when given 1006", () => {
    expect(convertToRoman(1006)).toBe("MVI");
  });

  test("should return MXXIII when given 1023", () => {
    expect(convertToRoman(1023)).toBe("MXXIII");
  });

  test("should return MMXIV when given 2014", () => {
    expect(convertToRoman(2014)).toBe("MMXIV");
  });

  test("should return MMMCMXCIX when given 3999", () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
  });
});
