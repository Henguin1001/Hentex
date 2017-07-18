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
      if(p.attributes.stringify||p.attributes.encode){
        try {
            var data = JSON.stringify($(this).children().map((e)=>e.data()));
            cb(null,data);
        } catch (e) {
          cb(e);
        }
      } else if(p.attributes.parse||p.attributes.decode || $(this).text().length > 0){
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
        mark.lib.csv.parse_file(p.attributes.src, function(err, data){
          if(err) cb(err);
          else {
            mark.lib.csv.stringify(data, function(err, string){
              if(err) cb(err);
              else cb(null, {data:data, string:string});
            });
          }
        });
      } else if($(this).text().length > 0) {
        mark.lib.csv.parse_string($(this).text(), function(err, data){
          if(err) cb(err);
          else {
            mark.lib.csv.stringify(data, function(err, string){
              if(err) cb(err);
              else cb(null, {data:data, string:string});
            });
          }
        });
      } else cb('No body provided');
    },
    template: {render: function(p){
      return p.data.string;
    }}
  };
}
