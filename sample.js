var fs = require('fs'),
  Package = require('./src/package.js');
var sample = new Package({
    read:function(child, param, cb){
      if(param.attr.src){
        var result = fs.readFileSync(param.attr.src, 'UTF8');
        cb(null, result);
      } else {
        cb();
      }
    }
}, "./extension.xml");
module.exports = sample;
