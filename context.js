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
    this.methods[name].method = method;
  }
  addMethods(arr){
    arr.foreach((method)=>{
      addMethod(method.name, method.method, method.template);
    });
  }
  get(name){
    return this.methods[name];
  }
}
module.exports = Context;
