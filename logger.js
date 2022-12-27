var url = 'http://mylogger.io/log';
function log(msg) {
	//send HTTP request
	console.log(msg)
}

//module.exports.log = log;
module.exports = log
//module.exports.endPointUrl = url;