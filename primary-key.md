## Definition

Most often, data units stored in a [database](database.md) will have a unique identifier. This unique identifier makes it easy to pinpoint one specific data unit when working with many records.

They act like human names, except no two people will ever have the same name.

## Use Cases and Examples

Primary keys can be created and assigned to a data unit, or an existing part of the data can be used as a primary key.

Most databases will create one since it's predictable and controlled by the database.
Most relational databases assign counting numbers to data units when they are stored in the database. This ID serves as a primary key, which means the first data unit will have an id of 0, the next 1,2,3,4, onward.

Let's say you have a  database full of student records. Each student will be assigned a unique ID. This part of the data can also be used as a primary key. 



## Summary

Some databases use primary keys to help speed up the search of data units during querying.
