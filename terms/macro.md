## Definition:

A macro is a pseudo instruction that is meant to be converted to code later on.

Similar to the use of emojis during texting. It's just a single image but conveys meaning to its intended reader. One that might span an entire sentence if expressed as text.

 In the software landscape, macros allow the developer to type out simple language constructs. This construct will later be expanded into actual code the compiler or interpreter will understand. 

## Use cases and Examples
Not all [programming languages](programming-language.md) come with macros, but you can always implement some form of macro into your development flow.

Here is an example of macros in the C programming language:

```
// here is the macro definition 
#define SUM(x, y) x + y

// here is the macro usage
int ans = SUM(1, 2)
```

In the example above, we defined our macro, and when it's time to use it, we don't have to explain what needs to be done.
The above example looks very similar to functions. Macros in C go beyond this example though.

## Summary
Macros are less used in modern programming languages. There is another concept similar to the use of macros known as preprocessors.

This is a setup where the code the developer writes is first passed through a compiler-like setup, and the output is then passed through the actual compiler or interpreter of the programming language in use.

This middle step allows developers to introduce special syntax or add anything the programming language they are working with might be lacking.
