class Context{
  constructor() {
    this.methods = {};
  }
  addMethod(name, method){
    if(!this.methods[name]){
      this.methods[name] = {};
    }
    if(!this.methods[name].template){
      this.methods[name].template = {
        render:(p)=>{
          return p.res;
        }
      };
    }
    this.methods[name].method = method;
  }
  addTemplate(name, template){
    if(!this.methods[name]){
      this.methods[name] = {};
    }
    if(!this.methods[name].method){
      this.methods[name].method = (e,a,c)=>{
        c(null);
      };
    }
    this.methods[name].template = template;
  }
  get(name){
    return this.methods[name];
  }
}
module.exports = Context;
