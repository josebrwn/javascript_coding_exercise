# Javascript Coding Exercises

## Intro

Following are some fun puzzles and answers I've come across while interviewing and studying for Javascript related interviews.


### Transfer Instructions Exercise

This is a Node.js coding challenge I came across recently.

In this project, the developer is asked to write a function that passes the set of tests run from the command line:

`npm run test`

You can find the source for the tests in **./test/test.js**.
The test points to a module, passes it some data, and expects a set of JSON instructions in response. The challenge is to get a passing result in the tests.

(These instructions describe how to redistribute funds between people, according to ratios provided by the user, similar to a cost-sharing app.)

#### Solution

A naive solution is included in the code.
This is a fun example of a back-end coding challenge in Javascript that also demonstrates the dilemmas a developer faces when defending a multi-hour project like this. Javascript projects are a universe: just when should you begin to stop, and step away from a solution?

The naive answer simply appeals to the principles of **Document First, Test Driven Development**. While there may be innumerable ways in which the solution can be improved, the tests are passing and therefore the code is complete.
