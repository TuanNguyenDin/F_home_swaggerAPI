'use strict';


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Create a user (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Create a user (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * userID String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * userID String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUserwithinAuth = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds All User
 * Multiple status values can be provided with comma separated strings
 *
 * returns List
 **/
exports.findUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : {
    "_ID" : "adminID",
    "FullName" : "adminName",
    "password" : "password",
    "phoneNum" : "phoneNum",
    "email" : "email",
    "roleName" : "fptmember"
  },
  "messages" : "messages",
  "status" : "status"
}, {
  "data" : {
    "_ID" : "adminID",
    "FullName" : "adminName",
    "password" : "password",
    "phoneNum" : "phoneNum",
    "email" : "email",
    "roleName" : "fptmember"
  },
  "messages" : "messages",
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds All User
 * Multiple status values can be provided with comma separated strings
 *
 * returns List
 **/
exports.findUserWithAuth = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_ID" : "adminID",
  "FullName" : "adminName",
  "password" : "password",
  "phoneNum" : "phoneNum",
  "email" : "email",
  "roleName" : "fptmember"
}, {
  "_ID" : "adminID",
  "FullName" : "adminName",
  "password" : "password",
  "phoneNum" : "phoneNum",
  "email" : "email",
  "roleName" : "fptmember"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by user id
 *
 * userID String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserById = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "_ID" : "adminID",
  "FullName" : "adminName",
  "password" : "password",
  "phoneNum" : "phoneNum",
  "email" : "email",
  "roleName" : "fptmember"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the data (optional)
 * userID String name that need to be update
 * no response value expected for this operation
 **/
exports.updateUser = function(body,userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the data (optional)
 * userID String name that need to be update
 * no response value expected for this operation
 **/
exports.updateUser = function(body,userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the data (optional)
 * userID String name that need to be update
 * no response value expected for this operation
 **/
exports.updateUserWithAuth = function(body,userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * body User Update an existent user in the data (optional)
 * userID String name that need to be update
 * no response value expected for this operation
 **/
exports.updateUserWithAuth = function(body,userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

