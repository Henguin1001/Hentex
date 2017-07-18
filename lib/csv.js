var fs = require('fs'),
  csv = require('csv');
module.exports = function(lib){
  lib.csv = {};
  lib.csv.parse_file = function(filename, cb) {
    csv.parse(fs.readFileSync(filename, 'UTF8'), cb);
  };
  lib.csv.parse_string = function(string, cb) {
    csv.parse(string, cb);
  };
  lib.csv.stringify = function(csv_data, cb) {
    csv.stringify(csv_data, cb);
  };
};
