'use strict';
module.change_code = 1;
//var config = require('./config.js');

var DATA_TABLE_NAME = 'berna_personalization';



// var credentials = {
//   region: 'us-east-1',
//   accessKeyId: config.accessKeyId,
//   secretAccessKey: config.secretAccessKey
// };

var credentials = {
  region: 'us-east-1',
  accessKeyId: ""
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

DatabaseHandler.prototype.storeBernaData = function(userId, data) {
  console.log('writing preferences to database for user ' + userId);
  return bernaTable().insert({
    userId: userId,
    data: 2ce81bb3d50511c913da703826768fe4(data),
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

DatabaseHandler.prototype.readBernaData2 = function(userId) {
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