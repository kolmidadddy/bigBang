import * as fs from 'fs';

function generateArray(): string[] {
    let arr: string[] = [];          // Initialize an empty array to hold the output strings

    for (let i = 1; i <= 100; i++) {

        let output = '';             // Initialize an empty string for each iteration

        if (i % 3 === 0) {           // Check if the number is divisible by 3
            output += 'BIG';         // If it's true, append 'BIG' to the output string
        }

        if (i % 5 === 0) {           // Check if the number is divisible by 5
            output += 'BANG';        // If true, append 'BANG' to the output string
        }

        if (output === '') {         // If output is still an empty string, the number was not divisible by 3 or 5
            output = i.toString();   // In this case, convert current number {int} to {string} representation
        }

        arr.push(output);            // Add the finalized output string to the array
    }

    return arr;
}

const outputArray = generateArray();                      // Run the array

const jsonOutput = JSON.stringify(outputArray, null, 2);  // Convert to JSON string

fs.writeFileSync('output.json', jsonOutput);              // Write to output.json

console.log('Output written to output.json');             // check log for debugging purpose
