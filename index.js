var cheerio = require('cheerio'),
  Node = require('./tree.js'),
  twig = require('twig').twig,
  Promise = require('promise');

class Compiler {
  constructor() {
    this.context = {};
  }
  compile(template){
    if(template.length > 0){
      var $ = cheerio.load(template);
      return new Node($(':root'), this.context, $);
    }
  }
  render(template, globals = {}){
    var tree = this.compile(template);
      return new Promise(function(fulfill, reject){
        if(tree){
          tree.evaluate(globals).then((res)=>{
            fulfill(tree.element.text());
          }, (err)=>{
            reject(err);
          });
        } else {
          fulfill("");
        }
      });
  }
  extend(name, obj){
    this.context[name] = obj;
    if(obj.template &&  typeof obj.template === 'string'){
      this.context[name].template = twig({data:obj.template});
    }
  }
  update(name, obj){
    this.context[name] = Object.assign({}, this.context[name], obj);
    if(obj.template &&  typeof obj.template === 'string'){
      this.context[name].template = twig({data:obj.template});
    }
  }
}
module.exports = Compiler;
