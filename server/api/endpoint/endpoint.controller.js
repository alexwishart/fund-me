"use strict";

var fs = require('fs');

/* Respond to any get on page 1 with a sample1 JSON. HTTP code 200 */
exports.get = function(req, res) {
  fs.readFile('votes.txt', 'utf8', function(err, data) {
    res.send(data);
  });
};
