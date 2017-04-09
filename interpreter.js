var cheerio = require('cheerio'),
  Context = require('./context.js'),
  Node = require('./node.js');
class Interpreter {
  constructor(string, context) {
    this.ctx = context || (new Context());
    this.$ = cheerio.load(string);
    this.tree = new Node(this.$(':root'), this.ctx, this.$);
  }
  evaluate(){
    return this.tree.evaluate();
  }
}
module.exports = Interpreter;
