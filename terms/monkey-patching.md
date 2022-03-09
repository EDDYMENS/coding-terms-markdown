## Definition

Monkey patching involves overriding the default functionality of code with another during execution ie: ([runtime](runtime.md)).

## Use Cases and Examples

```
//output before override
console.log("hello"); // hello

//overriding default action
console.log = function(input) {
    return "Output is: "+input;
}

//output after override
console.log("hello") // Output is: hello
```

The above Javascript code shows the output of the `console.log` function before and after its monkey patched, with an extra string (`Output is:`) attached to the output after its patched.

## Summary
There are a few good use cases for monkey patching in programming, for example, we can mute all `console.log` outputs when in production by just patching it up. There are however many instances where monkey patching can lead to code that is hard to work with.

Monkey patching could mean overriding well-known functionalities which could lead to confusion among co-developers and potential [bugs](bug.md) in your code.

If you ever think of monkey patching there is a chance something wasn't done right in your code, to begin with.
