var compiler = new (require('../markto.js')),
  fs = require('fs');
compiler.renderFile('./quiz.xml').then((res)=>{
  fs.writeFileSync('./quiz_output.md', res);
},console.error);
// console.log(compiler);
