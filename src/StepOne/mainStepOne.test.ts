import { passWordVerifier } from './mainStepOne';

// Start with a test
// Feels alien... what should the first test be?

// under which condition do i get x behavior
// simplest possible thing.

// Test the test! Return false on the first step.
// I can no see that it fails as it should
// then i can prove it true.

// No its true.  Now the code sucks
// WHat do i need to do?

// Use the two brain analogy
//

describe('Password Verifier', () => {
    it('given no rules, it passes', () => {
        // Arrange
        const sut = passWordVerifier;
        const input = 'any input';
        // Act
        const result = sut(input, []);
        // Assert
        expect(result).toBeTruthy();
    });
});

it('should do nothing', () => {
    expect(true).toBe(true);
});

describe('Password Verifier', () => {});
