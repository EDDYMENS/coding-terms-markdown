## Definition

The term  **concatenation** means the joining of two things.

Concatenation is the operation of connecting two strings in programming. 


## Use Cases and Examples

Concatenation is used mainly in the presentation of data on a user interface. 

For example, you typically provide your name in an online form as separate fields, i.e., first and last name.

However, when it comes to displaying them say, on a receipt, the software will stack them side by side with a space in between.

In psuedo code this will look something like this `first_name+ space + last_name`.

In Javascript, this will be:

```
firstName = 'John';
lastName  = 'Doe';
fullName = firstName+' '+lastName;
console.log(fullName); //John Doe
``` 
From the above JavaScript [code](code.md), `fullName` acts as a [variable](variable.md) storing the combination of `firstName` combined with a space using the `+` symbol then the `lastName`. 

Most programming languages use the `+` symbol for concatenation as well. But for example, PHP uses `.` for this.

In addition to this approach, some programming languages provide special functions for this as well. These functions allow for complex concatenations. 

An example is PHPs [`sprintf`](https://www.php.net/manual/en/function.sprintf.php) function.

## Summary

As a developer, you will find yourself doing a lot of concatenations. 
Depending on the programming language in use, you will have to be careful because, for most languages, the same `+` symbol also means addition. 

If the values to concatenate turn out to be numbers, they might be summed up instead. 
You need an understanding of [casting](casting.md) to know how to deal with such cases. 