function convertToRoman(num) {
  if (num > 3999 || num < 1)
    throw new Error(
      "Provided number is out of range. Please provide a number between 1 and 3999."
    );
  const thousands = Math.trunc(num / 1000);
  return num;
}

module.exports = convertToRoman;
