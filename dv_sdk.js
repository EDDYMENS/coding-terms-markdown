
/**
@author Devless
@version 0.01
@description Devless sdk for Javascript	
*/
/* Initizialize library */

var Devless =  function (constants){

		Devless.devless_token = constants.token;
		Devless.devless_instance_url = constants.domain;
	

			//check if connection was successfull
			data = {};
			console.info("App is trying to connect to Devless ...");
			sub_url = "/api/v1/service/auth/script";
			Devless.prototype.requestProcessor(data, sub_url,  "POST", function(response){
				response = JSON.parse(response);
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


		Devless.prototype.signUp = 	function (data, callback){

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
			Devless.prototype.requestProcessor(data, sub_url,  "POST", function(response){

				
				if(response.status_code == 1000 ){

					
					sessionStorage.setItem('devless_user_token'+window.devless_domain_name+window.devless_token, response.payload[0]);

				}
				
				callback(response);
			});

			

		}
		Devless.prototype.logIn = function (identifier_type, identifier, password, callback){

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
			Devless.prototype.requestProcessor(data, sub_url,  "POST", function(response){

				if(response.status_code == 1000 ){

					
					sessionStorage.setItem('devless_user_token'+Devless.devless_domain_name+Devless.devless_token, response.payload[0]);
				}
				
				callback(response);
			});
			return this;  
		}

		Devless.prototype.logOut =  function (callback){

			user_data = {
				"resource": [
				{
					"auth_type": "logout" 
				}
				]
			}

			var data = JSON.stringify(user_data);
			sub_url = "/api/v1/service/auth/script";
			Devless.prototype.requestProcessor(data, sub_url,  "POST", function(response){

				callback(response);
				sessionStorage.removeItem('devless_user_token'+Devless.devless_domain_name+Devless.devless_token);
				
			});
			return this;
		}

		Devless.prototype.getProfile = function (callback){
			user_data = {
				"resource": [
				{
					"auth_type": "profile" 
				}
				]
			}

			var data = JSON.stringify(user_data);
			sub_url = "/api/v1/service/auth/script";
			Devless.prototype.requestProcessor(data, sub_url,  "POST", function(response){

				
				
				callback(response);
			});
			return this;
		}

		Devless.prototype.updateProfile = function (data, callback){

			var data = JSON.stringify({
				"resource": [
				data
				]
			});

			sub_url = "/api/v1/service/auth/script";
			Devless.prototype.requestProcessor(data, sub_url,  "PATCH", function(response){

				
				if(response.status_code == 1000 ){

					
					sessionStorage.setItem('devless_user_token'+Devless.devless_domain_name+Devless.devless_token, response.payload[0]);

				}
				
				callback(response);
			})	
			return this; 	
		}

	//add options to params object
	Devless.prototype.queryData = function(serviceName, table, callback, params){
		params = params || {};
		var	parameters = "";
			//organise parameters
			for (var key in params) {
			if (!params.hasOwnProperty(key)) { /**/ }
				parameters = "&"+key+"="+params[key]+parameters;
		}
		sub_url = "/api/v1/service/"+serviceName+"/db?table="+table+parameters;
		Devless.prototype.requestProcessor("", sub_url,  "GET", function(response){
			callback(response);
		})		
		return this;	
	}

	Devless.prototype.addData = function(serviceName, table, callback, data){

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
		Devless.prototype.requestProcessor(payload, sub_url,  "POST", function(response){

			callback(response);

		});
		return this;

	}

	Devless.prototype.updateData = function(serviceName, table, where_key, where_value, callback,  data){

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
		Devless.prototype.requestProcessor(payload, sub_url, "PATCH", function(response){


			callback(response);
		});
		return this;
	}

	
	Devless.prototype.delete = function(serviceName, table, where_key, where_value, callback){

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

		Devless.prototype.requestProcessor(payloadStr, sub_url,  "DELETE", function(response){

			callback(response);

		});
		return this; 
	}
	

	Devless.prototype.token = function(callback) {

		callback(sessionStorage.getItem('devless_user_token'+Devless.devless_instance_url+Devless.devless_token));
		return this;
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
					console.error("Devless cannot be found at "+Devless.devless_instance_url+" Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`")
				}


			}
			else if (this.readyState === 4 && parse == true ){

				if(this.status == 200) {
					response = this.responseText;
					callback(response);
				} else {
					callback(response);
					console.error("Devless cannot be found at "+Devless.devless_instance_url+" Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`")
				}
			}
		});
		console.log(Devless.devless_instance_url+sub_url);
		xhr.open(method.toUpperCase(), Devless.devless_instance_url+sub_url);
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("devless-token", Devless.devless_token);
		

		if(sessionStorage.getItem('devless_user_token') != ""){

			xhr.setRequestHeader("devless-user-token", sessionStorage.getItem('devless_user_token'+Devless.devless_instance_url+Devless.devless_token) );
		}
		
		


		xhr.send(data);
		
	}

	




