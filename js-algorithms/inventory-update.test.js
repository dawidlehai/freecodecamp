const updateInventory = require("./inventory-update");

describe("updateInventory function", () => {
  test(`should return an array with a length of 6 when given [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]`, () => {
    expect(
      updateInventory(
        [
          [21, "Bowling Ball"],
          [2, "Dirty Sock"],
          [1, "Hair Pin"],
          [5, "Microphone"],
        ],
        [
          [2, "Hair Pin"],
          [3, "Half-Eaten Apple"],
          [67, "Bowling Ball"],
          [7, "Toothpaste"],
        ]
      )
    ).toHaveLength(6);
  });

  test(`should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]] when given [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]`, () => {
    expect(
      updateInventory(
        [
          [21, "Bowling Ball"],
          [2, "Dirty Sock"],
          [1, "Hair Pin"],
          [5, "Microphone"],
        ],
        [
          [2, "Hair Pin"],
          [3, "Half-Eaten Apple"],
          [67, "Bowling Ball"],
          [7, "Toothpaste"],
        ]
      )
    ).toStrictEqual([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"],
    ]);
  });

  test(`should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]] when given [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []`, () => {
    expect(
      updateInventory(
        [
          [21, "Bowling Ball"],
          [2, "Dirty Sock"],
          [1, "Hair Pin"],
          [5, "Microphone"],
        ],
        []
      )
    ).toStrictEqual([
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ]);
  });

  test(`should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]] when given [], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]`, () => {
    expect(
      updateInventory(
        [],
        [
          [2, "Hair Pin"],
          [3, "Half-Eaten Apple"],
          [67, "Bowling Ball"],
          [7, "Toothpaste"],
        ]
      )
    ).toStrictEqual([
      [67, "Bowling Ball"],
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [7, "Toothpaste"],
    ]);
  });

  test(`should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]] when given [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]`, () => {
    expect(
      updateInventory(
        [
          [0, "Bowling Ball"],
          [0, "Dirty Sock"],
          [0, "Hair Pin"],
          [0, "Microphone"],
        ],
        [
          [1, "Hair Pin"],
          [1, "Half-Eaten Apple"],
          [1, "Bowling Ball"],
          [1, "Toothpaste"],
        ]
      )
    ).toStrictEqual([
      [1, "Bowling Ball"],
      [0, "Dirty Sock"],
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [0, "Microphone"],
      [1, "Toothpaste"],
    ]);
  });
});
