//var constants = { "token":"284b0f10d7720d212acd6097fb00b19b", "domain":"http://solitary-night-6250.herokuapp.com." }; 
//Devless = new Devless(constants);

(function  () {
var db = DV({
	"token": "284b0f10d7720d212acd6097fb00b19b",
	"domain": "http://solitary-night-6250.herokuapp.com."
});

db.queryData('dummyUsers', 'usersinfo', {}, function(response) {
	if (response.status_code === 625) {
		console.log('queryData :passed ');
		console.log(response);
	} else {
		console.log('queryData :failed ');
		console.log(response);
	}
});


db.addData('dummyUsers', 'usersinfo', {
	'username': 'testuser' + Math.floor(Math.random() * 10),
	'role': 'develper',
	'age': 30
}, function(response) {
	if (response.status_code === 609) {
		console.log('addData :passed ');
		console.log(response);
	} else {
		console.log('addData :failed ');
		console.log(response);
	}

});



db.updateData('dummyUsers', 'usersinfo', 'id', '5', {
	'username': 'namechanged' + Math.floor(Math.random() * 10)
}, function(response) {
	if (response.status_code === 619) {
		console.log('updateData :passed ');
		console.log(response);

	} else {
		console.log('updateData :failed ');
		console.log(response);

	}
});

db.deleteData('dummyUsers', 'usersinfo', 'id', '6', function(response) {
	if (response.status_code === 636) {
		console.log('deleteData :passed ');
		console.log(response);

	} else {
		console.log('deleteData :failed ');
		console.log(response);

	}
});



if (db.setToken('testToken')) {
	console.log('setToken :passed');
} else {
	console.log('setToken :failed');
}


if (db.getToken()) {

	console.log('getToken :passed', db.getToken());
} else {
	console.log('getToken :failed', db.getToken());
}
})();