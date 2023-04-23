const rot13 = require("./caesars-cipher");

describe("rot13 function", () => {
  test("should return 'FREE CODE CAMP' when given 'SERR PBQR PNZC'", () => {
    expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP");
  });

  test("should return 'FREE PIZZA!' when given 'SERR CVMMN!'", () => {
    expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
  });

  test("should return 'FREE LOVE?' when given 'SERR YBIR?'", () => {
    expect(rot13("SERR YBIR?")).toBe("FREE LOVE?");
  });

  test("should return 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.' when given 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'", () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe(
      "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    );
  });
});
