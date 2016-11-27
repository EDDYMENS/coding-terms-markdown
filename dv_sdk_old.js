
	/**
@author Devless
@version 0.01
@description Devless sdk for Javascript	
*/
/* Initizialize library */

var Devless =  function (constants){

		window.devless_token = constants.token;
		window.devless_instance_url = constants.domain;
	

			//check if connection was successfull
			data = {};
			console.info("App is trying to connect to Devless ...");
			sub_url = "/api/v1/service/dvauth/script";
			this.requestProcessor(data, sub_url,  "POST", function(response){
				response = JSON.parse(response);
				console.log(response);
				if (response.status_code == 631){

					console.error("Your app failed to  connect to Devless ): Please make sure token and key is set properly ");
				} else if (response.status_code == 1000) {
					console.debug("Your app connected to Devless successfully and you have auth service installed");

				} else {
					console.debug("your app connected to Devless successfully. you can get services from store.devless.io ")
				}
			},true);

			return this;	

		}


		
	//add options to params object
	Devless.prototype.queryData = function(serviceName, table, params, callback){
		params = params || {};
		var	parameters = "";

		//get nested params 
		innerParams = function (key, params) {
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

		sub_url = "/api/v1/service/"+serviceName+"/db?table="+table+parameters;

		this.requestProcessor("", sub_url,  "GET", function(response){
			callback(response);
		})		
		return this;	
	}

	Devless.prototype.addData = function(serviceName, table, data, callback){

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
		this.requestProcessor(payload, sub_url,  "POST", function(response){

			callback(response);

		});
		return this;

	}

	Devless.prototype.updateData = function(serviceName, table, where_key, where_value, data, callback){

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
		this.requestProcessor(payload, sub_url, "PATCH", function(response){


			callback(response);
		});
		return this;
	}

	
	Devless.prototype.deleteData = function(serviceName, table, where_key, where_value, callback){

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

		this.requestProcessor(payloadStr, sub_url,  "DELETE", function(response){

			callback(response);

		});
		return this; 
	}
	

	Devless.prototype.getToken = function(callback) {

		callback(sessionStorage.getItem('devless_user_token'+window.devless_instance_url+Devless.devless_token));
		
	}

	Devless.prototype.setToken = function(token) {
		sessionStorage.setItem('devless_user_token'+window.devless_instance_url+Devless.devless_token, token);
		return true;
	}

	Devless.prototype.call = function(service, method, params, callback) {

		var payload = JSON.stringify({
		  "jsonrpc": "2.0",
		  "method": service,
		  "id": Devless.getId(1, 10000000),
		  "params": params
		});

		sub_url = "/api/v1/service/"+service+"/rpc?action="+method;

		this.requestProcessor(payload, sub_url,  "POST", function(response){

			callback(response);

		});
	}

	Devless.prototype.getId =  function (min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
 	}

	Devless.prototype.requestProcessor = function(data, sub_url, method, callback, parse){

		parse = parse || false ; 
		
		var xhr = new XMLHttpRequest();

		xhr.addEventListener("readystatechange", function () {




			if (this.readyState === 4 && parse == false) {
				if(this.status == 200) {
					response = JSON.parse(this.responseText);
					callback(response);
				} else {
					callback(response);
					console.error("Devless cannot be found at "+window.devless_instance_url+" Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`")
				}


			}
			else if (this.readyState === 4 && parse == true ){

				if(this.status == 200) {
					response = this.responseText;
					callback(response);
				} else {
					callback(response);
					console.error("Devless cannot be found at "+window.devless_instance_url+" Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`")
				}
			}
		});
		
		xhr.open(method.toUpperCase(), window.devless_instance_url+sub_url);
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("devless-token", devless_token);
		if(sessionStorage.getItem('devless_user_token'+window.devless_instance_url+window.devless_token != "")){

			xhr.setRequestHeader("devless-user-token", sessionStorage.getItem('devless_user_token'+window.devless_instance_url+window.devless_token) );
		}
		
		


		xhr.send(data);
		
	}
