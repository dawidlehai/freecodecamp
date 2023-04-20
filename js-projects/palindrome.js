function palindrome(str) {
  return true;
}

console.log("eye", palindrome("eye"));
console.log("racecar", palindrome("racecar"));
console.log("RaceCar", palindrome("RaceCar"));
console.log("race CAR", palindrome("race CAR"));
console.log("2A3*3a2", palindrome("2A3*3a2"));
console.log("2A3 3a2", palindrome("2A3 3a2"));
console.log("2_A3*3#A2", palindrome("2_A3*3#A2"));
