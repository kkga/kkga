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
