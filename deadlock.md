## Definition
Deadlock is a scenario where two or multiple processes or computer programs get blocked because every one of them is holding a resource while also waiting on the other process to release the resources it needs.

In the early era of computer systems, the [operating system](operating-system.md) could run only one program so all the system resources were utilized by that program. Later, operating systems managed to run multiple programs where each program was required to list out the resources it needs beforehand. Today, operating systems also offer dynamic resource allocation, which implies that the program can even ask for more resources once it starts running. Failing to get the resource in such a case results in a deadlock.

## Use Cases and Examples
Imagine two trains are driving on the same track and coming towards each other. Once they reach close to each other, they have no other option other than to just stop. Neither one of them can move, so we call this situation a deadlock.

In an operating system, a process first requests the resource, then uses the resource, and lastly releases the resource. But the deadlock occurs when Process 1 who is using Resource A needs Resource B, which is currently being used by Process 2 who needs Resource A.

## Summary
In a deadlock, the process cannot run further until the other process releases the resource. Since the operating system cannot guess what to do next, the best way out is to terminate one process to free those resources. 
