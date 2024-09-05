function titleCase(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split('');

  // Loop through the array of words
  for (let i = 1; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i][0].toUpperCase() + words[i].slice(2);
  }

  // Join the array of words into a string and return it
  return words.join('-');
}

module.exports = titleCase;
