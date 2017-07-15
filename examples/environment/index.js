const Compiler = require('../../index.js');
const fs = require('fs');

var c = new Compiler();
c.extend("document", {
  method:function($, e, p, cb){
    console.log("document");
    console.log(c.context);
    cb(null, $(this).text());
  }
});
c.extend("template", {
  method:function($, e, p, cb){
    console.log("template");
    if(p.attributes.name){
      c.update(p.attributes.name, {
        method:(cb)=>{console.log("inner template");cb();},
        template:$(e).html()
      });
      cb();
    } else cb("No method name provided");
  }
});
c.extend("test", {
  method:function($, e, p, cb){
    console.log("test");
    cb(null, "this is not good");
  }
});

var template = fs.readFileSync('template.xml','UTF8');
c.render(template).then((res)=>{
  console.log(res);
}, (err)=>{
  console.error(err);
});
