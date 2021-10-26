## Definition

To better understand casting its worth reading about [data types](data-type.md) first.

So if data types define the type of data computers store, casting is converting data from one type to another.
 

## Use Cases and Examples

Computers recognize different types of data. For example,  text is identified as `strings`. 

But one thing that does not translate into the real world is that numbers can be converted to strings as well. Meaning the computer will treat the number like its text. 

Once a number becomes a string, you can append it to other numbers or text.

Here is an example of the difference between adding numbers and adding numbers that have been cast into strings. 

```
// adding numbers together

console.log(2 + 2) // 4

// adding numbers converted to strings together 
console.log(String(2) + String(2)) // 22

// adding a number and a number converted to string together
console.log(String(2) + 2) //22
```

The first example shows the results you get back from adding 2 and 2 together, resulting in a `4` as expected. 

In the second example, we convert both numbers to strings using the [function](function.md) `String()`  now, instead of adding the numbers together, 2 is appended to the second 2  resulting in `22`. `+` is now acting as a glue, putting both numbers together in a process known as [concatenation](concatenation.md).

With the last example, you might have noticed we only converted the first number to a string and still ended up with a concatenation instead of a summation. In our example, we used Javascript. Some languages treat this scenario a bit differently.

## Summary
Casting can be performed between many data types, but you might end up with an undesired result sometimes. For example, what do you get if you try to cast a string to a number?
Well in Javascript you will end up with a **NaN**, `parseInt("some text") // NaN`.

Other [programming languages](programming-language.md) interpret this differently. 


