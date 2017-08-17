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
  mark.utils.route_values_exist = function(values, functions, cb){
    functions[values.findIndex((e)=>!!e)](cb);
  };
  mark.utils.is_number = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  mark.utils.is_numeral_object = function(obj){
    return Object.keys(obj).every(mark.utils.is_number);
  }
  mark.utils.convert_numeral_object = function(obj) {
    return Object.keys(obj).map((key)=>obj[key]);
  };

  mark.utils.object_from_tree = function($, element){
    var arr = element.children();
    if(arr.every((e)=>e.attr('id'))){
      var obj = {};
      for (element of arr) {
        obj[element.attr('id')] = element.data();
      }
      return obj;
    } else {
      var data = arr.map((e)=>{
        var temp = e.data();
        if(mark.utils.is_numeral_object(temp)){
          return mark.utils.convert_numeral_object(temp);
        } else return temp;
      });
      if(data.length == 1){
        return data[0];
      } else return data;
    }

  };
  mark.utils.escape_method = function($, e, p, cb){
    return e.html();
  };


};
