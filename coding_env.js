// coding_env.js

const problems = {
    1: {
        topic: "Strings",
        problem: "Given a string s, find the longest palindromic substring in s.",
        example: "Input: 'babad'\nOutput: 'bab' or 'aba'",
        hint: "Consider each character as a potential center of palindrome",
        starterCode: "def longest_palindrome(s: str) -> str:\n    # Your code here\n    pass",
        sanityChecks: [
            { input: "'babad'", expected: ["bab", "aba"] },
            { input: "'cbbd'", expected: ["bb"] }
        ]
    },
    // Add other problems here
};

function runCode(problemId, code) {
    const problem = problems[problemId];
    const func = new Function('return ' + code)();
    return problem.sanityChecks.map(check => {
        const output = func(...eval(`[${check.input}]`));
        return {
            input: check.input,
            output: output,
            expected: check.expected,
            passed: check.expected.includes(output)
        };
    });
}

function displayResults(results) {
    results.forEach(result => {
        console.log(`Input: ${result.input}`);
        console.log(`Output: ${result.output}`);
        console.log(`Expected: ${result.expected}`);
        console.log(`Passed: ${result.passed}`);
        console.log('---');
    });
}

// Example usage
const code = `
function longest_palindrome(s) {
    // Your code here
    return s; // Placeholder
}
`;

const results = runCode(1, code);
displayResults(results);
