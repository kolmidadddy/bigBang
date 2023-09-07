# Big Bang Study Case

## Introduction
This TypeScript script generate an array of numbers and words from 1 to 100 according to the Big Bang theory of prime numbers colliding. The array is then written to a JSON file named 'output.json'.

* Numbers divisible by 3 are places with the word "BIG"
* Numbers are divisible by 5 are placed with the word "BANG"
* Numbers are divisible by both 3 and 5 are replaced with the word "BIGBANG"

### Requirements
+ Node.js
+ TypeScript
+ Optional: ts-node for direct TypeScript execution

### Setup & Installation
1. Clone this repository or download the source code
2. Navigate to the project folder in the terminal
3. Run 'npm install' to install any necessary dependencies.

## How to Run & Flow
#### Using TypeScript and Node.js
1. Using ts-node to run TypeScript 
```bash
ts-node bigBang.ts
```
## Output
The 'output.json' file will look something similar to :
```json
[
  "91",
  "92",
  "BIG",
  "94",
  "BANG",
  "BIG",
  "97",
  "98",
  "BIG",
  "BANG"
  ...
]

```


