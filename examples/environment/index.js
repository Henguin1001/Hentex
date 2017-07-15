const Compiler = require('../../index.js');
const fs = require('fs');

var c = new Compiler();

c.extend("template", {
  method:function($, e, p, cb){
    if(p.attributes.name){
      c.update(p.attributes.name, {
        template:$(e).text()
      });
      cb();
    } else cb("No method name provided");
  },
  template:{render:()=>{
    return '';
  }}
});
c.extend("bar", {
  method:function($, e, p, cb){
    console.log("Bar Called with " + p.attributes.value);
    cb(null, "");
  }
});


var template = fs.readFileSync('./template.xml','UTF8');
c.render(template).then((res)=>{
  console.log(res);
}, (err)=>{
  console.error(err);
});
