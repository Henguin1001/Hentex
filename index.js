var mark = {};
mark.twig = require('./lib/twig.min.js').twig;
require('./src/tree.js')(mark);
require('./src/utils.js')(mark);
require('./src/compiler.js')(mark);
require('./src/functions.js')(mark);
require('./lib/index.js')(mark);

module.exports = mark.compiler;
