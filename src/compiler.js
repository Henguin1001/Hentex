var cheerio = require('cheerio-iterable'),
  Node = require('./tree.js'),
  twig = require('../lib/twig.js').twig,
  Promise = require('bluebird'),
  fs = require('fs');

class Compiler {
  constructor() {
    this.context = {
      markto:{
        method:function($,cb){
          cb(null, $(this).text());
        }
      }
    };
    this.capsule = (e)=>'<markto>'+e+'</markto>';
  }
  compile(template){
    if(template.length > 0){
      var $ = cheerio.load(this.capsule(template), {xmlMode:true});
      return new Node($(':root'), this.context, $);
    }
  }
  render(template, globals = {}){
    var tree = this.compile(template);
    return tree.evaluate(globals);
      // return new Promise(function(fulfill, reject){
      //   if(tree){
      //   } else {
      //     fulfill("");
      //   }
      // });
  }
  extend(name, obj){
    this.context[name] = Object.assign({method:(cb)=>{cb()}}, obj);
    if(obj.template &&  typeof obj.template === 'string'){
      this.context[name].template = twig({data:obj.template});
    }
  }
  update(name, obj){
    this.context[name] = Object.assign({method:(cb)=>{cb()}}, this.context[name], obj);
    if(obj.template &&  typeof obj.template === 'string'){
      this.context[name].template = twig({data:obj.template});
    }
  }
  renderFile(filename){
    var res = fs.readFileSync(filename, 'UTF8');
    return this.render(res,{});
  }
}
module.exports = Compiler;
