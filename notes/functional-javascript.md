---
title: Functional JavaScript
description: Notes from Functional JavaScript First Steps lections
date: 2021-03-19
tags:
  - programming
  - javascript
---

#### Resources

- [Course on Frontend Masters](https://frontendmasters.com/courses/functional-first-steps)
- [Observable notebooks](https://observablehq.com/collection/@anjana/functional-javascript-first-steps)

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

- **Iteration** -- imperative, looping, stateful
- **Recursion** -- functional, self-referential, stateless

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

Recursive functions have two parts:

- base case: condition which makes the function return an output without making
  a recursive call;
- recursive case: condition which makes the function call itself.

#### Iteration:

```javascript
function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}
```

#### Recursion:

```javascript
function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
```

---

## Higher-order function

The higher-order functions `filter()`, `map()`, and `reduce()` are three of the
most useful tools in a functional programmer's toolbox. Let's dig into how they
work & how to use them.

Link to my fork of exercises: https://observablehq.com/d/3003212404713bcf

### Filter

The filter function takes a "predicate" function (a function that takes in a
value and returns a boolean) and an array, applies the predicate function to
each value in the array, and returns a new array with only those values for
which the predicate function returns true.

```javascript
function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}
```

### Map

The map function takes a one-argument function and an array, and applies the
function to each element in the array, returning a new array of the resulting
values.

```javascript
function map(fn, array) {
  if (length(array) === 0) return [];
  const first = head(array);
  const mappedFirst = [fn(first)];
  return concat(mappedFirst, map(fn, tail(array)));
}
```

```javascript
wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
doubled = map((n) => n * 2, wholes);
// [0,2,4,6,8,10,12,14,16,18,20]
```

### Reduce

The `reduce` function is the odd one of the bunch. Unlike `filter` and `map`,
which each take an array and return another array, reduce takes in an array and
returns a single value - in other words, it "reduces" an array to a single
value.

`reduce` takes three arguments:

- a "reducer" function, which takes two arguments - an accumulator and the next
  value from the array - and returns a single value. This function will be
  applied to each value in the array, with the accumulator storing the reduced
  value so far.
- an initial value, passed to the first call of the reducer function
- the array to reduce

```javascript
function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}
```

```javascript
wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = reduce(
  (accumulator, value) => {
    // TODO your code here
    return accumulator + value;
  },
  0,
  wholes,
);
// sum is 55
```
