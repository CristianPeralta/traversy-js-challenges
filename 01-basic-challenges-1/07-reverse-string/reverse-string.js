function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join the array into a string
  return str.split(' ').reverse().join('-');
}

module.exports = reverseString;
  