import * as fs from 'fs';

function generateArray(): string[] {
    // Initialize an empty array to hold the output strings
    let arr: string[] = [];

    for (let i = 1; i <= 100; i++) {
        // Initialize an empty string for each iteration
        let output = '';

        // Check if the number is divisible by 3
        // If so, append 'BIG' to the output string
        if (i % 3 === 0) {
            output += 'BIG';
        }

        // Check if the number is divisible by 5
        // If so, append 'BANG' to the output string
        if (i % 5 === 0) {
            output += 'BANG';
        }

        // If output is still an empty string, the number was not divisible by 3 or 5
        // In this case, convert int to the string representation of the current number
        if (output === '') {
            output = i.toString();
        }
      // Add the finalized output string to the array
        arr.push(output);
    }

    return arr;
}

// Generate the array
const outputArray = generateArray();

// Convert to JSON string
const jsonOutput = JSON.stringify(outputArray, null, 2);

// Write to output.json
fs.writeFileSync('output.json', jsonOutput);

console.log('Output written to output.json');
