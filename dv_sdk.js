
/**
@author Devless
@version 0.1
@description Javascript sdk for Devless
*/
/* Initizialize library */

//constants
window.devless_token = "e5be7b06e6427becfea9f806d0d49b20";
window.devless_key = "localhost";
window.devless_user_token = ""; 


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


	requestProcessor: function(data, sub_url, method, callback ){
		

		var xhr = new XMLHttpRequest();


		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === 4) {
		  	response = JSON.parse(this.responseText);
		    callback(response);
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

	payload:  {signup: {"resource": [
			    {
			      "auth_type": "signup",
			      "first_name": "enter first_name" ,
			      "last_name": "enter last_name",
			      "email": "enter email" ,
			      "phone_number": "enter phone_number" ,
			      "username": "enter username" ,
			      "password": "enter user password" ,
			    }
			  ]
			},
			//You have the alternative to use either the phone_number ,email or password
			login: {
				"email": "enter email" ,
				"phone_number": "enter phone_number" ,
			    "username": "enter username" ,
			    "password": "enter user password" ,
			}
		}
}





// function delete_profile(){

// }


// function add_data(){

// }

// function query_table(){

// }


// function update_data(){

// }

// function delete_data(){

// }

// function run_script(){

// }

// function create_schema(){

// }


