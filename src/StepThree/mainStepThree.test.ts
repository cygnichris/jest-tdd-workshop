import { nextSmallestNumber } from './mainStepThree';

describe('suite', () => {
    const aut = [3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21];

    let sut: (a: any, x: number) => number;

    beforeEach(() => {
        sut = nextSmallestNumber;
    });

    it('should return the same number', function () {
        const x = 12;
        const result = sut(aut, x);
        expect(result).toBe(x);
    });

    it('should return the next smallest number', function () {
        const x = 13;
        const result = sut(aut, x);
        expect(result).toBe(12);
    });

    it('should return the upper boundry', function () {
        const x = aut[aut.length - 1];
        const result = sut(aut, x);
        expect(result).toBe(x);
    });

    it('should return the lower boundry', function () {
        const x = aut[0];
        const result = sut(aut, x);
        expect(result).toBe(x);
    });

    it('should the last number in the array', function () {
        const x = aut[aut.length - 1] + 1;
        const result = sut(aut, x);
        expect(result).toBe(aut[aut.length - 1]);
    });

    it('should return an error as the number is too small', function () {
        const x = aut[0] - 1;
        const result = sut(aut, x);
        expect(result).toBe(-1);
    });

    it('should return an error for an empty array', function () {
        const x = 12;
        const result = sut([], x);
        expect(result).toBe(-1);
    });

    it('should return an error for ivalid input', function () {
        const x = 12;
        const result = sut(null, x);
        expect(result).toBe(-1);
    });
});
