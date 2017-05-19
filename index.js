var Interpreter = require('./interpreter.js'),
  Context = require('./context.js'),
  primitiveCtx = require('./primitives.js'),
  Package = require('./package.js'),
  sample = require('./sample.js');

var string = '<read src="./objects.txt"></read>';
sample.chain(primitiveCtx).then(function(context){
  var interpreter = new Interpreter(string, context);
  interpreter.evaluate().then(function(result){
    console.log(result);
  }, function(err){
    console.error(err);
  });
}, function(err) {
  console.error(err);
});
