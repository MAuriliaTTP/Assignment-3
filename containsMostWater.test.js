const containsMostWater = require('./containsMostWater');

describe('Has the most water', () => {
    test("test 1)", () => {
        expect(containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    })
    test("test 2)", () => {
        expect(containsMostWater([4, 3, 2, 1, 4])).toBe(16);
    })
    test("test 3)", () => {
        expect(containsMostWater([1, 2, 1])).toBe(2);
    })
})