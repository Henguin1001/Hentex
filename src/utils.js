module.exports = function(mark){
  mark.utils = {};
  mark.utils.call_optional_parameters = function(fn, scope, parameters, cb) {
    var supported = fn.length - 1;
    var supported_parameters = [...parameters.slice(0, supported), cb];
    fn.call(scope, ...supported_parameters);
  };
  mark.utils.initial_context = {
    markto:{
      method:function($,cb){
        cb(null, $(this).text());
      }
    }
  };
  mark.utils.encapsulate = (e)=>'<markto>'+e+'</markto>';
  mark.utils.empty_method = {method:(cb)=>{cb()}};
  mark.utils.empty_template = {render:()=>{
    return '';
  }};
  mark.utils.get_element_info = function(element, $){
    return {
      id: element.attr('id'),
      name: element.prop("tagName").toLowerCase(),
      attributes:element.get(0).attribs,
      leaf: element.children().length == 0,
      element:element,
      $:$,
      j:$
    };
  };
  mark.utils.update_object = function(older, newer){
    return Object.assign({}, older, newer);
  };
  mark.utils.update_context = function(context, name, obj){
    context[name] = Object.assign({method:(cb)=>{cb()}}, context[name], obj);
    if(obj.template &&  typeof obj.template === 'string'){
      context[name].template = mark.twig({data:obj.template});
    }
  };
};
