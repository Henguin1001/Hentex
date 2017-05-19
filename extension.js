var fs = require('fs'),
  Interpreter = require('./interpreter.js'),
  Promise = require('promise'),
  context = require('./primitives.js');
class Extension {
  constructor(filename, methods) {
    var ctx = context();
    this.ctx = ctx;
    if(methods){
      Object.keys(methods).forEach(function(name) {
        ctx.addMethod(name, methods[name]);
      });
    }
    var string = fs.readFileSync(filename, 'UTF8');
    this.interpreter = new Interpreter(string, ctx);
  }
  include(){
    var interpreter = this.interpreter;
    return new Promise(function (fulfill, reject){
      interpreter.evaluate().then(function(){
        fulfill();
      }, function(err){
        reject(err);
      });
    });
  }
}
module.exports = Extension;
