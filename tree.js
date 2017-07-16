var Promise = require('bluebird'),
  tools = require('./tools.js');
class Node {
  constructor(element, ctx, $){
    this.element = element;
    this.ctx = ctx;
    this.$ = $;
    this.scope = this;
    this.update();

    var initializeChild = this.initializeChild;
    // Only compile further if the element is not a string
    // or has the attribute block
    if(this.name != 'string' && !this.info.attributes.block){
      this.children = element.children().map(function(){
        return initializeChild(this, ctx, $);
      }).toArray();
    } else {
      this.children = [];
      this.info.leaf = true;
    }
  }
  initializeChild(element, ctx, $){
    return new Node($(element), ctx, $);
  }
  update(){
    var element = this.element;
    var $ = this.$;
    this.info = {
      id: element.attr('id'),
      name: element.prop("tagName").toLowerCase(),
      attributes:element.get(0).attribs,
      leaf: element.children().length == 0,
      element:element,
      $:$,
      j:$
    };
    this.name = this.info.name;
    this.method = this.ctx[this.name];
  }
  evaluate(globals){
    var build = this.build, children = this.children, scope = this.scope;
    return new Promise(function (fulfill, reject){
      // var childpromise = children.map((child)=>{
      //   return child.evaluate(globals);
      // });
      Promise.each(children, function(child, i){
        return child.evaluate(globals);
      }).then(function(resolved) {
        try {
          build.call(scope, resolved, globals, function(err, res){
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
  build(child_data, globals, cb){
    this.update();
    var method_type = this.method;
    var parameters = Object.assign({}, {globals:globals, child_data:child_data}, this.info);
    // Call the method and send response to Template
    // console.log("Call Method: " + method_type);
    tools.call_optional_parameters(method_type.method, this.element, [this.$, this.element, parameters], function(err, method_data){
      if(err) cb(err)
      else {
        parameters.data = method_data;
        parameters.element.data(method_data);
        if(method_type.template){
          var template_output = method_type.template.render(parameters);
          parameters.element.empty();
          parameters.element.text(template_output);
          cb(null, template_output);
        } else {
          if (typeof method_data === 'string'){
            parameters.element.text(method_data);
          } else {
            parameters.element.text(JSON.stringify(method_data));
          }
          cb(null, method_data);
        }
      }
    });
  }
}
module.exports = Node;
