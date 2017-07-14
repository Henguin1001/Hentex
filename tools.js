
function call_optional_parameters(fn, scope, parameters, cb) {
  var supported = fn.length - 1;
  var supported_parameters = [...parameters.slice(0, supported), cb];
  fn.call(scope, ...supported_parameters);
}
module.exports = {
  call_optional_parameters:call_optional_parameters
};
