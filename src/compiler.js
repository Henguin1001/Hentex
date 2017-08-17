var cheerio = require('cheerio-iterable'),
  Promise = require('bluebird'),
  fs = require('fs');

module.exports = function(mark){
  class Compiler {
    constructor(scope) {
      if(scope){
        this.context = Object.assign(mark.functions, scope);
      } else {
        this.context = mark.functions;
      }
    }
    compile(template){
      if(template.length == 0 || !(/\S/.test(template))){
        return {evaluate:()=>
          new Promise(function(resolve, reject) {
            resolve(template);
          })
        };
      } else {
        var $ = cheerio.load(mark.utils.encapsulate(template), {
          xmlMode:true,
          decodeEntities:true
        });
        return new mark.tree($(':root'), this.context, $);
      }
    }
    render(template, globals = {}){
      var tree = this.compile(template);
      return tree.evaluate(globals);
    }
    extend(name, obj){
      this.context[name] = Object.assign({method:(cb)=>{cb()}}, obj);
      if(obj.template &&  typeof obj.template === 'string'){
        this.context[name].template = mark.twig({data:obj.template});
      }
    }
    update(name, obj){
      this.context[name] = Object.assign({method:(cb)=>{cb()}}, this.context[name], obj);
      if(obj.template &&  typeof obj.template === 'string'){
        this.context[name].template = mark.twig({data:obj.template});
      }
    }
    renderFile(filename, globals = {}){
      var res = fs.readFileSync(filename, 'UTF8');
      return this.render(res,globals);
    }
  }
  mark.compiler = Compiler;
};
