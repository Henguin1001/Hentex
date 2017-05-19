var Interpreter = require('./interpreter.js'),
  fs = require('fs');

class Package {
  constructor(contents, filename) {
    this.contents = contents;
    this.template = fs.readFileSync(filename, 'UTF8');
  }
  chain(context){
    var contents = this.contents;
    Object.keys(this.contents).forEach(function(name) {
      context.addMethod(name, contents[name]);
    });
    var interpreter = new Interpreter(this.template, context);
    return new Promise(function (fulfill, reject){
      interpreter.evaluate().then(function(){
        fulfill(context);
      }, function(err){
        reject(err);
      });
    });
  }
}
module.exports = Package;
