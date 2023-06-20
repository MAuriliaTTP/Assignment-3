const longestSubstring = require('./longestSubstring');

describe('longest-substring', () => {
    test("longest-substring test)", () => {
        expect(longestSubstring("abcabcbb")).toBe(3);
    })
    test("longest-substring test)", () => {
        expect(longestSubstring('bbbbb')).toBe(1);
    })
    test("longest-substring test)", () => {
        expect(longestSubstring( "pwwkew")).toBe(3);
    })
})