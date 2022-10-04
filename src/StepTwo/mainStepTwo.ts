// Write a function
// takes a string
// returns a result
// pass true or false.

// Where to begin??
// DONT EVEN BE HERE
// Write a test
// Open the spec file
//

export const passWordVerifier = (input: string, rules: any[]) => {
    if (rules.length === 0) {
        return true;
    }

    return rules[0](input);
};
