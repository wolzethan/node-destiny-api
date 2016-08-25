/*

Destiny API Module

Base URL: https://www.bungie.net/Platform/Destiny

TODO:
  Implement Xbox and Playstation tracking
    - Xbox is 1
    - Playstation is 0 in the MembershipType

TODO:
  Implement
    - SearchDestinyPlayer/{displayName}

*/

const base = "https://www.bungie.net/Platform/Destiny";
var DestinyRequest = require('./libs/request');
var MembershipId = DestinyRequest._request;

var DestinyAPI = function(key) {
  this.key = key;
  this.get = new DestinyRequest(key).get;
}

/**
  * @param: {string} - name - Player name
  * - This function will check both Xbox and Playstation and return both.
**/

module.exports = DestinyAPI;
