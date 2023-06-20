function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = reverseString(cleanedStr);
  return cleanedStr === reversed;
}
  
module.exports = {
    reverseString,
    isPalindrome,
  };