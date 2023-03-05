'use strict';

var utils = require('../utils/writer.js');
var Room = require('../service/RoomService');

module.exports.findAllRoom = function findAllRoom (req, res, next) {
  Room.findAllRoom()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.roomsUrlPOST = function roomsUrlPOST (req, res, next, url) {
  Room.roomsUrlPOST(url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
