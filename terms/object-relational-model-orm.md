## Definition
Object Relational Models (ORMs) is a [library](library.md) which is code that helps developers to represent and work with data from [databases](database.md) in the form of objects without context switching between their [programming language](programming-language.md) and say SQL.

## Use cases and Examples
As an example, if a developer working in PHP wanted to retrieve some data from the database without using an ORM, the code would look like this:

```
SELECT * FROM students;
```

In an ORM like Eloquent, it would look like this:

```
Students::all();
```

In the second code example, it appears to be shorter, but that's not always the case nor is it the main benefit. An advantage of this is that a developer who does not know SQL can still understand what is happening in their PHP code. 

Additionally, if the team decides to switch databases, little needs to be changed within their code. 

## Summary
There are many ORMs that are part of a [web framework](web-framework.md) such as Eloquent, which is a part of the ['Laravel framework'](https://laravel.com/docs/8.x/eloquent-serialization).

