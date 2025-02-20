# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing server crashes.  Specifically, it showcases how attempting to read a non-existent file using `fs.readFileSync` can lead to a fatal error if not properly handled.

The `bug.js` file contains the faulty code. The `bugSolution.js` file provides a solution demonstrating how to use `try...catch` blocks to handle potential errors gracefully.