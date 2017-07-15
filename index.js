var cheerio = require('cheerio'),
  Node = require('./tree.js'),
  twig = require('twig').twig,
  Promise = require('bluebird');

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
      var $ = cheerio.load(this.capsule(template));
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
    this.context[name] = obj;
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
}
module.exports = Compiler;
