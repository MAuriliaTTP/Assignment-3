function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};
  
    for (let end = 0; end < str.length; end++) {
      const currentChar = str[end];
  
      // If the current character is already in the map,
      // update the start pointer to the next position
      if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
        start = charMap[currentChar] + 1;
      }
  
      charMap[currentChar] = end; // Update the character's index in the map
      maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length
    }
  
    return maxLength;
}

module.exports = longestSubstring;