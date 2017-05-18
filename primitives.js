var Context = require('./context.js'),
  twig = require('twig').twig;
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
primitiveCtx.addMethod('method', function(children, parameters, cb){
  if(parameters.attr.name){
    primitiveCtx.addMethod(parameters.attr.name, (children, parameters, cb)=>{
      cb(null, parameters);
    }, twig({data:parameters.element.text()}));
    cb(null, "");
  }
});
module.exports = primitiveCtx;
