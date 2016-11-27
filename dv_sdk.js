/**
@author Devless
@version 0.01
@description Devless sdk for Javascript	
*/
/* Initizialize library */

//var constants = { "token":"284b0f10d7720d212acd6097fb00b19b", "domain":"http://solitary-night-6250.herokuapp.com." }; 
//Devless = new Devless(constants);

(function(global) {
	"use strict";
	  
	var Devless = function(constants) {

		if(!constants){
		  console.error("Your app failed to  connect to Devless ): Please make sure token and key is set properly ");
		  return;
		}
		console.info("App is trying to connect to Devless ...");
		var sub_url = "/api/v1/service/dvauth/script";
		var data = {};
		var DevlessInstance = new Devless.init(constants);
        global.returnedInstance ='';

		 requestProcessor.call(DevlessInstance,data, sub_url, "POST", function(response) {
			 response = JSON.parse(response);
			console.log(response);
			if (response.status_code == 631) {

				console.error("Your app failed to  connect to Devless ): Please make sure token and key is set properly ");
			} else if (response.status_code == 1000) {

				console.debug("Your app connected to Devless successfully and you have auth service installed");
				returnedInstance = DevlessInstance; //creates and returns a new Devless instance only if connected successfully

			} else {
				console.debug("your app connected to Devless successfully. you can get services from store.devless.io ");
				
				returnedInstance  = DevlessInstance; //creates and returns a new Devless instance only if connected successfully
				//console.log(DevlessInstance);
				//console.log(returnedInstance);
			}
		}, true);
		
		return DevlessInstance;
	}

	Devless.prototype = {queryData:queryData,
                         addData:addData
	 };

	Devless.init = function (constants) {
		var Self = this; //using this can be ambigiouse in certain context. so  i aliased to point to this very constructor.
		Self.devless_token = constants.token;
		Self.devless_instance_url = constants.domain;
	}

	Devless.init.prototype = Devless.prototype;
    


    //add options to params object
       function queryData(serviceName, table, params, callback){
       	console.log(this);
		params = params || {};
		var	parameters = "";

		//get nested params 
		var innerParams = function (key, params) {
			for(var eachParam in params) {
				parameters = "&"+key+"="+params[eachParam]+parameters;
			}

		}
			//organise parameters
			for (var key in params) {
				if (!params.hasOwnProperty(key)) { /**/ }
					if (params[key] instanceof Array ) {
						innerParams(key, params[key]) 
					} else {
						parameters = "&"+key+"="+params[key]+parameters;
					}
				
			}

		var sub_url = "/api/v1/service/"+serviceName+"/db?table="+table+parameters;

		requestProcessor.call(this,"", sub_url,  "GET", function(response){
			callback(response);
		})		
		return this;	
	}

	   function addData(serviceName, table, data, callback){

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
		requestProcessor.call(this,payload, sub_url,  "POST", function(response){

			callback(response);

		});
		return this;

	}

	 function updateData (serviceName, table, where_key, where_value, data, callback){

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
		requestProcessor.call(this,payload, sub_url, "PATCH", function(response){
			callback(response);
		});
		return this;
	}

	function deleteData(serviceName, table, where_key, where_value, callback){

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

		payloadObj.resource[0].params[0]['delete'] = "true";

		payloadStr = JSON.stringify(payloadObj);

		sub_url = "/api/v1/service/"+serviceName+"/db";

		requestProcessor.call(this,payloadStr, sub_url,  "DELETE", function(response){

			callback(response);

		});
		return this; 
	}

	function getToken(callback) {
		var withCallback = callback || false;
        if(withCallback){
		callback(sessionStorage.getItem('devless_user_token'+this.devless_instance_url+Devless.devless_token));     	
        }else {
        	
        	return sessionStorage.getItem('devless_user_token'+this.devless_instance_url+Devless.devless_token)
        }
		
	}

	function setToken(token) {
		sessionStorage.setItem('devless_user_token'+this.devless_instance_url+this.devless_token, token);
		return true;
	}

	function call(service, method, params, callback) {

		var payload = JSON.stringify({
		  "jsonrpc": "2.0",
		  "method": service,
		  "id":getId(1, 10000000),
		  "params": params
		});

		sub_url = "/api/v1/service/"+service+"/rpc?action="+method;

		requestProcessor.call(this,payload, sub_url,  "POST", function(response){

			callback(response);

		});
	}

	function getId (min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
 	}
	



     //Took of the requestPrecessor off the *this* to make it private for internal of operations only.
     //it is inaccessible outside but can be called within because its lexical scope with respect to the
     //other function. 
	 function requestProcessor (data, sub_url, method, callback, parse) {
		parse = parse || false;

		var xhr = new XMLHttpRequest();

		xhr.addEventListener("readystatechange", function() {


              var response ='';
			if (this.readyState === 4 && parse == false) {
				if (this.status == 200) {
					 response = JSON.parse(this.responseText);
					callback(response);
				} else {
					callback(response);
					console.error("Devless cannot be found at " + this.devless_instance_url + " Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`")
				}


			} else if (this.readyState === 4 && parse == true) {

				if (this.status == 200) {
					 response = this.responseText;
					callback(response);
				} else {
					callback(response);
					console.error("Devless cannot be found at " + this.devless_instance_url + " Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`")
				}
			}
		});

		xhr.open(method.toUpperCase(), this.devless_instance_url + sub_url);
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("devless-token", this.devless_token);
		if (sessionStorage.getItem('devless_user_token' + this.devless_instance_url + this.devless_token != "")) {

			xhr.setRequestHeader("devless-user-token", sessionStorage.getItem('devless_user_token' + this.devless_instance_url + this.devless_token));
		}



		xhr.send(data);

	}
	global.Devless = global.DV = Devless;
})(window);