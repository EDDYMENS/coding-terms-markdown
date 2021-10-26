## Definition

When you take a look at mathematical formulas most of them usually have alphabets say **x** or **y** in them, and the intention is that anyone using these formulas will replace the **x** and **y**s with actual values. In the programming world functions can be viewed as these formulas and arguments will be the values you pass in to replace **x** and **y**


## Use Cases and Examples

Here is an example of a function in Javascript that adds two [parameters](parameter.md) together:

```
// declaring the function
function adder(a, b) {
    return a+b;
}

// using the function
adder(1,2);
```

What you have above is a function called **adder** that takes two parameters and returns the sum of `a` and `b`. The last bit of the [code](code.md) shows how you will use this function. 
You will refer to the values you pass in to replace the parameters as arguments.

## Summary

Your output will always correspond to what you passed in as arguments to a function or method.