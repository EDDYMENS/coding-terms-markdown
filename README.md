# DV-JS-SDK
The Devless JS SDK provides a host of functions for working with data from the Devless backend.

## There are three parts to using the SDK:
* Setting keys and token
* Using Auth Service
* Working with data

## Setting keys and token

***Get token and key from the App tab of your Devless instance***

window.devless_token = "";

window.devless_key = "";

***attach the domain name under which the Devless intance is running*** 

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
Devless.logIn(indentifier_type, identifier, password, function(data){console.log(data)})
```
where indentifier_type maybe email or phone_number 
and the indetifier being the the respective value eg:

```
Devless.logIn("email", "will@gmail.com", "password", function(data){console.log(data)})
```

**getProfile:**

Once a user is logged in you may get the user details using the ``getProfile`` function. 

```
Devless.getProfile(function(data){console.log(data)})
```
This return status_code 1000 if the user is logged in or status_code 1001 if the user isn't logged in.

**updateProfile:**

You may update the user profile using this function and request payload below 

```
profile = {
      firstname:"",
      lastname:"",
      email:"",
      phonenumber:"",
      username:"",
      password:"",
};
     
Devless.updateProfile(profile, function(data){console.log(data)})

```
### NB: the session token is updated once the profile updates.

**queryData:**

Access or query data from any table from the backend using this function. This params can be used to manipulate the 
data fetch. 

```
params={
	size:2,
	order:"content",
	where:"id,2",
	offset:2
}

Devless.queryData: function(serviceName, table, callback, params ){

```

* To query data from the Devless backend you need a to specify the service name, table and then a callback function.
* Also you may pass query parameters. you may get set the number of results sent back with teh ``size`` params,
order param to get order the results in descending order based on a a particular field.
* The where parameter gets data where the key id is equal to 2.

**addData:**

You may add data to a service table using Devless.addData(serviceName, tableName, function(result){console.log(result)}, data)
where data is a JSON object.
eg:

```
data = {
  "title":"the fox",
  "content": "all about the fox"
}
Devless.addData("blog", "blogTable", function(d){console.log(d)}, data)
```
**updateData:**

You may update data to a service table using Devless.updateData(serviceName, tableName, identifier_type, identifier, callback, data)
where data is a JSON object.
eg:

```
data = {
  "title":"the bear",
  "content": "all about the bear"
}
Devless.updateData("blog", "blogTable", function(d){console.log(d)},data)
```
**delete:**

You may delete data or drop a table using Devless.delete(serviceName, table, where_key, where_value, action, callback)
where action may be ``delete`` to remove the record or ``truncate`` to clear the table and  ``drop`` to drop the table all together
eg:

```
Devless.delete("blog", "blogTable", "title", "the bear", "delete", function(d){console.log(d)})
```

**runScript:**

You may execute scripts from the server using Devless.runScript(serviceName, method, data, callback).

All you need in other to execute a Devless backend script is the serviceName, a method either (GET or POST or PATCH or DELETE)
and pass the data needed by the script.

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
* All response from the Devless backend have status_code with 700 meaning internal failure
* A message
* payload containing returned data
* The Auth Service returns a status code of 1000 on success and 1001 on failure all other errors returns 700
