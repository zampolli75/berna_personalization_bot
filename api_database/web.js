
var ApiBuilder = require('claudia-api-builder'),
api = new ApiBuilder()
  

module.exports = api;

api.get('/greet', function (request) {
    return request.queryString.name + ' is ' + superb();
});

