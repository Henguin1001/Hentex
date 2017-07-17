var twig = require('twig').twig;

var template = twig({data:"{% for e in arr %}{{loop.index}}{{e}}{% endfor %}"});

var test = [1,2,3,4][Symbol.iterator]();
console.log([...test]);
// console.log(template.render({arr:myIterable}));
