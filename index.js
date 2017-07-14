var cheerio = require('cheerio'),
  Node = require('./tree.js'),
  twig = require('twig').twig;

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
    if(tree){
      return tree.evaluate(globals);
    }
  }
  extend(name, obj){
    this.context[name] = obj;
    if(obj.template &&  typeof obj.template === 'string'){
      this.context[name].template = twig({data:obj.template});
    }
  }
}
module.exports = Compiler;
