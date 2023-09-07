"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function generateArray() {
    var arr = [];
    for (var i = 1; i <= 100; i++) {
        var output = '';
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
var outputArray = generateArray();
// Convert to JSON string
var jsonOutput = JSON.stringify(outputArray, null, 2);
// Write to output.json
fs.writeFileSync('output.json', jsonOutput);
console.log('Output written to output.json');
