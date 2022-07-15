## Definition
Key-value pair is a phrase used to refer to any data set that has two parts, an identifier known as a key and a value being the data captured.


## Use Cases and Examples
key-value pairs make it easy to organize data into groups.
There are many data stores and data structures that store information as key-value pairs. For example the [JSON](json.md) data structure

```JSON
[
   {
      "name":"Ama",
      "age":23
   },
   {
      "name":"Kofi",
      "age":24
   }
]
```
In the above example one of the objects has `name` as the key and the value being  `Ama`.

Some databases that implement key-value pair structures include [redis](https://external.ink?to=/redis.io) and [memcached](https://external.ink?to=/memcached.org). Because of the simple nature of key-value data stores they are mostly used to store simple data sets like [cached](cache.md) data and queue values.
