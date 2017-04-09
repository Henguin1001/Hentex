var cheerio = require('cheerio');
// var $ = cheerio.load("<div><item id='i1'><single id='test1'/></item><div><item id='i2'><single id='test2'/></item></div></div>");
// var $ = cheerio.load("<div id='test'>Hello<div id='me'>Another</div></div>");
var Promise = require('promise'),
  twig = require('twig').twig;

class Context{
  constructor() {
    this.methods = {};
  }
  add(method_name, template){
    if(arguments.length == 1){
      this.addMethod(method_name.name, method_name);
    } else if(arguments.length == 2) {
      this.addTemplate(name, template);
    }
  }
  addMethod(name, method){
    if(!this.methods[name]){
      this.methods[name] = {};
    }
    this.methods[name].method = method;
  }
  addTemplate(name, template){
    if(!this.methods[name]){
      this.methods[name] = {};
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
class Node {
  constructor(element, ctx){
    this.element = element;
    this.name = element.prop("tagName").toLowerCase();
    this.attr = element.get(0).attribs;
    this.isLeaf = element.children().length == 0;
    this.scope = this;
    this.ctx = ctx;
    var initializeChild = this.initializeChild;
    this.children = element.children().map(function(){
      return initializeChild(this);
    }).toArray();
  }
  initializeChild(element){
    return new Node($(element), this.ctx);
  }
  evaluate(){
    var build = this.build, children = this.children, scope = this.scope;
    return new Promise(function (fulfill, reject){
      var childpromise = children.map((child)=>{
        return child.evaluate();
      });
      Promise.all(childpromise).then(function(resolved) {
        build.call(scope, resolved, function(err, res){
          if(err){
            reject(err);
          } else {
            fulfill(res);
          }
        });
      }, function(err){
        reject(err);
      });
    });
  }
  build(children, cb){
    var type = this.ctx.get(this.name);
    var parameters = {
      children:children,
      attr:this.attr,
      element:this.element,
      id:this.attr.id
    };
    type.method(this.element, parameters, function(err, res){
      if(err) cb(err)
      else {
        parameters.res = res;
        cb(null, type.template.render(parameters))
      }
    });
  }
}
//
class Interpreter {
  constructor(string, context) {
    this.ctx = context|| (new Context());
    this.$ = cheerio.load(string);
    this.tree = new Node($(':root'), this.ctx);
  }
  evaluate(){
    return this.tree.evaluate();
  }

}
//
// // var template = twig({data:"me:{{id}},children:{{dump(children)}}"});
// // tree.addTemplate("div",template);
// // var test = new Node($(':root'));
// // test.evaluate().then(function (value) {
// //   console.log(value);
// // }, function (err) {
// //   console.error(err.stack);
// // });
// var string = "<div id='test'>Hello<div id='me'>Another</div></div>";
// var template = twig({data:"me:{{id}},children:{{dump(children)}}"});
//
// var interpreter = new Interpreter(string);
// tree.addTemplate("div",template);
// var test = new Node($(':root'));
// test.evaluate().then(function (value) {
//   console.log(value);
// }, function (err) {
//   console.error(err.stack);
// });
