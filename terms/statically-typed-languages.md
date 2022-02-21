## Definition

A **Statically Typed Language** is one where the [data types](data-type.md) of its variables need to be defined ahead of time.

## Use Cases and Examples
For example, a programming language such as C requires you to specify the type of data that the variable will be storing ahead of time. 

```
char name[] = "John Doe";
```
Many modern statically typed languages take a more intuitive approach to ask developers to define the type of a variable, for example unlike in the C programming language where the developer needs to also be aware of the size of their string in other to pick the right type, languages like Golang allow the developer to just specify the type whiles the [compiler](compiler.md) figure out the right memory size to allocate to that variable.

In fact, you don't have to specify the type, by just assigning a value to the variable, Golang infers both the type and size of the variable.


```
name = "John Doe"
```
In a statically typed language, once you define a type for a variable, the variable can only hold values of that type and nothing else. 
However, some programming languages do not require the developer to define a type for variables and the same variable can hold different values of different data types at any point in time. Such programming languages are said to be [dynamically typed](dynamically-typed-languages.md). Examples include Python and PHP.

```
// An example in PHP where it stored name as a string then later as an array
name = "John Doe";
name = ["John", "Mark", "James"];
```

## Summary

Being able to know the size and type of data to be stored helps the compiler to further optimize the execution of a program.
This has been one of the advantages of compiled languages, However concepts such as [JIT](just-in-time-compiler-jit.md),
help interpreted or dynamically typed languages to optimise program execution as well.