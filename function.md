## Definition

A function is very similar to functions in math, for example, take this expression `y = (a+b)*c`, once you replace a,b,c with actual numbers you will get a number back which is currently represented by the [parameter](parameter.md) `y`.

Now, in programming, you have these same kinds of expressions that take in parameters like above and return an output.


## Use Cases and Examples

Alright so lets express the mathematical expression as a function in the Javascript programming language.

```
// declaring the function
function exampleFunction(a, b, c) {
    return (a+b)*c;
}

// using the function
exampleFunction(1,2, 3);
```
Now as you can see from the above code, there are some similarities to the math expression we saw earlier, just a bit more verbose, this extra layer is what we call the [syntax](syntax.md) of the language.

Now in the real world developers don't just create functions to add numbers together. Functions are usually created to represent a set of code that performs a specific task the developer will have to use in many places. 

For example, if the developer will be calculating discounts over and over again as they write code, then it might be worth bundling all the code needed to calculate discounts into a function so they just call on the function anytime they need to calculate discounts.

Think of what `!` means in our everyday world, if you see it on a signboard you know you need to be careful. We captured the meaning of being careful in that one symbol and we get to use it anywhere.

## Summary

Functions are the most basic way a developer can reuse any piece of code. There are other advanced ways to capture and reuse code like using Classes.
Also not functions don't always have [parameters](parameter.md).