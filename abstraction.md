## Definition
In general terms, the word **abstraction** means leaving out or hiding the details of something, an approach that is mostly taken to help a person better understand the matter at hand without getting stuck in the details.

The use of this word in software development is not too far off from the general definition. Software developers usually use the word to describe having to make sure others working with their code or systems don't have to care too much about unnecessary details.

## Use cases and Examples
A good example of an abstraction is a [payment processor](payment-processor.md).
A payment processor provides you with ways to accept payments from your customers within your software.

When we forward payment details from our app to the payment processor, a lot of processing is done by the processor itself, this could range from currency exchanges to VAT calculations. There is also the acquiring bank who then does some processing of its own sorting out the transaction for the customer then finally returning a response to our app through the processor.

But mostly programmers integrating with these payment processors don't have to think too much about  all that. Most of it is abstracted away and the programmer is left with very little to deal with to integrate these  payment processors into their apps.

## Summary
Abstraction happens at different levels of computing from logic gates, [compilers](compiler.md) to the [code](code.md) itself. 

It greatly helps programmers to focus on newer problems instead of every bolt and nut of their software or the hardware they are working with.