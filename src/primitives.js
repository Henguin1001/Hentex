var Context = require('./context.js'),
  twig = require('twig').twig,
  extend = require('util')._extend;
var primitiveCtx = new Context();

primitiveCtx.addMethod('string', function(children, parameters, cb){
  cb(null, parameters.element.html());
});
primitiveCtx.addMethod('method', function(children, parameters, cb){
  var name = parameters.attr.name,
   body = parameters.element.text();
  if(name){
    if(primitiveCtx.methods[name]){
      primitiveCtx.attachTemplate(name, twig({data:body}));
    } else {
      primitiveCtx.addMethod(name, (children, parameters, cb)=>{
        cb(null, parameters);
      }, twig({data:body}));
    }
    cb(null, "");
  }
});
module.exports = primitiveCtx;
