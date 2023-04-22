function convertToRoman(num) {
  if (num > 3999 || num < 1)
    throw new Error(
      "Provided number is out of range. Please provide a number between 1 and 3999."
    );

  const convertDigitToAtoms = (digit, atoms) => {
    const [s, m = "", l = ""] = atoms;

    if (digit === 1) return s;
    if (digit === 2) return s + s;
    if (digit === 3) return s + s + s;
    if (digit === 4) return s + m;
    if (digit === 5) return m;
    if (digit === 6) return m + s;
    if (digit === 7) return m + s + s;
    if (digit === 8) return m + s + s + s;
    if (digit === 9) return s + l;

    return "";
  };

  const romanAtoms = ["I", "V", "X", "L", "C", "D", "M"];
  let number = num;
  let divider = 1000;
  let solution = "";

  while (number > 0) {
    const digit = Math.trunc(number / divider);
    const atoms = romanAtoms.slice(String(divider).length * 2 - 2);
    solution += convertDigitToAtoms(digit, atoms);

    number = number % divider;
    divider /= 10;
  }

  return solution;
}

module.exports = convertToRoman;
