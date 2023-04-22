function palindrome(str) {
  const regex = /[^a-z0-9]/gi;
  const strClean = str.replace(regex, "").toLowerCase();

  for (let i = 0; i < strClean.length; i++)
    if (strClean[i] !== strClean[strClean.length - i - 1]) return false;

  return true;
}

module.exports = palindrome;
