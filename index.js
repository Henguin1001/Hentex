var Interpreter = require('./interpreter.js'),
  Context = require('./context.js'),
  primitiveCtx = require('./primitives.js');

// var string = '<json>{"name":"Henry"}</json>';
var string = '<json><concat><string>{"Hello":</string><string>"World"}</string></concat></json>';
// var string = '<string>{"name":"Henry"}</string>';
var interpreter = new Interpreter(string, primitiveCtx);
interpreter.evaluate().then(function (value) {
  console.log(value);
}, function (err) {
  console.error(err.stack);
});
