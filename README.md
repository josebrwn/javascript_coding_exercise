# Javascript Coding Exercises

## Intro

Following are some fun puzzles and answers I've come across while interviewing and studying for Javascript related interviews, as well as some classical problems from **Cracking the Coding Interview**. The interview questions range from whiteboard exercises to 4-hour projects.

The problems are not described in great depth here. Instead, every problem is accompanied by a test script, and the challenge is to get the test script to pass. This is the principle behind **Document First, Test Driven Development**. All the requirements are found in the test case, and the developer's only job is to get the tests to pass.

Tests are currently using npm modules "lab" and "code".


## Coding Projects

### Cost Sharing Exercise

In this project, the developer is asked to write a function that passes the set of tests run from the command line:

`npm run test`

You can find the source for the tests in [test/test.js](test/test.js).

The test calls a module, passes it some data, and expects a set of JSON 'instructions' describing how to redistribute funds between people according to ratios provided by the user (similar to a cost-sharing app). For instance, given the following inputs:

`distribution = {
  joe: '1/2',
  bob: '1/2'
}`

`balances = {
  joe: 5,
  bob: 1
}`

the transfer instructions would be:

`{
  from: 'joe',
  to: 'bob',
  amount: 2
}`

All you know is that the test has to pass. A naive solution is included in the code.

#### Solution

This is a fun example of a back-end coding challenge in Javascript that also demonstrates the dilemmas a developer faces when defending a multi-hour project like this. Javascript projects are a universe - when should you begin to stop, and step away from a solution?

The naive answer simply appeals to the principles of **Document First, Test Driven Development**. While there may be innumerable ways in which the solution can be improved, the tests are passing and therefore the code is complete.

## Cracking the Coding Interview

This section includes problems from the book **Cracking the Coding Interview**. The string tests are located in [test/string-test.js](test/string-test.js).

### Is Unique

(exercise 1.1) write a function that determines if all the characters in a string are unique. The module should return true if all the characters in a string are unique. Hints included in the text "consider a hash table" and "assume ascii".

#### Solution

Again you can approach this iteratively using a *for* loop, or in a functional style using ES6 array functions. A functional solution is included in string-test.js.

### Check Permutation

(Exercise 1.2) write a function/module that checks if two strings are permutations of each other.

#### Solution

The answer depends on what you want to do about whitespace and capitalization. Regardless whether we are concerned with whitespace or capitalization, in the general case a naive solution simply sorts the characters in the two strings and checks whether they are the same.


## Common Problems

Here are a few generic problems one may frequently encounter in a coding interview.

### Fibonacci Series

In this exercise the test is located in [test/fib-test.js](test/fib-test.js). The fibonacci module must return the Fibonacci sequence to N+1 places for any given N. The series is checked against the formula

`Sum(F(n)) = F(n+2)-1`

#### Solution

Fibonacci can be solved iteratively or recursively. In the latter case, it's important to make sure you're not repeating work. The solution in fibonacci.js addresses this using a global variable inside the module. This is known as 'memoization'.
