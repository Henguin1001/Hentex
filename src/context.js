class Context{
  constructor() {
    this.methods = {};
  }
  addMethod(name, method, template){
    if(!this.methods[name]){
      this.methods[name] = {};
    }
    if(template){
      this.methods[name].template = template;
    }
    if(method){
      this.methods[name].method = method;
    }
  }
  addMethods(arr){
    arr.foreach((method)=>{
      addMethod(method.name, method.method, method.template);
    });
  }
  attachTemplate(name, template){
    if(!this.methods[name]){
      addMethod(name, null, template);
    } else {
      this.methods[name].template = template;
    }
  }
  attachTemplates(arr){
    arr.foreach((template)=>{
      attachTemplate(template.name, template.template);
    });
  }
  extend(extension, cb){
    console.log(extension);
    var scope = this;
    extension.include().then(function(){
      scope.methods = Object.assign({}, scope.methods, extension.ctx.methods);
      cb();
    }, function(err){
      cb(err)
    });
  }
  get(name){
    return this.methods[name];
  }
}
module.exports = Context;
