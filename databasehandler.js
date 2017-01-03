'use strict';
module.change_code = 1;
const _ = require('lodash')

//var config = require('./config.js');



// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();
// var table = 'berna_personalization';





// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Added item:", JSON.stringify(data, null, 2));
//     }
// });



var DATA_TABLE_NAME = 'berna_personalization';


var credentials = {
  region: 'us-east-1',
  accessKeyId: "",
  secretAccessKey: ""
};

var localDynasty = require('dynasty')(credentials);
var dynasty = localDynasty;


function DatabaseHandler() {}

var bernaTable = function() {
  return dynasty.table(DATA_TABLE_NAME);
};

DatabaseHandler.prototype.createBernaTable = function() {
  return dynasty.describe(DATA_TABLE_NAME)
    .catch(function(error) {
      console.log('createBernaTable::error: ', error);
      return dynasty.create(DATA_TABLE_NAME, {
        key_schema: {
          hash: ['userId', 'string']
        }
	  });
	});
};

DatabaseHandler.prototype.storeBernaData = function(userId, itemsData) {
  console.log('writing preferences to database for user ' + userId);
  return bernaTable().insert({
    userId: userId,
    data: JSON.stringify(itemsData),
  }).catch(function(error) {
    console.log(error);
  });
};


DatabaseHandler.prototype.readBernaData = function(userId) {
  console.log('reading berna personalization with user id of : ' + userId);
  return bernaTable().find(userId)
    .then(function(result) {
      var data = (result === undefined ? {} : JSON.parse(result['data']));
      return data;
    }).catch(function(error) {
    console.log(error);
  });
};



DatabaseHandler.prototype.readBernaDataNoParse = function(userId) {
  console.log('reading berna personalization with user id of : ' + userId);
  return bernaTable().find(userId)
    .then(function(result) {
      var data = (result === undefined ? {} : result['data']);
      return data;
    }).catch(function(error) {
    console.log(error);
  });
};



module.exports = DatabaseHandler;