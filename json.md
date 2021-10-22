## Definition

JavaScript Object Notation (JSON) is a format derived from JavaScript that only uses text to store and transmit data. It helps represent structured data in a text format, which is done through the pairing of values and labels known as keys. A major benefit of JSON is its easy-to-use format for storing and transmitting data. The JSON format is typically used when data is sent from a server to a webpage.

## Use Case and Examples

Here is an example of student data held in JSON format

```
{
   "employees":[
      {
         "name":"John Doe",
         "age":12,
         "score":5.5
      },
      {
         "name":"Jane Doe",
         "age":18,
         "score":2.5
      }
   ]
}
```

Now there are different data types that JSON can store and these are:
- **String:** JSON can store any form of alphanumeric text, like names or even blog posts.
- **Number:** is any form of integer or float(decimal number).
- **Object:** sometimes you want to have a block of data that needs to be associated with a key, so say the key is an employee's name, and you have many values to attribute to him/her you will use an object, just like the example above.
- **Array:** is suitable for representing a list of items, it could be a list of fruits, a list of countries, etc.
- **Boolean:** is used to represent a true or false state. For example, you can have this `{"closed":true}`.
- **null:** is used to represent emptiness.

To be clear JSON is a key-value pair kind of exchange format, meaning on the left you have a label known as the key and to the right is the value, different data types can be used for the value but the key always has to be a string. You can get around using a number as a string though by just wrapping double quotes around it ie: `{"1":"Usain Bolt"}`. Also, single quotes can not be used in JSON to wrap around strings, only double quotes.
## Summary

In short, JSON provides an easy-to-use format to store data in a key-value pair format. In the past, a more verbose data exchange medium was used known as XML but JSON replaced it given it's a lot less verbose which means less unrelated data needs to be transferred over a network for example.