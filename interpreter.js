var cheerio = require('cheerio'),
  Context = require('./context.js'),
  primitiveCtx = require('./primitives.js'),
  Node = require('./node.js');
class Interpreter {
  constructor(string, context) {
    this.ctx = context || primitiveCtx();
    this.$ = cheerio.load(string);
    this.tree = new Node(this.$(':root'), this.ctx, this.$);
  }
  evaluate(globals){
    return this.tree.evaluate(globals);
  }
}
module.exports = Interpreter;
