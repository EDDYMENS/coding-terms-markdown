## Definition
For a computer to execute our [code](code.md) we need either a [compiler](compiler.md) or [interpreter](interpreter.md) to convert it to machine code the computer understands. 

Interpreters convert source code to machine code one chunk at a time, and the computer performs each action as and when this code is interpreted.

The thing with interpreters is that each time you rerun the code, this translation happens again. **Just in time compilers** make it possible to compile parts of the code so it can skip interpretation the next time that part of the code runs.
This process can sometimes even be optimized based on which part of the code is run often.

## Use cases and Examples

The [V8 Javascript engine](https://v8.dev) used in the [Chrome browser](https://www.google.com/chrome) and [NodeJS runtime](https://nodejs.org/en) comes with a JIT compiler.

The .NET runtime also uses a JIT compiler, meaning all languages that run on it benefit from this implementation.

## Summary
All in all, JIT compilers supercharge interpreters by giving them some of the advantages of compilers.