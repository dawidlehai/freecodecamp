function palindrome(str) {
  const regex = /[^a-z0-9]/gi;
  const strClean = str.replace(regex, "").toLowerCase();

  for (let i = 0; i < strClean.length; i++)
    if (strClean[i] !== strClean[strClean.length - i - 1]) return false;

  return true;
}

console.log("eye", palindrome("eye"));
console.log("racecar", palindrome("racecar"));
console.log("RaceCar", palindrome("RaceCar"));
console.log("race CAR", palindrome("race CAR"));
console.log("2A3*3a2", palindrome("2A3*3a2"));
console.log("2A3 3a2", palindrome("2A3 3a2"));
console.log("2_A3*3#A2", palindrome("2_A3*3#A2"));
