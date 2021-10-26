## Definition

[Functions](function.md) when used in code performs a set of predefined instructions, its similar to options on a washing machine where choosing one setting will wash your cloths at a specific temperature, for a set duration.

Functions may take in [arguments](argument.md) and return results. Sometimes you will like some external code or a third-party developer to determine what to do with the output.

In this case the third party developer defines what they will like to do with the output in their function then pass it into your function.

Another case is in some [programming languages](programming-language.md) like Javascript, you can use callbacks if the function is going to take a while to finish up a task. In this case, you pass in a callback to continue performing some task once the original function is done computing what it needs to do.

## Use cases and Examples

Here is sample code in Javascript getting some data from a [server](server.md) and then using a callback to print it out once the server returns the output.

```
fetch('http://example.com/message.json')
  .then(function(response) {
      return response.json();
  })
  .then(function(data){
      console.log("print message:", data);
  });

console.log("second line will show up first");
```

**NB:** The output will look like this: 

```
second line will show up first
print message: hello
```

The reason being that Javascript does not wait for the message to be returned from the server before moving onto the second line, so while the data is yet to be sent from the server, the second line is executed. When the server finally returns the result the callback will be ready to print it out to screen. Thus this part of the code:
```
 .then(function(data){
      console.log("print message:" data);
  });
```

## Summary

Callbacks are very popular with the Javascript programming language because it's an asynchronous language. Meaning, it doesn't always wait for one task to finish before moving on to the next, hence you provide a callback to capture outputs as and when parts of the code provide them. 

The use of callbacks in the language has been problematic leading to an issue referred to as callback hell.
This has led to the use of structures such as [async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)