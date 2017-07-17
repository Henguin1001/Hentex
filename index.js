var mark = {};
mark.twig = require('./lib/twig.js').twig;
require('./src/tree.js')(mark);
require('./src/utils.js')(mark);
require('./src/compiler.js')(mark);
require('./src/functions.js')(mark);

module.exports = mark.compiler;
