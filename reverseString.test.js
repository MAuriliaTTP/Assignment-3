const reverseString = require('./reverseString');

describe('reverseString tests', () => {
    test('Should return reversed string', () => {
        expect(reverseString('hello')).toBe('olleh')
    })
    test('Should return IAnepO', () => {
        expect(reverseString('OpenAI')).toBe('IAnepO')
    })
    test("Shoul reeturn racecar", () => {
        expect(reverseString('racecar')).toBe('racecar')
    })
})