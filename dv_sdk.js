
/**
@author Devless
@version 0.1
@description Devless sdk for Javascript
*/
/* Initizialize library */

//constants
window.devless_token = "e5be7b06e6427becfea9f806d0d49b20";
window.devless_key = "localhost";



//http, data, chrome, chrome-extension, https, chrome-extension-resource.
window.devless_request_protocol = "http";

//change port number if required
window.devless_port = 8000;



window.devless_instance_url = 
window.devless_request_protocol+"://"+window.devless_key+":"+window.devless_port;
var Devless =
{
	signUp: function (data, callback){

			var data = JSON.stringify({
			  "resource": [
			    {
			      "auth_type": "signup" ,
			      "first_name": data.first_name ,
			      "last_name": data.last_name ,
			      "email": data.email ,
			      "phone_number": data.phone_number ,
			      "username": data.username ,
			      "password": data.password ,
			    }
			  ]
			});

			sub_url = "/api/v1/service/auth/script";
			Devless.requestProcessor(data, sub_url,  "POST", function(response){

				
				if(response.status_code == 1000 ){

					
					sessionStorage.setItem('devless_user_token', response.payload[0]);
 
				}
				
				callback(response);
			});

			

	},

	logIn: function (identifier_type, identifier, password, callback){

		partial_user_data = {
			  "resource": [
			    {
			      "auth_type": "login" ,
			      
			      "password": password ,
			    }
			  ]
			}

			window.user_data = partial_user_data;
			user_data.resource[0][identifier_type] = identifier; 
			
			var data = JSON.stringify(user_data);
			sub_url = "/api/v1/service/auth/script";
			Devless.requestProcessor(data, sub_url,  "POST", function(response){

				if(response.status_code == 1000 ){

					
					sessionStorage.setItem('devless_user_token', response.payload[0]);
				}
				
				callback(response);
			});
	},

	logOut: function (callback){
		
		user_data = {
			  "resource": [
			    {
			      "auth_type": "logout" 
			    }
			  ]
			}

			var data = JSON.stringify(user_data);
			sub_url = "/api/v1/service/auth/script";
			Devless.requestProcessor(data, sub_url,  "POST", function(response){

				callback(response);
			});
	},

	getProfile: function (callback){
		user_data = {
			  "resource": [
			    {
			      "auth_type": "profile" 
			    }
			  ]
			}

			var data = JSON.stringify(user_data);
			sub_url = "/api/v1/service/auth/script";
			Devless.requestProcessor(data, sub_url,  "POST", function(response){

				console.log(response);
				
				callback(response);
			});
	},

	updateProfile: function (data, callback){

			var data = JSON.stringify({
			  "resource": [
			     data
			  ]
			});

			sub_url = "/api/v1/service/auth/script";
			Devless.requestProcessor(data, sub_url,  "PATCH", function(response){

				
				if(response.status_code == 1000 ){

					
					sessionStorage.setItem('devless_user_token', response.payload[0]);
 
				}
				
				callback(response);
			})		
	},

	//add options to params object
	queryData: function(serviceName, table, callback, params={} ){

			var	parameters = "";
			//order parameters
			for (let key in params) {
				  if (!params.hasOwnProperty(key)) { console.log(key) }
				    parameters = "&"+key+"="+params[key]+parameters;
			}
			sub_url = "/api/v1/service/"+serviceName+"/db?table="+table;
			Devless.requestProcessor("", sub_url,  "GET", function(response){

				callback(response);
			})		

	},

	addData: function(serviceName, table, callback, data={}){

			
			var payload = JSON.stringify({
			  "resource": [
			    {  
			         "name": table,
			         "field":[  

			            data
			         ]
		      }

			  ]
			});

			sub_url = "/api/v1/service/"+serviceName+"/db";
			Devless.requestProcessor(payload, sub_url,  "POST", function(response){

				
				callback(response);
			});

	},

	updateData: function(serviceName, table, where_key, where_value, callback,  data={}){

		var payload = JSON.stringify({  
	   	"resource":[  
	      {  
	         "name":table,
	         "params":[  
	            {  
	               "where": where_key+","+where_value,
	               "data":[
	                   data
	               ]

	            }
	         ]
	      }

	    ]
		});

			sub_url = "/api/v1/service/"+serviceName+"/db";
			Devless.requestProcessor(payload, sub_url,  "PATCH", function(response){

				
				callback(response);
			});

	},

	//operation types : delete drop truncate
	delete: function(serviceName, table, where_key, where_value, action, callback){

			var payloadObj = 
				{  
				   	"resource":[  
				      {  
				         "name":table,
				         "params":[  
				            {  
			                   "where": where_key+",=,"+where_value
					         }
				         ]
				      }

				    ]
				};
			
			payloadObj.resource[0].params[0][action] = "true";
			console.log(payloadObj);
			payloadStr = JSON.stringify(payloadObj);
			console.log(payloadStr);
			sub_url = "/api/v1/service/"+serviceName+"/db";
			
			Devless.requestProcessor(payloadStr, sub_url,  "DELETE", function(response){

			callback(response);

			});

	},

	runScript: function(serviceName, method, data, callback){

			sub_url = "/api/v1/service/"+serviceName+"/script";
			
			Devless.requestProcessor(data, sub_url,  method.toUpperCase(), function(response){

			callback(response);

			}, false);

	},

	requestProcessor: function(data, sub_url, method, callback, parse=true ){
		

		var xhr = new XMLHttpRequest();


		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === 4 && parse == true) {
		  	response = JSON.parse(this.responseText);
		    callback(response);
		  }
		  else{

		  	callback(this.responseText);
		  }
		});

		xhr.open(method.toUpperCase(), window.devless_instance_url+sub_url);
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("devless-key", window.devless_key);
		xhr.setRequestHeader("devless-token", window.devless_token);
		

		if(sessionStorage.getItem('devless_user_token') != ""){

			xhr.setRequestHeader("devless-user-token", sessionStorage.getItem('devless_user_token') );
		}
		
		


		xhr.send(data);
	},

	
}



