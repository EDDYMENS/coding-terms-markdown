## Definition

In programming, the process of deprecation occurs when a certain piece of code within a [codebase](source-code.md) becomes irrelevant or is no longer of any use. In such a situation, newly written [code](code.md) replaces the previous code. However, the programmer has to be careful about deciding what to do with deprecated code, as removing it can result in regression errors. Meaning other parts might depend on this piece of code and that might lead to errors. 

## Use Cases and Examples

An example of deprecation is the use of the `gets()` function in the C [programming language](programming-language.md).

Deprecated code usually comes up when some code has long been replaced, but it's still kept around for safety reasons, in case it's been used by some other code. Many forms of warning are usually employed either in code editors or [documentation](documentation.md) to warn developers to not use this deprecated code in new code as it will be phased out over time.

## Summary

The process of deprecation is a normal occurrence when updating any program/code. It usually follows the addition of new code that supersedes the previous one. While the old code becomes irrelevant, it still has to be tackled carefully as simply deleting it can cause errors. 
