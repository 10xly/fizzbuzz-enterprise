# `fizzbuzz-enterprise`

10X enterprise software is a high-class of software that uses relevent software architecture design principles, including the maximalist principal, extreme modularity principle, single responsibility principle, and SOMOM,TYPRPL responsibility principle (Single/Minimal Or Maximal, Take Your Pick Responsibility Principal). See more information about the SOMOM,TYPRPL priniciple in this [README snippet from LoLite](https://github.com/enterprise-npm-ai/lolite?tab=readme-ov-file#what-is-this), our 10x enterprise utility suite.
This project is a 10x enterprise-grade port of FizzBuzz for NPM. Superior to previous FizzBuzz attempts such as [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition), which is using Java, the language inferior to JavaScript, and [fizzbuzz-npm-edition](https://github.com/fizzbuzz-npm/fizzbuzz-npm-edition), which isn't enterprise enough.
Please follow our organization, [10x'ly Made](https://github.com/enterprise-npm-ai), on GitHub for more enterprise software.

## Installation
You may install this however you want, but we will simply show you the one most common method of installing an NPM package in this example; that installation method being the NPM package manager method using the full `install` command and no flags:

```bash
npm install fizzbuzz-enterprise
```

## Usage
### Common usage
```javascript
const fizzbuzz = require("fizzbuzz-enterprise")
fizzbuzz()
```
<details>
<summary>Output</summary>
<pre>
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
</pre>
</details>

### Custom iteration
```javascript
const fizzbuzz = require("fizzbuzz-enterprise")
fizzbuzz(1, 10)
```
<details>
<summary>Output</summary>
<pre>
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
</pre>
</details>
## What is FizzBuzz?

### No output
```javascript
const fizzbuzz = require("fizzbuzz-enterprise")
const result = fizzbuzz(1, 10, false) // outputs nothing
console.log(result) // outputs
```
<details>
<summary>Output</summary>
<pre>
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
</pre>
</details>

## What is FizzBuzz?

FizzBuzz is a game that has gained in popularity as a programming assignment to weed out non-programmers during job interviews. The object of the assignment is less about solving it correctly according to the below rules and more about showing the programmer understands basic, necessary tools such as `if`-/`else`-statements and loops. The rules of FizzBuzz are as follows:

For numbers 1 through 100,

* if the number is divisible by 3 print Fizz
* if the number is divisible by 5 print Buzz
* if the number is divisible by 3 and 5 print FizzBuzz
* else, print the number.

## License
Do whatever you want.