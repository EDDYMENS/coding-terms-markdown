# DV-JS-SDK
The Devless JS SDK provides a host of functions for working with data from the devless backend.

## There are three parts to using the SDK:
* Setting keys and token
* Using auth
* Working with data

## Setting keys and token

***Get token and key from the App tab of your devless instance***

window.devless_token = "";

window.devless_key = "";

***attach the domain name under which the devless intance is running*** 

window.devless_domain_name = "localhost";

***//http, data, chrome, chrome-extension, https, chrome-extension-resource.***

window.devless_request_protocol = "http";

***//change port number if required***

window.devless_port = 8000;

## Using auth
**SignUp:**

To signUp a user you may pass the following object to ```Devless.signUp()`` function 

 ```
 data = {
      firstname:"",
      lastname:"",
      email:"",
      phonenumber:"",
      username:"",
      password:"",
     }
Devless.signup(data, function(data){console.log(data)})

```
This returns a response object 

**logIn:**

To logIn a user you may pass the following object to ```Devless.logIn()`` function 

```
Devless.logIn(indentifier_type,identifier,password, function(data){console.log(data)})
```
where indentifier type maybe email, phone_number or email 
and the indetifier  being the the respective value eg:

```
Devless.logIn("email","will@gmail.com","password", function(data){console.log(data)})
```

**getProfile:**

Once a user is logged in you may get the user details using the ``getProfile`` function. 

```
Devless.getProfile(function(data){console.log(data)})
```
**updateProfile:**

You may update the user profile with the 

```
profile = {
      firstname:"",
      lastname:"",
      email:"",
      phonenumber:"",
      username:"",
      password:"",
     };
     
Devless.updateProfile(profile,function(data){console.log(data)})

```
### NB: the session token is updated once the profile updates.

**queryData:**

You may update the user profile with the 

```
params={
			size:2,
			order:"content",
			where:"id,2",
			offset:2
		}     
Devless.queryData: function(serviceName, table, callback, params ){

```

* To query data from the devless backend you need a to specify the service name ,table and then a callback function.
* Also you may pass query parameters. you may get set the number of results sent back with teh ``size`` params,
order param to get order the results in descending order based on a a particular field.
* The where parameter gets data where the key id is equal to 2.

**addData:**

You may add data to a service table using  Devless.addData(serviceName,tableName ,function(result){console.log(result)},data)
where data is a js object to be added to the table.
eg:

```
data = {
  "title":"the fox",
  "content": "all about the fox"
}
Devless.addData("blog","blogTable",function(d){console.log(d)},data)
```
**updateData:**

You may update data to a service table using  Devless.updateData(serviceName, tableName,identifier_type,identifier,callback, data)
where data is a js object to be added to the table.
eg:

```
data = {
  "title":"the bear",
  "content": "all about the bear"
}
Devless.updateData("blog","blogTable",function(d){console.log(d)},data)
```
**delete:**

You may delete data or drop a table using  Devless.delete(serviceName, table, where_key, where_value, action, callback)
where action may be ``delete`` to remove the record or ``truncate`` to clear the table and  ``drop`` to drop the table all together
eg:

```
Devless.updateData("blog", "blogTable", "title", "the bear", "delete", function(d){console.log(d)})
```

**runScript:**

You may execute scripts from the server using   Devless.runScript(serviceName, method, data,callback).

All you need in other to execute a devless backend script is the serviceName , a method either(get ,post, patch and delete)
and dpass data needed by the script.

eg:

```
data = {
  "author":"edmond"
}

Devless.runScript("blog", "POST", data function(d){console.log(d)})
```
**token:**

You can have access to the current token with ``Devless.token(callback)``

**response structure**
* All response from the devless backend have status_code with 700 meaning internal failour
* A message
* payload containing returned data
* The auth returns a status code of 1000 on success and 1001 on failour all other errors might return 700
