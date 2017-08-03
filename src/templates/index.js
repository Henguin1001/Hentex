module.exports = function(context){
  var loadTemplate = function(resource){
    resource.forEach((e)=>{
      context[e[0]] = Object.assign({method:(cb)=>{cb()}}, context[e[0]], {template:e[1]});
    });
  }
  loadTemplate(require('./test.xml'));
};
