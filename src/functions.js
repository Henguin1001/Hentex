var fs = require('fs'),
  entities = require('entities');
module.exports = function(mark){
  mark.functions = {}
  mark.functions.escape = ["string","template"];
  mark.functions.markto = {
    method:function($,cb){
      cb(null, $(this).text());
    }
  };
  mark.functions.template = {
    method:function($, e, p, cb){
      if(p.attributes.name){
        var template = mark.twig({data:entities.decodeXML(e.html())});
        // console.log(entities.decodeXML(e.html()));
        mark.utils.update_context(mark.functions, p.attributes.name, {
          template:{
            render:function(p2, cb2){
              var compiler = new mark.compiler(p2.context);
              compiler.render(template.render(p2), p2.globals).then((res)=>cb2(null,res),(err)=>{
                  cb2(err);
              });
            }, async:true
          }
        });
        cb();
      } else cb("No method name provided");
    },
    template:mark.utils.empty_template
  };
  mark.functions.set = {
    method:function($, e, p, cb){
      if(p.attributes.key){
        var value = {};
        if(p.attributes.value){
          value[p.attributes.key] = p.attributes.value;
        } else {
          value[p.attributes.key] = $(this).text();
        }
        var new_scope = Object.assign({}, $(this).parent().data('scope'), value);
        $(this).parent().data('scope', new_scope);
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
      if(p.attributes.src !== undefined){
        try {
          var result = JSON.parse(fs.readFileSync(p.attributes.src, 'UTF8'));
          cb(null,result);
        } catch (e) {
          cb(e);
        }
      } else if(p.attributes.stringify !== undefined ||p.attributes.encode !== undefined){
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
  mark.functions.config = {
    method:function($, e, p, cb){
      if(p.attributes.src !== undefined){
        try {
          var result = JSON.parse(fs.readFileSync(p.attributes.src, 'UTF8'));
          p.globals = Object.assign(p.globals, result);
          cb(null,"");
        } catch (e) {
          cb(e);
        }
      } else if($(this).text().length > 0){
        try {
          var result = JSON.parse($(this).text());
          p.globals = Object.assign(p.globals, result); 
          cb(null,"");
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
          cb(err, res);
        });
      } else cb('No body provided');
    },
    template: {render: function(p, cb){
      mark.lib.csv.stringify(p.data, cb);
    }, async:true}
  };
  mark.functions.stage = {
    method:function($, e, p, cb){
      if(p.attributes.name){
        if(p.globals.stage === p.attributes.name){
          cb(null, $(this).text());
        } else {
          cb(null, '');
        }
      } else cb('No stage provided');
    }
  };
  mark.functions.array = {
    method:function($, e, p, cb){
      if(p.attributes.length){
        if(p.attributes.random){
          var output = Array(p.attributes.length).map(()=>Math.floor(Math.random()*p.attributes.random));
          cb(null, output);
        } else {
          cb(null, Array(p.attributes.length));
        }
      } else cb('No length provided');
    }
  };
  require('./templates/index.js')(mark.functions);
}
