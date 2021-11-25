## Definition

Shell is an [interpreter](interpreter.md), a program designed to run on UNIX-based [operating systems](operating-system.md). To work with shell you can type out your instructions right in the terminal or write the instructions out as a script which will contain the instructions to be  executed by the shell interpreter.

Several commands can be executed using shell, from telling the time to manipulating files.

## Use Cases and Examples

Shell scripts have several use cases and are generally used to automate processes that are repeatedly asked to be executed by the user. By writing a shell script, the developer can automate such processes to avoid unnecessary repetitive tasks.
Below is an example Shell code prompting users to write their names and giving a response in return:
```
Echo “Hello, would it be okay if I were to ask you your name?”
Read NAME
Echo “Hello, $NAME”
```
The result would appear in the following manner:
```
Hello, would it be okay if I were to ask you your name?
John
Hello, John
```
Another popular use of shell scripting in the past was for the [deployment](deployment.md) of software onto [servers](server.md), these days this has been overtaken by a lot more complex tools.

## Summary

Shell scripting is a UNIX-based computer program that allows certain recurring tasks to be automated. The commands entered are to be executed by the shell interpreter.
