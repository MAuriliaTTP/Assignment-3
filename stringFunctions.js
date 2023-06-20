function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
  }
  
  module.exports = {
    reverseString,
    isPalindrome,
  };