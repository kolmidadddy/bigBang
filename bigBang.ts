import * as fs from 'fs';

function generateArray(): string[] {
    let arr: string[] = [];

    for (let i = 1; i <= 100; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += 'BIG';
        }
        
        if (i % 5 === 0) {
            output += 'BANG';
        }

        if (output === '') {
            output = i.toString();
        }

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
