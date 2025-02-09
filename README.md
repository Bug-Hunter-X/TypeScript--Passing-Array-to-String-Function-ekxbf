# TypeScript Bug: Passing Array to String Function

This repository demonstrates a common TypeScript error: attempting to pass an array to a function that expects a string.  The `greeter` function is defined to accept a string, but the code attempts to pass an array. This results in a compilation error.

The solution demonstrates how to correctly handle this situation, either by modifying the function signature or by correctly handling the input array.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`. You will observe a compilation error.
3. Then compare it to the `bugSolution.ts` file which contains the corrected code.