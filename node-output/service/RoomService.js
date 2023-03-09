'use strict';


/**
 * Finds All Room
 * Multiple status values can be provided with comma separated strings
 *
 * returns List
 **/
exports.findAllRoom = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Status" : "Status",
  "Building" : "Building",
  "Description" : "Description",
  "User" : "User",
  "Price" : "Price",
  "Size" : "Size"
}, {
  "Status" : "Status",
  "Building" : "Building",
  "Description" : "Description",
  "User" : "User",
  "Price" : "Price",
  "Size" : "Size"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get rooms by user id
 *
 * returns inline_response_200_2
 **/
exports.getRoomsByUserIdGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "postings" : [ {
      "Status" : "Status",
      "Building" : "Building",
      "Description" : "Description",
      "User" : "User",
      "Price" : "Price",
      "Size" : "Size"
    }, {
      "Status" : "Status",
      "Building" : "Building",
      "Description" : "Description",
      "User" : "User",
      "Price" : "Price",
      "Size" : "Size"
    } ]
  },
  "messages" : "messages",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a file
 * Update a file by its ID
 *
 * no response value expected for this operation
 **/
exports.roomsPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

