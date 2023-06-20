const { reverseString, isPalindrome } = require('./stringFunctions');

describe('stringFunctions', () => {
  describe('Tests for reverseString', () => {
    test('should reverse a string', () => {
      expect(reverseString('hi')).toBe('ih');
    });

    test('should return an empty string if there is no input', () => {
      expect(reverseString('')).toBe('');
    });

    test('should handle special characters and spaces', () => {
      expect(reverseString('!@#$%^&*()   ')).toBe('   )(*&^%$#@!');
    });
  });

  describe('Tests for isPalindrome', () => {
    test('should return true for a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    
  });
});