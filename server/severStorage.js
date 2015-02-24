/* server message storage file */

exports.storage = {};
exports.storage.results = [];
// sorting methods here
exports.storage.results.push({
  username: 'mracus',
  text: 'Welcome to chatterbox!',
  room: 'lobby',
  objectId: + new Date()
});

exports.push = function(item) {
  item.objectId = + new Date();
  exports.storage.results.push(item);
  //console.log("storage: ", item);
  //console.log("array: ", exports.storage);
};

exports.get = function(order) {
  //console.log("FREDNESS: " +order);
  if (order === "/?order=-createdAt"){
    var ret = {};
    ret.results = [];
    for (var i = exports.storage.results.length - 1; i > -1; i--){
      ret.results.push(exports.storage.results[i]);
    }
    //console.log('original: ', exports.storage.results);
    //console.log('flipped: ', ret.results);
    return JSON.stringify(ret);
    //return JSON.stringify(exports.storage);
  } else {
  // default ordering: oldest on top
    return JSON.stringify(exports.storage);
  }
};


