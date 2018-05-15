# Javascript Coding Exercises

## Intro

Following are some fun puzzles and answers I've come across while interviewing and studying for Javascript related interviews.


### Cost Sharing Exercise

This is a Node.js coding challenge I came across recently.

In this project, the developer is asked to write a function that passes the set of tests run from the command line:

`npm run test`

You can find the source for the tests in **./test/test.js**.

The tests call a module, pass it some data, and expect in return a set of JSON 'transfer instructions' describing how to redistribute funds between people according to ratios provided by the user (similar to a cost-sharing app). The goal is to get the tests to pass. 

#### Solution

A naive solution is included in the code.
This is a fun example of a back-end coding challenge in Javascript that also demonstrates the dilemmas a developer faces when defending a multi-hour project like this. Javascript projects are a universe: just when should you begin to stop, and step away from a solution?

The naive answer simply appeals to the principles of **Document First, Test Driven Development**. While there may be innumerable ways in which the solution can be improved, the tests are passing and therefore the code is complete.

### Fibonacci Series

In this exercise the test is located in **./test/fib-test.js**. The fibonacci module must return the Fibonacci sequence to N+1 places for any given N. The series is checked against the formula

`Sum(F(n)) = F(n+2)-1`

#### Solution

Fibonacci can be solved iteratively or recursively. In the latter case, it's just as important to make sure you're not repeating work as it is to avoid infinite loops. This solution handles that using a global variable inside the module. This is known as 'memoization'.

