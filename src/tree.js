var Promise = require('bluebird');

module.exports = function(mark){
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
        this.children = element.children().map(function(e){
          return initializeChild(e, ctx, $);
        });
      } else {
        this.children = [];
        this.info.leaf = true;
      }
    }
    initializeChild(element, ctx, $){
      return new Node($(element), ctx, $);
    }
    update(){
      this.info = mark.utils.get_element_info(this.element, this.$);
      this.name = this.info.name;
      this.method = this.ctx[this.name];
    }
    evaluate(globals){
      var build = this.build, children = this.children, scope = this.scope;
      return new Promise(function (fulfill, reject){
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
      mark.utils.call_optional_parameters(method_type.method, this.element, [this.$, this.element, parameters], function(err, method_data){
        if(err) cb(err)
        else {
          parameters.data = method_data;
          parameters.element.data(method_data);
          if(method_type.template){
            if(method_type.template.async){
              var template_output = method_type.template.render(parameters, function(err, template_output){
                if(!err){
                  parameters.element.empty();
                  parameters.element.text(template_output);
                  cb(null, template_output);
                } else cb(err);
              });
            } else {
              var template_output = method_type.template.render(parameters);
              parameters.element.empty();
              parameters.element.text(template_output);
              cb(null, template_output);
            }
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
  mark.tree = Node;
};
