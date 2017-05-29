var Interpreter = require('./src/interpreter.js'),
  primitive_ctx = require('./src/primitives.js'),
  Package = require('./src/package.js');

class Compiler {
  constructor(ctx) {
    if(ctx){
      this.ctx = ctx;
    } else {
      this.ctx = primitive_ctx;
    }
  }
  compile(string, globals){
    var interpreter = new Interpreter(string, this.ctx);
    return interpreter.evaluate(globals||{});
  }
  extend(pack){
    var temp = new Package(pack);
    temp.chain(this.ctx);
  }
}
module.exports = Compiler;

// var sample = require('./sample.js');
// var test = new Compiler();
// test.extend(sample);
// test.compile('<read src="./package.json"/>').then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.error(err);
// } );
