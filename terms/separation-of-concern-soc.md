## Definition

Separation of concerns is the separation of functionality into distinct components. This means that the code is organized in such a way that a change in the functionality of one part does not lead to a domino effect where other parts are affected.

## Use cases and Examples

An example of this is separating the code that deals with business logic from that which handles data storage.

Another example of this is creating a module that handles the input, and another that handles the output. The input module might use a touch sensor, but the output module might use a voice command as its input. This way, as new technologies come out, we can swap out one module for another without having to rewrite everything.

## Summary

Separation of Concern as a whole helps improve software quality and maintainability. It prevents coupling between different business logics, thus improving reusability. 