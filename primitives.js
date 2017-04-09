var Context = require('./context.js');
var primitiveCtx = new Context();

primitiveCtx.addMethod('string', function(children, parameters, cb){
  cb(null, parameters.element.text());
});
primitiveCtx.addMethod('json', function(children, parameters, cb){
  var string = "";
  if(children.length == 0){
    string = parameters.element.text();
  } else {
    string = children.map((c)=>c.toString()).join('');
  }
  cb(null, JSON.parse(string));
});
primitiveCtx.addMethod('concat', function(children, parameters, cb){
  if(Array.isArray(children)){
    cb(null, children.map((c)=>c.toString()).join(''));
  }
});
module.exports = primitiveCtx;
