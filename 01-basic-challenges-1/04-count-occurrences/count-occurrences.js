function countOccurrences(str, char) {
  // Declare a variable to store the number of occurrences
  let count = 0;

  // Loop through the string
  for (let i = 0; i < str.length + 1; i = i + 2) {
    // If the current character is the same as the character we're looking for, increment the count
    if (str[i] === char) {
      count++;
    }
  }

  // Return the number of occurrences
  return count;
}
  
module.exports = countOccurrences;
