## Definition
Concurrency as a general term is used to describe two or more events happening at the same time independent of each other. 

In software, it pretty much means the same thing and is used to describe different types of events as well. For example, we can talk about the concurrency that happens at the [operating system](operating-system.md) level, where multiple applications run independently of each other. 

Concurrency can be experienced within software applications as well, where developers identify instructions or operations of the software that are independent of each other can be run at the same time without causing problems. 


## Use Cases and Examples
[Programming languages](programming-language.md) that support concurrency makes it possible for developers to create applications that can better leverage powerful computer CPUs. 

Imagine a software application that needs to log some data and also needs to prepare a report when the user starts the application. With concurrency, these two tasks can run independently of each other. The user gets served the report a lot faster without waiting on the log to finish assuming the user doesn't care about the logs.

## Summary
Programming languages employ different strategies such as multiprocessing and or multithreading among others to achieve concurrency.
Not all programming languages come with concurrency built-in.

Examples of programming languages that come with some form of concurrency include Golang, Rust, Python, etc.
