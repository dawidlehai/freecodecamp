function rot13(str) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const regex = /[A-Z]/;

  return [...str]
    .map((char) => {
      if (!regex.test(char)) return char;
      let charIndex = alphabet.findIndex((letter) => letter === char) + 13;
      if (charIndex > 25) charIndex -= 26;
      return alphabet[charIndex];
    })
    .join("");
}

module.exports = rot13;
