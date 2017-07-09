var cheerio = require('cheerio'),
  Node = require('./tree.js');

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
  render(template, globals){
    var tree = this.compile(template);
    if(tree){
      return tree.evaluate(globals);
    }
  }
  extend(name, obj){
    this.context[name] = obj;
  }
}
module.exports = Compiler;
