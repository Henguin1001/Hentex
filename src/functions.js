module.exports = function(mark){
  mark.functions = {}
  mark.functions.markto = {
    method:function($,cb){
      cb(null, $(this).text());
    }
  };
  mark.functions.template = {
    method:function($, e, p, cb){
      if(p.attributes.name){
        mark.utils.update_context(mark.functions, p.attributes.name, {
          template:$(e).text()
        });
        cb();
      } else cb("No method name provided");
    },
    template:mark.utils.empty_template
  };
}
