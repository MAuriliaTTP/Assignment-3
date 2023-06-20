const { add, subtract, multiply, divide } = require('./mathFunctions');

describe('These functions test basic math operations', () => {
    test("Invalid input test", () => {
        expect(add("hi", 1)).toEqual(null);
        expect(subtract(1, "hi")).toEqual(null);
        expect(multiply(1, "hi")).toEqual(null);
        expect(divide(1, "hi")).toEqual(null);
    })
    
    test("a+b", () => {
        expect(add(1, 2)).toEqual(3);
    });

    test("a-b", () => {
        expect(subtract(2, 1)).toEqual(1);
    });

    test("a*b", () => {
        expect(multiply(2, 2)).toEqual(4);
    });

    test("a/b", () => {
        expect(divide(2, 2)).toEqual(1);
    });

    test("divide by zero test", () => {
        expect(divide(2, 0)).toEqual(null);
    });
})