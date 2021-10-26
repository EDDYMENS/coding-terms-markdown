## Definition

**MVC** is an abbreviation for **Model View Controller**, a way to structure your [codebase](source-code.md) such that everything regarding what end-users sees (**View**), everything regarding data (**Model**), and everything regarding logic (**Controller**) are all stored in separate places within the codebase.

Also, this involves maintaining a clear path for all three components to work together to achieve a cohesive software application.


## Use cases and Examples
So the question is why go through the trouble of ensuring all these three entities are separated?

 Building software usually requires software developers to have a proper mental picture of the software they are working on, and what better way to do that than identify or create patterns to help out with that.

As long as all the developers working on the software are familiar with the pattern, they will know where to find what.

Sometimes they might even split up into teams focusing on just one part of the three components if the project is large enough.
Also implementing something like this contributes to good software architecture.

## Summary
There are many kinds of [design patterns](design-pattern.md) similar to MVC but with different philosophies with some suiting different types of software applications better.

For example, MVC is predominately used in web development. Also most of the time you won't have to structure your software to adopt this approach as you will likely be working with a [web framework](web-framework.md) that will already have this in place.