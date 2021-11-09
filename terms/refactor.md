## Definition

The art of reorganizing your [codebase](code.md)  without altering its original functionality is known as refactoring. 

The objective of refactoring is to enhance internal code by making changes that do not affect the code's outward behavior. The primary purpose of refactoring is to reduce [technical debt](technical-debt.md) and make code easier to maintain in the future. 

## Use Cases and Examples

There are many ways you can refactor your code. 

You can look out for code that is repeated all over the codebase and represent them as a class, method, [function](function.md) etc. This way, you will always make changes in one place instead of going through the entire codebase when something needs to change.

Complicated code can also be rewritten using a more readable and understandable [syntax](syntax.md).

And sometimes, parts of the code are moved into different folders, also the rewording of names used in the codebase.

Essentially anything the developer thinks will improve the code's quality qualifies as a refactor.

## Summary

We refactor because we realize how difficult it is to get design right the first time, and frequent refactoring helps us correct and improve the design over the life span of the codebase.