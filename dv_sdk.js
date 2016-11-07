/**
@author Devless
@version 0.01
@description Devless sdk for Javascript	
*/
/* Initizialize library */

'use strict'

/**
 * Devless Prototype function
 */

var Devless = function (constants) {
	/** @global */
	window.devless_token = constants.token;
	window.devless_instance_url = constants.domain;


	//check if connection was successfull
	var data = {};
	console.info('App is trying to connect to Devless ...');
	var sub_url = '/api/v1/service/dvauth/script';
	var options = {
		sub_url: sub_url,
		method: 'POST',
		parse: true
	};
	this.requestProcessor(data, options, function (error, response) {
		if (error) {
			console.error(error);
		} else {
			response = JSON.parse(response);
			console.log(response);
			if (response.status_code === 631) {
				console.error('Your app failed to  connect to Devless ): Please make sure token and key is set properly ');
			} else if (response.status_code === 1000) {
				console.debug('Your app connected to Devless successfully and you have auth service installed');
			} else {
				console.debug('your app connected to Devless successfully. you can get services from store.devless.io ')
			}
		}
	});

	return this;
}

//add options to params object
Devless.prototype.queryData = function (serviceName, table, params, callback) {
	params = params || {};
	var parameters = '';

	//get nested params 
	innerParams = function (key, params) {
			for (var eachParam in params) {
				parameters = '&' + key + '=' + params[eachParam] + parameters;
			}

		}
		//organise parameters
	for (var key in params) {
		if (!params.hasOwnProperty(key)) { /**/ }
		if (params[key] instanceof Array) {
			innerParams(key, params[key])
		} else {
			parameters = '&' + key + '=' + params[key] + parameters;
		}

	}

	var sub_url = '/api/v1/service/' + serviceName + '/db?table=' + table + parameters;
	var options = {
		sub_url: sub_url,
		method: 'GET'
	};

	this.requestProcessor('', options, function (error, response) {
		callback(error, response);
	})
	return this;
}

Devless.prototype.addData = function (serviceName, table, data, callback) {

	var payload = JSON.stringify({
		'resource': [{
				'name': table,
				'field': [

					data
				]
			}

		]
	});

	var sub_url = '/api/v1/service/' + serviceName + '/db';
	var options = {
		sub_url: sub_url,
		method: 'POST'
	};
	this.requestProcessor(payload, options, function (error, response) {

		callback(error, response);

	});
	return this;

}

Devless.prototype.updateData = function (serviceName, table, where_key, where_value, data, callback) {

	var payload = JSON.stringify({
		'resource': [{
				'name': table,
				'params': [{
					'where': where_key + ',' + where_value,
					'data': [
						data
					]

				}]
			}

		]
	});

	var sub_url = '/api/v1/service/' + serviceName + '/db';
	var options = {
		sub_url: sub_url,
		method: 'PATCH'
	};
	this.requestProcessor(payload, options, function (error, response) {
		callback(error, response);
	});
	return this;
}


Devless.prototype.deleteData = function (serviceName, table, where_key, where_value, callback) {

	var payloadObj = {
		'resource': [{
				'name': table,
				'params': [{
					'where': where_key + ',=,' + where_value
				}]
			}

		]
	};

	payloadObj.resource[0].params[0]['delete'] = 'true';

	var payloadStr = JSON.stringify(payloadObj);

	var sub_url = '/api/v1/service/' + serviceName + '/db';
	var options = {
		sub_url: sub_url,
		method: 'DELETE'
	};

	this.requestProcessor(payloadStr, options, function (error, response) {

		callback(error, response);

	});
	return this;
}


Devless.prototype.getToken = function (callback) {
	var devlessUserToken = sessionStorage.getItem('devless_user_token' + window.devless_instance_url + Devless.devless_token);
	var error = devlessUserToken ? null : new Error('Could not load Devless User Token');
	callback(error, devlessUserToken);

}

Devless.prototype.setToken = function (token) {
	sessionStorage.setItem('devless_user_token' + window.devless_instance_url + Devless.devless_token, token);
	return true;
}

Devless.prototype.call = function (service, method, params, callback) {

	var payload = JSON.stringify({
		'jsonrpc': '2.0',
		'method': service,
		'id': Devless.getId(1, 10000000),
		'params': params
	});

	var sub_url = '/api/v1/service/' + service + '/rpc?action=' + method;
	var options = {
		sub_url: sub_url,
		method: 'POST'
	};
	this.requestProcessor(payload, options, function (error, response) {

		callback(error, response);

	});
}

Devless.prototype.getId = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Make a request to the Devless Instance.
 * @param {Object} data - Data to be sent with request body.
 * @param {Object} options - Configuration Options.
 * @param {string} options.sub_url - Sub url for the endpoint.
 * @param {boolean} options.parse - Parse JSON or not.
 * @param {string} options.method - HTTP Method.
 */
Devless.prototype.requestProcessor = function (data, options, callback) {
	var xhr = new XMLHttpRequest();

	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === 4 && !options.parse) {
			if (this.status === 200) {
				var response = JSON.parse(this.responseText);
				callback(null, response);
			} else {
				var errorMessage = 'Devless cannot be found at ' + window.devless_instance_url + ' Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`';
				callback(new Error(errorMessage), null);
				console.error(errorMessage)
			}
		} else if (this.readyState === 4 && options.parse) {
			if (this.status == 200) {
				response = this.responseText;
				callback(null, response);
			} else {
				var errorMessage = 'Devless cannot be found at ' + window.devless_instance_url + ' Please copy the url from the `App tab`  on you Devless instance by clicking on  `connect to my app`';
				callback(new Error(errorMessage), null);
				console.error(errorMessage)
			}
		}
	});

	xhr.open(options.method.toUpperCase(), window.devless_instance_url + options.sub_url);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.setRequestHeader('devless-token', devless_token);
	if (sessionStorage.getItem('devless_user_token' + window.devless_instance_url + window.devless_token)) {
		xhr.setRequestHeader('devless-user-token', sessionStorage.getItem('devless_user_token' + window.devless_instance_url + window.devless_token));
	}

	xhr.send(data);
}