/* server message storage file */
var fs = require('fs');

exports.storage = {};
exports.storage.results = [];

fs.readFile('./log.txt', function(err, data){
  exports.storage.results = JSON.parse(data);
});

exports.push = function(item) {
  item.objectId = + new Date();
  exports.storage.results.push(item);
  fs.writeFile('log.txt', JSON.stringify(exports.storage.results), function (err) {
    if (err) throw err;
  });
};

exports.get = function(order) {
  order = order.split('?')[1];
  if (order === "order=-createdAt"){
    var ret = {};
    ret.results = [];
    for (var i = exports.storage.results.length - 1; i > -1; i--){
      ret.results.push(exports.storage.results[i]);
    }
    return JSON.stringify(ret);
  } else {
  // default ordering: oldest on top
    return JSON.stringify(exports.storage);
  }
};

