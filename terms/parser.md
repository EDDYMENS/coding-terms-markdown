## Definition

Just like breaking down a sentence in English into nouns, verbs, adverbs, etc, Parsers take code and break its [syntax](syntax.md) into different parts ready to be converted into instructions the computer will understand.

Parsers are a part of a bigger system that converts code to instructions the computer can understand known either as an [interpreter](interpreter.md) or a [compiler](compiler.md).

## Use Cases and Examples

Let's assume you have this expression to parse `find customers with age equals 32`. The parser breaks down the expression into:

- `find` as the main command
- `customers` and `age` as the field names
- `with equals` as the conditional search
- `32` as the search data

 With this extra context, the compiler or interpreter knows which instruction set to send over to the computer to find customers who are 32 years of age.

Parsers are used all over the place in computing from converting "HTML and CSS" to something the rendering engine can understand in other to output something useful to the browser. Also to convert one programming language to another like [TypeScript](https://www.typescriptlang.org/) to [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).

## Summary

For machines to function, a human-readable instruction need to be converted into machine language. This job is done by the compiler or interpreter. The parser acts as a component of the compiler or interpreter that organizes the data for easier interpretation.
