---
title: Functional JavaScript
description: Notes from Functional JavaScript First Steps lections
date: 2021-03-19
tags:
    - programming
    - javascript
---

#### Resources

-   https://frontendmasters.com/courses/functional-first-steps
-   https://observablehq.com/collection/@anjana/functional-javascript-first-steps

---

## Pure functions

### Avoid side effects

Do nothing but return output based on nothing but input.

#### Imperative:

```javascript
let name = "Alonzo";
let greeting = "Hi";

console.log(`${greeting}, ${name}!`);
// Hi, Alonzo!

greeting = "Howdy";
console.log(`${greeting}, ${name}!`);
// Howdy, Alonzo!
```

#### Functional:

```javascript
function greet(greeting, name) {
	return `${greeting}, ${name}!`;
}

greet("Hi", "Alonzo");
// "Hi, Alonzo!"

greet("Howdy", "Alan");
// "Howdy, Alan!
```

#### Side effects:

```javascript
let thesis = { name: "Church's", date: 1936 };

function renameThesis(newName) {
	thesis.name = newName;
	console.log("Renamed!");
}

renameThesis("Church-Turing"); // Renamed!
thesis; //{name: "Church-Turing", date: 1936}
```

#### No side effects:

```javascript
const thesis = { name: "Church's", date: 1936 };

function renameThesis(oldThesis, newName) {
	return {
		name: newName,
		date: oldThesis.date,
	};
}

const thesis2 = renameThesis(thesis, "Church-Turing");
thesis; // {name: "Church's", date: 1936}
thesis2; // {name: "Church-Turing", date: 1936}
```

---

## Recursion

**Iteration** -- imperative, looping, stateful
**Recursion** -- functional, self-referential, stateless

#### Iteration:

```javascript
function sum(numbers) {
	let total = 0;
	for (i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

sum([0, 1, 2, 3, 4]); // 10
```

#### Recursion:

```javascript
function sum(numbers) {
	if (numbers.length === 1) {
		// base case
		return numbers[0];
	} else {
		// recursive case
		return numbers[0] + sum(numbers.slice(1));
	}
}

sum([0, 1, 2, 3, 4]); // 10
```
