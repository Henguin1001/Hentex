var Promise = require('promise');
class Node {
  constructor(element, ctx, $){
    this.element = element;
    this.name = element.prop("tagName").toLowerCase();
    this.attr = element.get(0).attribs;
    this.isLeaf = element.children().length == 0;
    this.scope = this;
    this.ctx = ctx;
    var initializeChild = this.initializeChild;
    this.children = element.children().map(function(){
      return initializeChild(this, ctx, $);
    }).toArray();
  }
  initializeChild(element, ctx, $){
    return new Node($(element), ctx, $);
  }
  evaluate(){
    var build = this.build, children = this.children, scope = this.scope;
    return new Promise(function (fulfill, reject){
      var childpromise = children.map((child)=>{
        return child.evaluate();
      });
      Promise.all(childpromise).then(function(resolved) {
        try {
          build.call(scope, resolved, function(err, res){
            if(err){
              reject(err);
            } else {
              fulfill(res);
            }
          });
        } catch (e) {
          reject(e);
        }
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
      id:this.attr.id,
      self:this
    };
    type.method.call(null, children, parameters, function(err, res){
      if(err) cb(err)
      else {
        parameters.res = res;
        if(type.template){
          var output= type.template.render(parameters);
          parameters.element.text(output);
          cb(null, output);
        } else {
          parameters.element.text(res);
          cb(null, res);
        }
      }
    });
  }
}
module.exports = Node;
