var fs = require('fs');
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
  mark.functions.set = {
    method:function($, e, p, cb){
      if(p.attributes.key){
        var value = "";
        if(p.attributes.value){
          value = p.attributes.value;
        } else {
          value = $(this).text();
        }
        $(this).parent().data('scope', Object.assign({}, data('scope'), value));
        cb();
      } else cb("No method name provided");
    },
    template:mark.utils.empty_template
  };
  mark.functions.include = {
    method:function($, e, p, cb){
      if(p.attributes.src){
        var c = new mark.compiler();
        c.renderFile(p.attributes.src).then((res)=>{
          cb(null, res.toString());
        },(err)=> cb(err));
      } else cb('No source provided');
    }
  };
  mark.functions.json = {
    method:function($, e, p, cb){
      if(p.attributes.stringify !== undefined ||p.attributes.encode !== undefined){
        try {
            var data = mark.utils.object_from_tree($, e);
            cb(null, JSON.stringify(data));
        } catch (e) {
          cb(e);
        }
      } else if(p.attributes.parse !== undefined || p.attributes.decode !== undefined || $(this).text().length > 0){
        try {
          var result = JSON.parse($(this).text());
          cb(null,result);
        } catch (e) {
          cb(e);
        }
      } else cb('No source provided');
    }
  };

  mark.functions.csv = {
    method:function($, e, p, cb){
      if(p.attributes.src){
        mark.lib.csv.parse_file(p.attributes.src, cb);
      } else if($(this).text().length > 0) {
        mark.lib.csv.parse_string($(this).text(), function(err, res){
          console.log(res);
          cb(err, res);
        });
      } else cb('No body provided');
    },
    template: {render: function(p, cb){
      mark.lib.csv.stringify(p.data, cb);
    }, async:true}
  };
}
