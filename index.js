var Interpreter = require('./interpreter.js'),
  Context = require('./context.js'),
  primitiveCtx = require('./primitives.js');

// var string = '<json>{"name":"Henry"}</json>';
// var string = '<json><string>{"Hello":</string><string>"World"}</string></json>';
// var string = '<string>{"name":"Henry"}</string>';
var string = '<method name="test"><string>test</string>Hello</method>';
var string2 = '<test><test>';

var interpreter = new Interpreter(string, primitiveCtx);
interpreter.evaluate().then(function (value) {
  // console.log(primitiveCtx);
  var interpreter2 = new Interpreter(string2, primitiveCtx);
  interpreter2.evaluate().then(function (value) {
    console.log(value);
  }, function (err) {
    console.error(err.stack);
  });
}, function (err) {
  console.error(err.stack);
});
