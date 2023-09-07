# Big Bang Study Case

## Problem:
There was a tale when 2 prime numbers collided and a big bang happened. Scientists found out
the 2 prime numbers are 3 and 5 but they need a model to generate an array of numbers to
predict when the big bang will happen again.

## Introduction
This TypeScript script generate an array of numbers and words from 1 to 100 according to the Big Bang theory of prime numbers colliding. The array is then written to a JSON file named 'output.json'.

* Numbers divisible by 3 are places with the word "BIG"
* Numbers are divisible by 5 are placed with the word "BANG"
* Numbers are divisible by both 3 and 5 are replaced with the word "BIGBANG"

### Requirements
+ Node.js
+ TypeScript
+ ts-node for direct TypeScript execution

### Setup & Installation
1. Clone this repository or download the source code
2. Navigate to the project folder in the terminal
3. Run 'npm install' to install any necessary dependencies.

## How to Run & Flow
#### GitHub
##### Set & fetch
```bash
git clone https://github.com/kolmidadddy/bigBang.git
```

#### Using TypeScript and Node.js
Using ts-node to run TypeScript 
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


