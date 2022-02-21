## Definition
A **Dynamically Typed Language** is one where the [data types](data-type.md) of its variables do not need to be defined ahead of time.

## Use Cases and Examples
Unlike [statically-typed-languages](statically-typed-languages.md) where there are strict rules regarding definitions of types and the size of variables, dynamically languages allow developers to set variables to whatever value, type, or size they need without defining them ahead of time.

```
// An example in PHP where it stored name as a string then later as an array
name = "John Doe";
name = ["John", "Mark", "James"];
```
The above example in PHP shows a developer who sets a `name` variable to a string then later simply changed it to an array of names, the interpreter infers from the code and makes the necessary adjustments in terms of computing resources.


## Summary
Being free to define variables as and when needed frees a developer from the mental load of keeping track of "what is what", but then this can also cause serious problems if the program mistakenly processes data in the wrong way given data types can be changed without warning. For example, when a program sums up a number and a string you might end up with unpredictable results.