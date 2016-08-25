var request = require('request');
var base = "https://www.bungie.net/Platform/Destiny";

var DestinyRequest = function(key) {
  this.key = key;
}

DestinyRequest.prototype.get = function(path, callback) {
  var apiKey = this.key;

  return _request(path, apiKey, callback);
}

var _request = function(path, key, callback) {
  var options = {
    headers : {
      'X-API-Key' : key
    },
    method : 'GET',
    url : base + path
  }

  request(options, function(err, response, body) {
    if(err) {
      callback(err);
      return;
    }

    callback(null, body, response);
  });
}

module.exports = DestinyRequest;
