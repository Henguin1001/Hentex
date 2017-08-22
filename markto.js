module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var mark = {};
mark.twig = __webpack_require__(3).twig;
__webpack_require__(4)(mark);
__webpack_require__(5)(mark);
__webpack_require__(6)(mark);
__webpack_require__(8)(mark);
__webpack_require__(13)(mark);

module.exports = mark.compiler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Twig=t():e.Twig=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){/**
	 * Twig.js
	 *
	 * @copyright 2011-2016 John Roepke and the Twig.js Contributors
	 * @license   Available under the BSD 2-Clause License
	 * @link      https://github.com/twigjs/twig.js
	 */
var n={VERSION:"0.10.2"};r(1)(n),r(2)(n),r(3)(n),r(5)(n),r(6)(n),r(7)(n),r(17)(n),r(18)(n),r(22)(n),r(23)(n),r(24)(n),r(25)(n),r(26)(n),r(27)(n),r(28)(n),e.exports=n.exports},function(e,t){e.exports=function(e){"use strict";function t(e,t){var r=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&r===e}return e.trace=!1,e.debug=!1,e.cache=!0,e.noop=function(){},e.placeholders={parent:"{{|PARENT|}}"},e.hasIndexOf=Array.prototype.hasOwnProperty("indexOf"),e.indexOf=function(t,r){if(e.hasIndexOf)return t.indexOf(r);if(void 0===t||null===t)throw new TypeError;var n=Object(t),o=n.length>>>0;if(0===o)return-1;var i=0;if(arguments.length>0&&(i=Number(arguments[1]),i!==i?i=0:0!==i&&i!==1/0&&i!==-(1/0)&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=o)return-1;for(var s=i>=0?i:Math.max(o-Math.abs(i),0);s<o;s++)if(s in n&&n[s]===r)return s;return t==r?0:-1},e.forEach=function(e,t,r){if(Array.prototype.forEach)return e.forEach(t,r);var n,o;if(null==e)throw new TypeError(" this is null or not defined");var i=Object(e),s=i.length>>>0;if("[object Function]"!={}.toString.call(t))throw new TypeError(t+" is not a function");for(r&&(n=r),o=0;o<s;){var a;o in i&&(a=i[o],t.call(n,a,o,i)),o++}},e.merge=function(t,r,n){return e.forEach(Object.keys(r),function(e){(!n||e in t)&&(t[e]=r[e])}),t},e.attempt=function(e,t){try{return e()}catch(e){return t(e)}},e.Error=function(e,t){this.message=e,this.name="TwigException",this.type="TwigException",this.file=t},e.Error.prototype.toString=function(){var e=this.name+": "+this.message;return e},e.log={trace:function(){e.trace&&console&&console.log(Array.prototype.slice.call(arguments))},debug:function(){e.debug&&console&&console.log(Array.prototype.slice.call(arguments))}},"undefined"!=typeof console?"undefined"!=typeof console.error?e.log.error=function(){console.error.apply(console,arguments)}:"undefined"!=typeof console.log&&(e.log.error=function(){console.log.apply(console,arguments)}):e.log.error=function(){},e.ChildContext=function(e){var t=function(){};return t.prototype=e,new t},e.token={},e.token.type={output:"output",logic:"logic",comment:"comment",raw:"raw",output_whitespace_pre:"output_whitespace_pre",output_whitespace_post:"output_whitespace_post",output_whitespace_both:"output_whitespace_both",logic_whitespace_pre:"logic_whitespace_pre",logic_whitespace_post:"logic_whitespace_post",logic_whitespace_both:"logic_whitespace_both"},e.token.definitions=[{type:e.token.type.raw,open:"{% raw %}",close:"{% endraw %}"},{type:e.token.type.raw,open:"{% verbatim %}",close:"{% endverbatim %}"},{type:e.token.type.output_whitespace_pre,open:"{{-",close:"}}"},{type:e.token.type.output_whitespace_post,open:"{{",close:"-}}"},{type:e.token.type.output_whitespace_both,open:"{{-",close:"-}}"},{type:e.token.type.logic_whitespace_pre,open:"{%-",close:"%}"},{type:e.token.type.logic_whitespace_post,open:"{%",close:"-%}"},{type:e.token.type.logic_whitespace_both,open:"{%-",close:"-%}"},{type:e.token.type.output,open:"{{",close:"}}"},{type:e.token.type.logic,open:"{%",close:"%}"},{type:e.token.type.comment,open:"{#",close:"#}"}],e.token.strings=['"',"'"],e.token.findStart=function(t){var r,n,o,i,s={position:null,def:null},a=null,p=e.token.definitions.length;for(r=0;r<p;r++)n=e.token.definitions[r],o=t.indexOf(n.open),i=t.indexOf(n.close),e.log.trace("Twig.token.findStart: ","Searching for ",n.open," found at ",o),o>=0&&n.open.length!==n.close.length&&i<0||(o>=0&&(null===s.position||o<s.position)?(s.position=o,s.def=n,a=i):o>=0&&null!==s.position&&o===s.position&&(n.open.length>s.def.open.length?(s.position=o,s.def=n,a=i):n.open.length===s.def.open.length&&(n.close.length>s.def.close.length?i>=0&&i<a&&(s.position=o,s.def=n,a=i):i>=0&&i<a&&(s.position=o,s.def=n,a=i))));return s},e.token.findEnd=function(t,r,n){for(var o,i,s=null,a=!1,p=0,c=null,l=null,u=null,f=null,h=null,y=null;!a;){if(c=null,l=null,u=t.indexOf(r.close,p),!(u>=0))throw new e.Error("Unable to find closing bracket '"+r.close+"' opened near template position "+n);if(s=u,a=!0,r.type===e.token.type.comment)break;if(r.type===e.token.type.raw)break;for(i=e.token.strings.length,o=0;o<i;o+=1)h=t.indexOf(e.token.strings[o],p),h>0&&h<u&&(null===c||h<c)&&(c=h,l=e.token.strings[o]);if(null!==c)for(f=c+1,s=null,a=!1;;){if(y=t.indexOf(l,f),y<0)throw"Unclosed string in template";if("\\"!==t.substr(y-1,1)){p=y+1;break}f=y+1}}return s},e.tokenize=function(t){for(var r=[],n=0,o=null,i=null;t.length>0;)if(o=e.token.findStart(t),e.log.trace("Twig.tokenize: ","Found token: ",o),null!==o.position){if(o.position>0&&r.push({type:e.token.type.raw,value:t.substring(0,o.position)}),t=t.substr(o.position+o.def.open.length),n+=o.position+o.def.open.length,i=e.token.findEnd(t,o.def,n),e.log.trace("Twig.tokenize: ","Token ends at ",i),r.push({type:o.def.type,value:t.substring(0,i).trim()}),"\n"===t.substr(i+o.def.close.length,1))switch(o.def.type){case"logic_whitespace_pre":case"logic_whitespace_post":case"logic_whitespace_both":case"logic":i+=1}t=t.substr(i+o.def.close.length),n+=i+o.def.close.length}else r.push({type:e.token.type.raw,value:t}),t="";return r},e.compile=function(t){var r=this;return e.attempt(function(){for(var n=[],o=[],i=[],s=null,a=null,p=null,c=null,l=null,u=null,f=null,h=null,y=null,d=null,g=null,m=null,x=function(t){e.expression.compile.call(r,t),o.length>0?i.push(t):n.push(t)},v=function(t){if(a=e.logic.compile.call(r,t),d=a.type,g=e.logic.handler[d].open,m=e.logic.handler[d].next,e.log.trace("Twig.compile: ","Compiled logic token to ",a," next is: ",m," open is : ",g),void 0!==g&&!g){if(c=o.pop(),f=e.logic.handler[c.type],e.indexOf(f.next,d)<0)throw new Error(d+" not expected after a "+c.type);c.output=c.output||[],c.output=c.output.concat(i),i=[],y={type:e.token.type.logic,token:c},o.length>0?i.push(y):n.push(y)}void 0!==m&&m.length>0?(e.log.trace("Twig.compile: ","Pushing ",a," to logic stack."),o.length>0&&(c=o.pop(),c.output=c.output||[],c.output=c.output.concat(i),o.push(c),i=[]),o.push(a)):void 0!==g&&g&&(y={type:e.token.type.logic,token:a},o.length>0?i.push(y):n.push(y))};t.length>0;){switch(s=t.shift(),l=n[n.length-1],u=i[i.length-1],h=t[0],e.log.trace("Compiling token ",s),s.type){case e.token.type.raw:o.length>0?i.push(s):n.push(s);break;case e.token.type.logic:v.call(r,s);break;case e.token.type.comment:break;case e.token.type.output:x.call(r,s);break;case e.token.type.logic_whitespace_pre:case e.token.type.logic_whitespace_post:case e.token.type.logic_whitespace_both:case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:switch(s.type!==e.token.type.output_whitespace_post&&s.type!==e.token.type.logic_whitespace_post&&(l&&l.type===e.token.type.raw&&(n.pop(),null===l.value.match(/^\s*$/)&&(l.value=l.value.trim(),n.push(l))),u&&u.type===e.token.type.raw&&(i.pop(),null===u.value.match(/^\s*$/)&&(u.value=u.value.trim(),i.push(u)))),s.type){case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:x.call(r,s);break;case e.token.type.logic_whitespace_pre:case e.token.type.logic_whitespace_post:case e.token.type.logic_whitespace_both:v.call(r,s)}s.type!==e.token.type.output_whitespace_pre&&s.type!==e.token.type.logic_whitespace_pre&&h&&h.type===e.token.type.raw&&(t.shift(),null===h.value.match(/^\s*$/)&&(h.value=h.value.trim(),t.unshift(h)))}e.log.trace("Twig.compile: "," Output: ",n," Logic Stack: ",o," Pending Output: ",i)}if(o.length>0)throw p=o.pop(),new Error("Unable to find an end tag for "+p.type+", expecting one of "+p.next);return n},function(t){if(r.options.rethrow)throw"TwigException"!=t.type||t.file||(t.file=r.id),t;e.log.error("Error compiling twig template "+r.id+": "),t.stack?e.log.error(t.stack):e.log.error(t.toString())})},e.parse=function(t,r,n){function o(t){if(i.options.rethrow)throw"string"==typeof t&&(t=new e.Error(t)),"TwigException"!=t.type||t.file||(t.file=i.id),t;if(e.log.error("Error parsing twig template "+i.id+": "),t.stack?e.log.error(t.stack):e.log.error(t.toString()),e.debug)return t.toString()}var i=this,s=[],a=null,p=!0,c=null,l=!0;if(c=e.async.forEach(t,function(t){switch(e.log.debug("Twig.parse: ","Parsing token: ",t),t.type){case e.token.type.raw:s.push(e.filters.raw(t.value));break;case e.token.type.logic:var n=t.token;return e.logic.parseAsync.call(i,n,r,l).then(function(e){void 0!==e.chain&&(l=e.chain),void 0!==e.context&&(r=e.context),void 0!==e.output&&s.push(e.output)});case e.token.type.comment:break;case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:case e.token.type.output:return e.log.debug("Twig.parse: ","Output token: ",t.stack),e.expression.parseAsync.call(i,t.stack,r).then(function(e){s.push(e)})}}).then(function(){return s=e.output.call(i,s),p=!1,s}).catch(function(e){n&&o(e),a=e}),n)return c;if(null!==a)return o(a);if(p)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return s},e.prepare=function(t){var r,n;return e.log.debug("Twig.prepare: ","Tokenizing ",t),n=e.tokenize.call(this,t),e.log.debug("Twig.prepare: ","Compiling ",n),r=e.compile.call(this,n),e.log.debug("Twig.prepare: ","Compiled ",r),r},e.output=function(t){if(!this.options.autoescape)return t.join("");var r="html";"string"==typeof this.options.autoescape&&(r=this.options.autoescape);var n=[];return e.forEach(t,function(t){t&&t.twig_markup!==!0&&t.twig_markup!=r&&(t=e.filters.escape(t,[r])),n.push(t)}),e.Markup(n.join(""))},e.Templates={loaders:{},parsers:{},registry:{}},e.validateId=function(t){if("prototype"===t)throw new e.Error(t+" is not a valid twig identifier");if(e.cache&&e.Templates.registry.hasOwnProperty(t))throw new e.Error("There is already a template with the ID "+t);return!0},e.Templates.registerLoader=function(t,r,n){if("function"!=typeof r)throw new e.Error("Unable to add loader for "+t+": Invalid function reference given.");n&&(r=r.bind(n)),this.loaders[t]=r},e.Templates.unRegisterLoader=function(e){this.isRegisteredLoader(e)&&delete this.loaders[e]},e.Templates.isRegisteredLoader=function(e){return this.loaders.hasOwnProperty(e)},e.Templates.registerParser=function(t,r,n){if("function"!=typeof r)throw new e.Error("Unable to add parser for "+t+": Invalid function regerence given.");n&&(r=r.bind(n)),this.parsers[t]=r},e.Templates.unRegisterParser=function(e){this.isRegisteredParser(e)&&delete this.parsers[e]},e.Templates.isRegisteredParser=function(e){return this.parsers.hasOwnProperty(e)},e.Templates.save=function(t){if(void 0===t.id)throw new e.Error("Unable to save template with no id");e.Templates.registry[t.id]=t},e.Templates.load=function(t){return e.Templates.registry.hasOwnProperty(t)?e.Templates.registry[t]:null},e.Templates.loadRemote=function(t,r,n,o){var i;return void 0===r.async&&(r.async=!0),void 0===r.id&&(r.id=t),e.cache&&e.Templates.registry.hasOwnProperty(r.id)?("function"==typeof n&&n(e.Templates.registry[r.id]),e.Templates.registry[r.id]):(r.parser=r.parser||"twig",i=this.loaders[r.method]||this.loaders.fs,i.apply(this,arguments))},e.Template=function(r){var n=r.data,o=r.id,i=r.blocks,s=r.macros||{},a=r.base,p=r.path,c=r.url,l=r.name,u=r.method,f=r.options;this.id=o,this.method=u,this.base=a,this.path=p,this.url=c,this.name=l,this.macros=s,this.options=f,this.reset(i),t("String",n)?this.tokens=e.prepare.call(this,n):this.tokens=n,void 0!==o&&e.Templates.save(this)},e.Template.prototype.reset=function(t){e.log.debug("Twig.Template.reset","Reseting template "+this.id),this.blocks={},this.importedBlocks=[],this.originalBlockTokens={},this.child={blocks:t||{}},this.extend=null},e.Template.prototype.render=function(t,r,n){r=r||{};var o,i,s=this,a=null,p=!0,c=null;this.context=t||{},this.reset(),r.blocks&&(this.blocks=r.blocks),r.macros&&(this.macros=r.macros);var l=function(t){if(s.extend){var n;return s.options.allowInlineIncludes&&(n=e.Templates.load(s.extend),n&&(n.options=s.options)),n||(i=e.path.parsePath(s,s.extend),n=e.Templates.loadRemote(i,{method:s.getLoaderMethod(),base:s.base,async:!1,id:i,options:s.options})),s.parent=n,s.parent.renderAsync(s.context,{blocks:s.blocks})}return"blocks"==r.output?s.blocks:"macros"==r.output?s.macros:t};if(c=e.parseAsync.call(this,this.tokens,this.context).then(l).then(function(e){return p=!1,o=e,e}).catch(function(e){if(n)throw e;a=e}),n)return c;if(null!==a)throw a;if(p)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return o},e.Template.prototype.importFile=function(t){var r,n;if(!this.url&&this.options.allowInlineIncludes){if(t=this.path?e.path.parsePath(this,t):t,n=e.Templates.load(t),!n&&(n=e.Templates.loadRemote(r,{id:t,method:this.getLoaderMethod(),async:!1,path:t,options:this.options}),!n))throw new e.Error("Unable to find the template "+t);return n.options=this.options,n}return r=e.path.parsePath(this,t),n=e.Templates.loadRemote(r,{method:this.getLoaderMethod(),base:this.base,async:!1,options:this.options,id:r})},e.Template.prototype.importBlocks=function(t,r){var n=this.importFile(t),o=this.context,i=this;r=r||!1,n.render(o),e.forEach(Object.keys(n.blocks),function(e){(r||void 0===i.blocks[e])&&(i.blocks[e]=n.blocks[e],i.importedBlocks.push(e))})},e.Template.prototype.importMacros=function(t){var r=e.path.parsePath(this,t),n=e.Templates.loadRemote(r,{method:this.getLoaderMethod(),async:!1,id:r});return n},e.Template.prototype.getLoaderMethod=function(){return this.path?"fs":this.url?"ajax":this.method||"fs"},e.Template.prototype.compile=function(t){return e.compiler.compile(this,t)},e.Markup=function(e,t){return"undefined"==typeof t&&(t=!0),"string"==typeof e&&e.length>0&&(e=new String(e),e.twig_markup=t),e},e}},function(e,t){e.exports=function(e){return e.compiler={module:{}},e.compiler.compile=function(t,r){var n,o=JSON.stringify(t.tokens),i=t.id;if(r.module){if(void 0===e.compiler.module[r.module])throw new e.Error("Unable to find module type "+r.module);n=e.compiler.module[r.module](i,o,r.twig)}else n=e.compiler.wrap(i,o);return n},e.compiler.module={amd:function(t,r,n){return'define(["'+n+'"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = '+e.compiler.wrap(t,r)+"\n\treturn templates;\n});"},node:function(t,r){return'var twig = require("twig").twig;\nexports.template = '+e.compiler.wrap(t,r)},cjs2:function(t,r,n){return'module.declare([{ twig: "'+n+'" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = '+e.compiler.wrap(t,r)+"\n});"}},e.compiler.wrap=function(e,t){return'twig({id:"'+e.replace('"','\\"')+'", data:'+t+", precompiled: true});\n"},e}},function(e,t,r){e.exports=function(e){"use strict";function t(t,r,n){return r?e.expression.parseAsync.call(t,r,n):e.Promise.resolve(!1)}e.expression={},r(4)(e),e.expression.reservedWords=["true","false","null","TRUE","FALSE","NULL","_context","and","b-and","or","b-or","b-xor","in","not in","if"],e.expression.type={comma:"Twig.expression.type.comma",operator:{unary:"Twig.expression.type.operator.unary",binary:"Twig.expression.type.operator.binary"},string:"Twig.expression.type.string",bool:"Twig.expression.type.bool",slice:"Twig.expression.type.slice",array:{start:"Twig.expression.type.array.start",end:"Twig.expression.type.array.end"},object:{start:"Twig.expression.type.object.start",end:"Twig.expression.type.object.end"},parameter:{start:"Twig.expression.type.parameter.start",end:"Twig.expression.type.parameter.end"},subexpression:{start:"Twig.expression.type.subexpression.start",end:"Twig.expression.type.subexpression.end"},key:{period:"Twig.expression.type.key.period",brackets:"Twig.expression.type.key.brackets"},filter:"Twig.expression.type.filter",_function:"Twig.expression.type._function",variable:"Twig.expression.type.variable",number:"Twig.expression.type.number",_null:"Twig.expression.type.null",context:"Twig.expression.type.context",test:"Twig.expression.type.test"},e.expression.set={operations:[e.expression.type.filter,e.expression.type.operator.unary,e.expression.type.operator.binary,e.expression.type.array.end,e.expression.type.object.end,e.expression.type.parameter.end,e.expression.type.subexpression.end,e.expression.type.comma,e.expression.type.test],expressions:[e.expression.type._function,e.expression.type.bool,e.expression.type.string,e.expression.type.variable,e.expression.type.number,e.expression.type._null,e.expression.type.context,e.expression.type.parameter.start,e.expression.type.array.start,e.expression.type.object.start,e.expression.type.subexpression.start,e.expression.type.operator.unary]},e.expression.set.operations_extended=e.expression.set.operations.concat([e.expression.type.key.period,e.expression.type.key.brackets,e.expression.type.slice]),e.expression.fn={compile:{push:function(e,t,r){r.push(e)},push_both:function(e,t,r){r.push(e),t.push(e)}},parse:{push:function(e,t,r){t.push(e)},push_value:function(e,t,r){t.push(e.value)}}},e.expression.definitions=[{type:e.expression.type.test,regex:/^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*(\s?as)?)/,next:e.expression.set.operations.concat([e.expression.type.parameter.start]),compile:function(e,t,r){e.filter=e.match[2],e.modifier=e.match[1],delete e.match,delete e.value,r.push(e)},parse:function(r,n,o){var i=n.pop();return t(this,r.params,o).then(function(t){var o=e.test(r.filter,i,t);"not"==r.modifier?n.push(!o):n.push(o)})}},{type:e.expression.type.comma,regex:/^,/,next:e.expression.set.expressions.concat([e.expression.type.array.end,e.expression.type.object.end]),compile:function(t,r,n){var o,i=r.length-1;for(delete t.match,delete t.value;i>=0;i--){if(o=r.pop(),o.type===e.expression.type.object.start||o.type===e.expression.type.parameter.start||o.type===e.expression.type.array.start){r.push(o);break}n.push(o)}n.push(t)}},{type:e.expression.type.number,regex:/^\-?\d+(\.\d+)?/,next:e.expression.set.operations,compile:function(e,t,r){e.value=Number(e.value),r.push(e)},parse:e.expression.fn.parse.push_value},{type:e.expression.type.operator.binary,regex:/(^\?\:|^(b\-and)|^(b\-or)|^(b\-xor)|^[\+\-~%\?]|^[\:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[\(|\s+]|^(or)[\(|\s+]|^(in)[\(|\s+]|^(not in)[\(|\s+]|^\.\.)/,next:e.expression.set.expressions,transform:function(e,t){switch(e[0]){case"and(":case"or(":case"in(":case"not in(":return t[t.length-1].value=e[2],e[0];default:return""}},compile:function(t,r,n){delete t.match,t.value=t.value.trim();var o=t.value,i=e.expression.operator.lookup(o,t);for(e.log.trace("Twig.expression.compile: ","Operator: ",i," from ",o);r.length>0&&(r[r.length-1].type==e.expression.type.operator.unary||r[r.length-1].type==e.expression.type.operator.binary)&&(i.associativity===e.expression.operator.leftToRight&&i.precidence>=r[r.length-1].precidence||i.associativity===e.expression.operator.rightToLeft&&i.precidence>r[r.length-1].precidence);){var s=r.pop();n.push(s)}if(":"===o){if(!r[r.length-1]||"?"!==r[r.length-1].value){var a=n.pop();if(a.type===e.expression.type.string||a.type===e.expression.type.variable)t.key=a.value;else if(a.type===e.expression.type.number)t.key=a.value.toString();else{if(!a.expression||a.type!==e.expression.type.parameter.end&&a.type!=e.expression.type.subexpression.end)throw new e.Error("Unexpected value before ':' of "+a.type+" = "+a.value);t.params=a.params}return void n.push(t)}}else r.push(i)},parse:function(t,r,n){if(t.key)r.push(t);else{if(t.params)return e.expression.parseAsync.call(this,t.params,n).then(function(e){t.key=e,r.push(t),n.loop||delete t.params});e.expression.operator.parse(t.value,r)}}},{type:e.expression.type.operator.unary,regex:/(^not\s+)/,next:e.expression.set.expressions,compile:function(t,r,n){delete t.match,t.value=t.value.trim();var o=t.value,i=e.expression.operator.lookup(o,t);for(e.log.trace("Twig.expression.compile: ","Operator: ",i," from ",o);r.length>0&&(r[r.length-1].type==e.expression.type.operator.unary||r[r.length-1].type==e.expression.type.operator.binary)&&(i.associativity===e.expression.operator.leftToRight&&i.precidence>=r[r.length-1].precidence||i.associativity===e.expression.operator.rightToLeft&&i.precidence>r[r.length-1].precidence);){var s=r.pop();n.push(s)}r.push(i)},parse:function(t,r,n){e.expression.operator.parse(t.value,r)}},{type:e.expression.type.string,regex:/^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,next:e.expression.set.operations_extended,compile:function(t,r,n){var o=t.value;delete t.match,o='"'===o.substring(0,1)?o.replace('\\"','"'):o.replace("\\'","'"),t.value=o.substring(1,o.length-1).replace(/\\n/g,"\n").replace(/\\r/g,"\r"),e.log.trace("Twig.expression.compile: ","String value: ",t.value),n.push(t)},parse:e.expression.fn.parse.push_value},{type:e.expression.type.subexpression.start,regex:/^\(/,next:e.expression.set.expressions.concat([e.expression.type.subexpression.end]),compile:function(e,t,r){e.value="(",r.push(e),t.push(e)},parse:e.expression.fn.parse.push},{type:e.expression.type.subexpression.end,regex:/^\)/,next:e.expression.set.operations_extended,validate:function(t,r){for(var n=r.length-1,o=!1,i=!1,s=0;!o&&n>=0;){var a=r[n];o=a.type===e.expression.type.subexpression.start,o&&i&&(i=!1,o=!1),a.type===e.expression.type.parameter.start?s++:a.type===e.expression.type.parameter.end?s--:a.type===e.expression.type.subexpression.end&&(i=!0),n--}return o&&0===s},compile:function(t,r,n){var o,i=t;for(o=r.pop();r.length>0&&o.type!=e.expression.type.subexpression.start;)n.push(o),o=r.pop();for(var s=[];t.type!==e.expression.type.subexpression.start;)s.unshift(t),t=n.pop();s.unshift(t);o=r[r.length-1],void 0===o||o.type!==e.expression.type._function&&o.type!==e.expression.type.filter&&o.type!==e.expression.type.test&&o.type!==e.expression.type.key.brackets?(i.expression=!0,s.pop(),s.shift(),i.params=s,n.push(i)):(i.expression=!1,o.params=s)},parse:function(t,r,n){if(t.expression)return e.expression.parseAsync.call(this,t.params,n).then(function(e){r.push(e)});throw new e.Error("Unexpected subexpression end when token is not marked as an expression")}},{type:e.expression.type.parameter.start,regex:/^\(/,next:e.expression.set.expressions.concat([e.expression.type.parameter.end]),validate:function(t,r){var n=r[r.length-1];return n&&e.indexOf(e.expression.reservedWords,n.value.trim())<0},compile:e.expression.fn.compile.push_both,parse:e.expression.fn.parse.push},{type:e.expression.type.parameter.end,regex:/^\)/,next:e.expression.set.operations_extended,compile:function(t,r,n){var o,i=t;for(o=r.pop();r.length>0&&o.type!=e.expression.type.parameter.start;)n.push(o),o=r.pop();for(var s=[];t.type!==e.expression.type.parameter.start;)s.unshift(t),t=n.pop();s.unshift(t);t=n[n.length-1],void 0===t||t.type!==e.expression.type._function&&t.type!==e.expression.type.filter&&t.type!==e.expression.type.test&&t.type!==e.expression.type.key.brackets?(i.expression=!0,s.pop(),s.shift(),i.params=s,n.push(i)):(i.expression=!1,t.params=s)},parse:function(t,r,n){var o=[],i=!1,s=null;if(t.expression)return e.expression.parseAsync.call(this,t.params,n).then(function(e){r.push(e)});for(;r.length>0;){if(s=r.pop(),s&&s.type&&s.type==e.expression.type.parameter.start){i=!0;break}o.unshift(s)}if(!i)throw new e.Error("Expected end of parameter set.");r.push(o)}},{type:e.expression.type.slice,regex:/^\[(\d*\:\d*)\]/,next:e.expression.set.operations_extended,compile:function(e,t,r){var n=e.match[1].split(":"),o=n[0]?parseInt(n[0]):void 0,i=n[1]?parseInt(n[1]):void 0;e.value="slice",e.params=[o,i],i||(e.params=[o]),r.push(e)},parse:function(t,r,n){var o=r.pop(),i=t.params;r.push(e.filter.call(this,t.value,o,i))}},{type:e.expression.type.array.start,regex:/^\[/,next:e.expression.set.expressions.concat([e.expression.type.array.end]),compile:e.expression.fn.compile.push_both,parse:e.expression.fn.parse.push},{type:e.expression.type.array.end,regex:/^\]/,next:e.expression.set.operations_extended,compile:function(t,r,n){for(var o,i=r.length-1;i>=0&&(o=r.pop(),o.type!==e.expression.type.array.start);i--)n.push(o);n.push(t)},parse:function(t,r,n){for(var o=[],i=!1,s=null;r.length>0;){if(s=r.pop(),s.type&&s.type==e.expression.type.array.start){i=!0;break}o.unshift(s)}if(!i)throw new e.Error("Expected end of array.");r.push(o)}},{type:e.expression.type.object.start,regex:/^\{/,next:e.expression.set.expressions.concat([e.expression.type.object.end]),compile:e.expression.fn.compile.push_both,parse:e.expression.fn.parse.push},{type:e.expression.type.object.end,regex:/^\}/,next:e.expression.set.operations_extended,compile:function(t,r,n){for(var o,i=r.length-1;i>=0&&(o=r.pop(),!o||o.type!==e.expression.type.object.start);i--)n.push(o);n.push(t)},parse:function(t,r,n){for(var o={},i=!1,s=null,a=!1,p=null;r.length>0;){if(s=r.pop(),s&&s.type&&s.type===e.expression.type.object.start){i=!0;break}if(s&&s.type&&(s.type===e.expression.type.operator.binary||s.type===e.expression.type.operator.unary)&&s.key){if(!a)throw new e.Error("Missing value for key '"+s.key+"' in object definition.");o[s.key]=p,void 0===o._keys&&(o._keys=[]),o._keys.unshift(s.key),p=null,a=!1}else a=!0,p=s}if(!i)throw new e.Error("Unexpected end of object.");r.push(o)}},{type:e.expression.type.filter,regex:/^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:function(e,t,r){e.value=e.match[1],r.push(e)},parse:function(r,n,o){var i=this,s=n.pop();return t(this,r.params,o).then(function(t){return e.filter.call(i,r.value,s,t)}).then(function(e){n.push(e)})}},{type:e.expression.type._function,regex:/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,next:e.expression.type.parameter.start,validate:function(t,r){return t[1]&&e.indexOf(e.expression.reservedWords,t[1])<0},transform:function(e,t){return"("},compile:function(e,t,r){var n=e.match[1];e.fn=n,delete e.match,delete e.value,r.push(e)},parse:function(r,n,o){var i,s=this,a=r.fn;return t(this,r.params,o).then(function(t){if(e.functions[a])i=e.functions[a].apply(s,t);else{if("function"!=typeof o[a])throw new e.Error(a+" function does not exist and is not defined in the context");i=o[a].apply(o,t)}return i}).then(function(e){n.push(e)})}},{type:e.expression.type.variable,regex:/^[a-zA-Z_][a-zA-Z0-9_]*/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:e.expression.fn.compile.push,validate:function(t,r){return e.indexOf(e.expression.reservedWords,t[0])<0},parse:function(t,r,n){return e.expression.resolveAsync.call(this,n[t.value],n).then(function(e){r.push(e)})}},{type:e.expression.type.key.period,regex:/^\.([a-zA-Z0-9_]+)/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:function(e,t,r){e.key=e.match[1],delete e.match,delete e.value,r.push(e)},parse:function(r,n,o,i){var s,a=this,p=r.key,c=n.pop();return t(this,r.params,o).then(function(t){if(null===c||void 0===c){if(a.options.strict_variables)throw new e.Error("Can't access a key "+p+" on an null or undefined object.");s=void 0}else{var r=function(e){return e.substr(0,1).toUpperCase()+e.substr(1)};s="object"==typeof c&&p in c?c[p]:void 0!==c["get"+r(p)]?c["get"+r(p)]:void 0!==c["is"+r(p)]?c["is"+r(p)]:void 0}return e.expression.resolveAsync.call(a,s,o,t,i,c)}).then(function(e){n.push(e)})}},{type:e.expression.type.key.brackets,regex:/^\[([^\]\:]*)\]/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:function(t,r,n){var o=t.match[1];delete t.value,delete t.match,t.stack=e.expression.compile({value:o}).stack,n.push(t)},parse:function(r,n,o,i){var s,a,p=this,c=null;return t(this,r.params,o).then(function(t){return c=t,e.expression.parseAsync.call(p,r.stack,o)}).then(function(t){if(s=n.pop(),null===s||void 0===s){if(p.options.strict_variables)throw new e.Error("Can't access a key "+t+" on an null or undefined object.");return null}return a="object"==typeof s&&t in s?s[t]:null,e.expression.resolveAsync.call(p,a,s,c,i)}).then(function(e){n.push(e)})}},{type:e.expression.type._null,regex:/^(null|NULL|none|NONE)/,next:e.expression.set.operations,compile:function(e,t,r){delete e.match,e.value=null,r.push(e)},parse:e.expression.fn.parse.push_value},{type:e.expression.type.context,regex:/^_context/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:e.expression.fn.compile.push,parse:function(e,t,r){t.push(r)}},{type:e.expression.type.bool,regex:/^(true|TRUE|false|FALSE)/,next:e.expression.set.operations,compile:function(e,t,r){e.value="true"===e.match[0].toLowerCase(),delete e.match,r.push(e)},parse:e.expression.fn.parse.push_value}],e.expression.resolveAsync=function(t,r,n,o,i){if("function"==typeof t){var s=e.Promise.resolve(n);if(o&&o.type===e.expression.type.parameter.end){var a=!0;s=s.then(function(){return o.params&&e.expression.parseAsync.call(this,o.params,r,a)}).then(function(e){return o.cleanup=!0,e})}return s.then(function(e){return t.apply(i||r,e||[])})}return e.Promise.resolve(t)},e.expression.resolve=function(t,r,n,o,i){var s,a=!0;if(e.expression.resolveAsync.call(this,t,r,n,o,i).then(function(e){a=!1,s=e}),a)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return s},e.expression.handler={},e.expression.extendType=function(t){e.expression.type[t]="Twig.expression.type."+t},e.expression.extend=function(t){if(!t.type)throw new e.Error("Unable to extend logic definition. No type provided for "+t);e.expression.handler[t.type]=t};for(;e.expression.definitions.length>0;)e.expression.extend(e.expression.definitions.shift());return e.expression.tokenize=function(t){var r,n,o,i,s,a,p=[],c=0,l=null,u=[];for(a=function(){for(var t=arguments.length-2,n=new Array(t);t-- >0;)n[t]=arguments[t];if(e.log.trace("Twig.expression.tokenize","Matched a ",r," regular expression of ",n),l&&e.indexOf(l,r)<0)return u.push(r+" cannot follow a "+p[p.length-1].type+" at template:"+c+" near '"+n[0].substring(0,20)+"...'"),n[0];var o=e.expression.handler[r];return o.validate&&!o.validate(n,p)?n[0]:(u=[],p.push({type:r,value:n[0],match:n}),s=!0,l=i,c+=n[0].length,o.transform?o.transform(n,p):"")},e.log.debug("Twig.expression.tokenize","Tokenizing expression ",t);t.length>0;){t=t.trim();for(r in e.expression.handler){if(i=e.expression.handler[r].next,n=e.expression.handler[r].regex,e.log.trace("Checking type ",r," on ",t),s=!1,e.lib.isArray(n))for(o=n.length;o-- >0;)t=t.replace(n[o],a);else t=t.replace(n,a);if(s)break}if(!s)throw u.length>0?new e.Error(u.join(" OR ")):new e.Error("Unable to parse '"+t+"' at template position"+c)}return e.log.trace("Twig.expression.tokenize","Tokenized to ",p),p},e.expression.compile=function(t){var r=t.value,n=e.expression.tokenize(r),o=null,i=[],s=[],a=null;for(e.log.trace("Twig.expression.compile: ","Compiling ",r);n.length>0;)o=n.shift(),a=e.expression.handler[o.type],e.log.trace("Twig.expression.compile: ","Compiling ",o),a.compile&&a.compile(o,s,i),e.log.trace("Twig.expression.compile: ","Stack is",s),e.log.trace("Twig.expression.compile: ","Output is",i);for(;s.length>0;)i.push(s.pop());return e.log.trace("Twig.expression.compile: ","Final output is",i),t.stack=i,delete t.value,t},e.expression.parse=function(t,r,n,o){var i=this;e.lib.isArray(t)||(t=[t]);var s,a=[],p=null,c=!0,l=null,u=[];if(p=e.async.forEach(t,function(n,o){if(!n.cleanup){var p=null;return t.length>o+1&&(s=t[o+1]),l=e.expression.handler[n.type],l.parse&&(p=l.parse.call(i,n,a,r,s)),r.loop&&n.type===e.expression.type.operator.binary&&u.push(n),p}}).then(function(){if(e.forEach(u,function(e){e.params&&e.key&&delete e.key}),n){var t=a.splice(0);a.push(t)}if(o)return a.pop()}),o)return p;if(p.then(function(e){c=!1}),c)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return a.pop()},e}},function(e,t){e.exports=function(e){"use strict";e.expression.operator={leftToRight:"leftToRight",rightToLeft:"rightToLeft"};var t=function(e,t){if(void 0===t||null===t)return null;if(void 0!==t.indexOf)return e===t||""!==e&&t.indexOf(e)>-1;
var r;for(r in t)if(t.hasOwnProperty(r)&&t[r]===e)return!0;return!1};return e.expression.operator.lookup=function(t,r){switch(t){case"..":r.precidence=20,r.associativity=e.expression.operator.leftToRight;break;case",":r.precidence=18,r.associativity=e.expression.operator.leftToRight;break;case"?:":case"?":case":":r.precidence=16,r.associativity=e.expression.operator.rightToLeft;break;case"or":r.precidence=14,r.associativity=e.expression.operator.leftToRight;break;case"and":r.precidence=13,r.associativity=e.expression.operator.leftToRight;break;case"b-or":r.precidence=12,r.associativity=e.expression.operator.leftToRight;break;case"b-xor":r.precidence=11,r.associativity=e.expression.operator.leftToRight;break;case"b-and":r.precidence=10,r.associativity=e.expression.operator.leftToRight;break;case"==":case"!=":r.precidence=9,r.associativity=e.expression.operator.leftToRight;break;case"<":case"<=":case">":case">=":case"not in":case"in":r.precidence=8,r.associativity=e.expression.operator.leftToRight;break;case"~":case"+":case"-":r.precidence=6,r.associativity=e.expression.operator.leftToRight;break;case"//":case"**":case"*":case"/":case"%":r.precidence=5,r.associativity=e.expression.operator.leftToRight;break;case"not":r.precidence=3,r.associativity=e.expression.operator.rightToLeft;break;default:throw new e.Error("Failed to lookup operator: "+t+" is an unknown operator.")}return r.operator=t,r},e.expression.operator.parse=function(r,n){e.log.trace("Twig.expression.operator.parse: ","Handling ",r);var o,i,s;switch("?"===r&&(s=n.pop()),i=n.pop(),"not"!==r&&(o=n.pop()),"in"!==r&&"not in"!==r&&(o&&Array.isArray(o)&&(o=o.length),i&&Array.isArray(i)&&(i=i.length)),r){case":":break;case"?:":e.lib.boolval(o)?n.push(o):n.push(i);break;case"?":void 0===o&&(o=i,i=s,s=void 0),e.lib.boolval(o)?n.push(i):n.push(s);break;case"+":i=parseFloat(i),o=parseFloat(o),n.push(o+i);break;case"-":i=parseFloat(i),o=parseFloat(o),n.push(o-i);break;case"*":i=parseFloat(i),o=parseFloat(o),n.push(o*i);break;case"/":i=parseFloat(i),o=parseFloat(o),n.push(o/i);break;case"//":i=parseFloat(i),o=parseFloat(o),n.push(Math.floor(o/i));break;case"%":i=parseFloat(i),o=parseFloat(o),n.push(o%i);break;case"~":n.push((null!=o?o.toString():"")+(null!=i?i.toString():""));break;case"not":case"!":n.push(!e.lib.boolval(i));break;case"<":n.push(o<i);break;case"<=":n.push(o<=i);break;case">":n.push(o>i);break;case">=":n.push(o>=i);break;case"===":n.push(o===i);break;case"==":n.push(o==i);break;case"!==":n.push(o!==i);break;case"!=":n.push(o!=i);break;case"or":n.push(e.lib.boolval(o)||e.lib.boolval(i));break;case"b-or":n.push(o|i);break;case"b-xor":n.push(o^i);break;case"and":n.push(e.lib.boolval(o)&&e.lib.boolval(i));break;case"b-and":n.push(o&i);break;case"**":n.push(Math.pow(o,i));break;case"not in":n.push(!t(o,i));break;case"in":n.push(t(o,i));break;case"..":n.push(e.functions.range(o,i));break;default:throw new e.Error("Failed to parse operator: "+r+" is an unknown operator.")}},e}},function(e,t){e.exports=function(e){function t(e,t){var r=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&r===e}return e.filters={upper:function(e){return"string"!=typeof e?e:e.toUpperCase()},lower:function(e){return"string"!=typeof e?e:e.toLowerCase()},capitalize:function(e){return"string"!=typeof e?e:e.substr(0,1).toUpperCase()+e.toLowerCase().substr(1)},title:function(e){return"string"!=typeof e?e:e.toLowerCase().replace(/(^|\s)([a-z])/g,function(e,t,r){return t+r.toUpperCase()})},length:function(t){return e.lib.is("Array",t)||"string"==typeof t?t.length:e.lib.is("Object",t)?void 0===t._keys?Object.keys(t).length:t._keys.length:0},reverse:function(e){if(t("Array",e))return e.reverse();if(t("String",e))return e.split("").reverse().join("");if(t("Object",e)){var r=e._keys||Object.keys(e).reverse();return e._keys=r,e}},sort:function(e){if(t("Array",e))return e.sort();if(t("Object",e)){delete e._keys;var r=Object.keys(e),n=r.sort(function(t,r){var n;return e[t]>e[r]==!(e[t]<=e[r])?e[t]>e[r]?1:e[t]<e[r]?-1:0:isNaN(n=parseFloat(e[t]))||isNaN(b1=parseFloat(e[r]))?"string"==typeof e[t]?e[t]>e[r].toString()?1:e[t]<e[r].toString()?-1:0:"string"==typeof e[r]?e[t].toString()>e[r]?1:e[t].toString()<e[r]?-1:0:null:n>b1?1:n<b1?-1:0});return e._keys=n,e}},keys:function(t){if(void 0!==t&&null!==t){var r=t._keys||Object.keys(t),n=[];return e.forEach(r,function(e){"_keys"!==e&&t.hasOwnProperty(e)&&n.push(e)}),n}},url_encode:function(e){if(void 0!==e&&null!==e){var t=encodeURIComponent(e);return t=t.replace("'","%27")}},join:function(r,n){if(void 0!==r&&null!==r){var o="",i=[],s=null;return n&&n[0]&&(o=n[0]),t("Array",r)?i=r:(s=r._keys||Object.keys(r),e.forEach(s,function(e){"_keys"!==e&&r.hasOwnProperty(e)&&i.push(r[e])})),i.join(o)}},default:function(t,r){if(void 0!==r&&r.length>1)throw new e.Error("default filter expects one argument");return void 0===t||null===t||""===t?void 0===r?"":r[0]:t},json_encode:function(r){if(void 0===r||null===r)return"null";if("object"==typeof r&&t("Array",r))return o=[],e.forEach(r,function(t){o.push(e.filters.json_encode(t))}),"["+o.join(",")+"]";if("object"==typeof r){var n=r._keys||Object.keys(r),o=[];return e.forEach(n,function(t){o.push(JSON.stringify(t)+":"+e.filters.json_encode(r[t]))}),"{"+o.join(",")+"}"}return JSON.stringify(r)},merge:function(r,n){var o=[],i=0,s=[];if(t("Array",r)?e.forEach(n,function(e){t("Array",e)||(o={})}):o={},t("Array",o)||(o._keys=[]),t("Array",r)?e.forEach(r,function(e){o._keys&&o._keys.push(i),o[i]=e,i++}):(s=r._keys||Object.keys(r),e.forEach(s,function(e){o[e]=r[e],o._keys.push(e);var t=parseInt(e,10);!isNaN(t)&&t>=i&&(i=t+1)})),e.forEach(n,function(r){t("Array",r)?e.forEach(r,function(e){o._keys&&o._keys.push(i),o[i]=e,i++}):(s=r._keys||Object.keys(r),e.forEach(s,function(e){o[e]||o._keys.push(e),o[e]=r[e];var t=parseInt(e,10);!isNaN(t)&&t>=i&&(i=t+1)}))}),0===n.length)throw new e.Error("Filter merge expects at least one parameter");return o},date:function(t,r){var n=e.functions.date(t),o=r&&r.length?r[0]:"F j, Y H:i";return e.lib.date(o,n)},date_modify:function(t,r){if(void 0!==t&&null!==t){if(void 0===r||1!==r.length)throw new e.Error("date_modify filter expects 1 argument");var n,o=r[0];return e.lib.is("Date",t)&&(n=e.lib.strtotime(o,t.getTime()/1e3)),e.lib.is("String",t)&&(n=e.lib.strtotime(o,e.lib.strtotime(t))),e.lib.is("Number",t)&&(n=e.lib.strtotime(o,t)),new Date(1e3*n)}},replace:function(t,r){if(void 0!==t&&null!==t){var n,o=r[0];for(n in o)o.hasOwnProperty(n)&&"_keys"!==n&&(t=e.lib.replaceAll(t,n,o[n]));return t}},format:function(t,r){if(void 0!==t&&null!==t)return e.lib.vsprintf(t,r)},striptags:function(t){if(void 0!==t&&null!==t)return e.lib.strip_tags(t)},escape:function(t,r){if(void 0!==t&&null!==t){var n="html";if(r&&r.length&&r[0]!==!0&&(n=r[0]),"html"==n){var o=t.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");return e.Markup(o,"html")}if("js"==n){for(var o=t.toString(),i="",s=0;s<o.length;s++)if(o[s].match(/^[a-zA-Z0-9,\._]$/))i+=o[s];else{var a=o.charCodeAt(s);i+=a<128?"\\x"+a.toString(16).toUpperCase():e.lib.sprintf("\\u%04s",a.toString(16).toUpperCase())}return e.Markup(i,"js")}if("css"==n){for(var o=t.toString(),i="",s=0;s<o.length;s++)if(o[s].match(/^[a-zA-Z0-9]$/))i+=o[s];else{var a=o.charCodeAt(s);i+="\\"+a.toString(16).toUpperCase()+" "}return e.Markup(i,"css")}if("url"==n){var i=e.filters.url_encode(t);return e.Markup(i,"url")}if("html_attr"==n){for(var o=t.toString(),i="",s=0;s<o.length;s++)if(o[s].match(/^[a-zA-Z0-9,\.\-_]$/))i+=o[s];else if(o[s].match(/^[&<>"]$/))i+=o[s].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");else{var a=o.charCodeAt(s);i+=a<=31&&9!=a&&10!=a&&13!=a?"&#xFFFD;":a<128?e.lib.sprintf("&#x%02s;",a.toString(16).toUpperCase()):e.lib.sprintf("&#x%04s;",a.toString(16).toUpperCase())}return e.Markup(i,"html_attr")}throw new e.Error("escape strategy unsupported")}},e:function(t,r){return e.filters.escape(t,r)},nl2br:function(t){if(void 0!==t&&null!==t){var r="BACKSLASH_n_replace",n="<br />"+r;return t=e.filters.escape(t).replace(/\r\n/g,n).replace(/\r/g,n).replace(/\n/g,n),t=e.lib.replaceAll(t,r,"\n"),e.Markup(t)}},number_format:function(e,t){var r=e,n=t&&t[0]?t[0]:void 0,o=t&&void 0!==t[1]?t[1]:".",i=t&&void 0!==t[2]?t[2]:",";r=(r+"").replace(/[^0-9+\-Ee.]/g,"");var s=isFinite(+r)?+r:0,a=isFinite(+n)?Math.abs(n):0,p="",c=function(e,t){var r=Math.pow(10,t);return""+Math.round(e*r)/r};return p=(a?c(s,a):""+Math.round(s)).split("."),p[0].length>3&&(p[0]=p[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(p[1]||"").length<a&&(p[1]=p[1]||"",p[1]+=new Array(a-p[1].length+1).join("0")),p.join(o)},trim:function(e,t){if(void 0!==e&&null!==e){var r,n=""+e;r=t&&t[0]?""+t[0]:" \n\r\t\f\v            ​\u2028\u2029　";for(var o=0;o<n.length;o++)if(r.indexOf(n.charAt(o))===-1){n=n.substring(o);break}for(o=n.length-1;o>=0;o--)if(r.indexOf(n.charAt(o))===-1){n=n.substring(0,o+1);break}return r.indexOf(n.charAt(0))===-1?n:""}},truncate:function(e,t){var r=30,n=!1,o="...";if(e+="",t&&(t[0]&&(r=t[0]),t[1]&&(n=t[1]),t[2]&&(o=t[2])),e.length>r){if(n&&(r=e.indexOf(" ",r),r===-1))return e;e=e.substr(0,r)+o}return e},slice:function(t,r){if(void 0!==t&&null!==t){if(void 0===r||r.length<1)throw new e.Error("slice filter expects at least 1 argument");var n=r[0]||0,o=r.length>1?r[1]:t.length,i=n>=0?n:Math.max(t.length+n,0);if(e.lib.is("Array",t)){for(var s=[],a=i;a<i+o&&a<t.length;a++)s.push(t[a]);return s}if(e.lib.is("String",t))return t.substr(i,o);throw new e.Error("slice filter expects value to be an array or string")}},abs:function(e){if(void 0!==e&&null!==e)return Math.abs(e)},first:function(e){if(t("Array",e))return e[0];if(t("Object",e)){if("_keys"in e)return e[e._keys[0]]}else if("string"==typeof e)return e.substr(0,1)},split:function(t,r){if(void 0!==t&&null!==t){if(void 0===r||r.length<1||r.length>2)throw new e.Error("split filter expects 1 or 2 argument");if(e.lib.is("String",t)){var n=r[0],o=r[1],i=t.split(n);if(void 0===o)return i;if(o<0)return t.split(n,i.length+o);var s=[];if(""==n)for(;i.length>0;){for(var a="",p=0;p<o&&i.length>0;p++)a+=i.shift();s.push(a)}else{for(var p=0;p<o-1&&i.length>0;p++)s.push(i.shift());i.length>0&&s.push(i.join(n))}return s}throw new e.Error("split filter expects value to be a string")}},last:function(t){if(e.lib.is("Object",t)){var r;return r=void 0===t._keys?Object.keys(t):t._keys,t[r[r.length-1]]}return t[t.length-1]},raw:function(t){return e.Markup(t)},batch:function(t,r){var n,o,i,s=r.shift(),a=r.shift();if(!e.lib.is("Array",t))throw new e.Error("batch filter expects items to be an array");if(!e.lib.is("Number",s))throw new e.Error("batch filter expects size to be a number");if(s=Math.ceil(s),n=e.lib.chunkArray(t,s),a&&t.length%s!=0){for(o=n.pop(),i=s-o.length;i--;)o.push(a);n.push(o)}return n},round:function(t,r){r=r||[];var n=r.length>0?r[0]:0,o=r.length>1?r[1]:"common";if(t=parseFloat(t),n&&!e.lib.is("Number",n))throw new e.Error("round filter expects precision to be a number");if("common"===o)return e.lib.round(t,n);if(!e.lib.is("Function",Math[o]))throw new e.Error("round filter expects method to be 'floor', 'ceil', or 'common'");return Math[o](t*Math.pow(10,n))/Math.pow(10,n)}},e.filter=function(t,r,n){if(!e.filters[t])throw"Unable to find filter "+t;return e.filters[t].call(this,r,n)},e.filter.extend=function(t,r){e.filters[t]=r},e}},function(e,t){e.exports=function(t){var r='Template "{name}" is not defined.';return t.functions={range:function(e,t,r){var n,o,i,s=[],a=r||1,p=!1;if(isNaN(e)||isNaN(t)?isNaN(e)&&isNaN(t)?(p=!0,n=e.charCodeAt(0),o=t.charCodeAt(0)):(n=isNaN(e)?0:e,o=isNaN(t)?0:t):(n=parseInt(e,10),o=parseInt(t,10)),i=!(n>o))for(;n<=o;)s.push(p?String.fromCharCode(n):n),n+=a;else for(;n>=o;)s.push(p?String.fromCharCode(n):n),n-=a;return s},cycle:function(e,t){var r=t%e.length;return e[r]},dump:function(){var e=arguments.length;for(args=new Array(e);e-- >0;)args[e]=arguments[e];var r="\n",n="  ",o=0,i="",s=function(e){for(var t="";e>0;)e--,t+=n;return t},a=function(e){i+=s(o),"object"==typeof e?p(e):"function"==typeof e?i+="function()"+r:"string"==typeof e?i+="string("+e.length+') "'+e+'"'+r:"number"==typeof e?i+="number("+e+")"+r:"boolean"==typeof e&&(i+="bool("+e+")"+r)},p=function(e){var t;if(null===e)i+="NULL"+r;else if(void 0===e)i+="undefined"+r;else if("object"==typeof e){i+=s(o)+typeof e,o++,i+="("+function(e){var t,r=0;for(t in e)e.hasOwnProperty(t)&&r++;return r}(e)+") {"+r;for(t in e)i+=s(o)+"["+t+"]=> "+r,a(e[t]);o--,i+=s(o)+"}"+r}else a(e)};return 0==args.length&&args.push(this.context),t.forEach(args,function(e){p(e)}),i},date:function(e,r){var n;if(void 0===e||null===e||""===e)n=new Date;else if(t.lib.is("Date",e))n=e;else if(t.lib.is("String",e))n=e.match(/^[0-9]+$/)?new Date(1e3*e):new Date(1e3*t.lib.strtotime(e));else{if(!t.lib.is("Number",e))throw new t.Error("Unable to parse date "+e);n=new Date(1e3*e)}return n},block:function(e){return this.originalBlockTokens[e]?t.logic.parse.call(this,this.originalBlockTokens[e],this.context).output:this.blocks[e]},parent:function(){return t.placeholders.parent},attribute:function(e,r,n){return t.lib.is("Object",e)&&e.hasOwnProperty(r)?"function"==typeof e[r]?e[r].apply(void 0,n):e[r]:e[r]||void 0},max:function(e){return t.lib.is("Object",e)?(delete e._keys,t.lib.max(e)):t.lib.max.apply(null,arguments)},min:function(e){return t.lib.is("Object",e)?(delete e._keys,t.lib.min(e)):t.lib.min.apply(null,arguments)},template_from_string:function(e){return void 0===e&&(e=""),t.Templates.parsers.twig({options:this.options,data:e})},random:function(e){function r(e){var t=Math.floor(Math.random()*n),r=Math.min.call(null,0,e),o=Math.max.call(null,0,e);return r+Math.floor((o-r+1)*t/n)}var n=2147483648;if(t.lib.is("Number",e))return r(e);if(t.lib.is("String",e))return e.charAt(r(e.length-1));if(t.lib.is("Array",e))return e[r(e.length-1)];if(t.lib.is("Object",e)){var o=Object.keys(e);return e[o[r(o.length-1)]]}return r(n-1)},source:function(n,o){var i,s,a,p=!1,c="undefined"!=typeof e&&"undefined"!=typeof e.exports&&"undefined"==typeof window;c?(s="fs",a=__dirname+"/"+n):(s="ajax",a=n);var l={id:n,path:a,method:s,parser:"source",async:!1,fetchTemplateSource:!0};"undefined"==typeof o&&(o=!1);try{i=t.Templates.loadRemote(n,l),"undefined"==typeof i||null===i?i="":p=!0}catch(e){t.log.debug("Twig.functions.source: ","Problem loading template  ",e)}return p||o?i:r.replace("{name}",n)}},t._function=function(e,r,n){if(!t.functions[e])throw"Unable to find function "+e;return t.functions[e](r,n)},t._function.extend=function(e,r){t.functions[e]=r},t}},function(e,t,r){e.exports=function(e){e.lib={},e.lib.sprintf=r(8),e.lib.vsprintf=r(9),e.lib.round=r(10),e.lib.max=r(11),e.lib.min=r(12),e.lib.strip_tags=r(13),e.lib.strtotime=r(14),e.lib.date=r(15),e.lib.boolval=r(16);var t=Object.prototype.toString;return e.lib.is=function(e,r){return"undefined"!=typeof r&&null!==r&&("Array"===e&&Array.isArray?Array.isArray(r):t.call(r).slice(8,-1)===e)},e.lib.isArray=Array.isArray||function(e){return"Array"===t.call(e).slice(8,-1)},e.lib.isIterable=function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},e.lib.copy=function(e){var t,r={};for(t in e)r[t]=e[t];return r},e.lib.extend=function(e,t){var r,n=Object.keys(t);for(r=n.length;r--;)e[n[r]]=t[n[r]];return e},e.lib.replaceAll=function(e,t,r){return e.split(t).join(r)},e.lib.chunkArray=function(t,r){var n=[],o=0,i=t.length;if(r<1||!e.lib.is("Array",t))return[];for(;o<i;)n.push(t.slice(o,o+=r));return n},e}},function(e,t){"use strict";e.exports=function(){var e=/%%|%(\d+\$)?([-+'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,t=arguments,r=0,n=t[r++],o=function(e,t,r,n){r||(r=" ");var o=e.length>=t?"":new Array(1+t-e.length>>>0).join(r);return n?e+o:o+e},i=function(e,t,r,n,i,s){var a=n-e.length;return a>0&&(e=r||!i?o(e,n,s,r):[e.slice(0,t.length),o("",a,"0",!0),e.slice(t.length)].join("")),e},s=function(e,t,r,n,s,a,p){var c=e>>>0;return r=r&&c&&{2:"0b",8:"0",16:"0x"}[t]||"",e=r+o(c.toString(t),a||0,"0",!1),i(e,r,n,s,p)},a=function(e,t,r,n,o,s){return null!==n&&void 0!==n&&(e=e.slice(0,n)),i(e,"",t,r,o,s)},p=function(e,n,p,c,l,u){var f,h,y,d,g;if("%%"===e)return"%";var m,x=!1,v="",b=!1,w=!1,k=" ",_=p.length;for(m=0;m<_;m++)switch(p.charAt(m)){case" ":v=" ";break;case"+":v="+";break;case"-":x=!0;break;case"'":k=p.charAt(m+1);break;case"0":b=!0,k="0";break;case"#":w=!0}if(c=c?"*"===c?+t[r++]:"*"===c.charAt(0)?+t[c.slice(1,-1)]:+c:0,c<0&&(c=-c,x=!0),!isFinite(c))throw new Error("sprintf: (minimum-)width must be finite");switch(l=l?"*"===l?+t[r++]:"*"===l.charAt(0)?+t[l.slice(1,-1)]:+l:"fFeE".indexOf(u)>-1?6:"d"===u?0:void 0,g=n?t[n.slice(0,-1)]:t[r++],u){case"s":return a(g+"",x,c,l,b,k);case"c":return a(String.fromCharCode(+g),x,c,l,b);case"b":return s(g,2,w,x,c,l,b);case"o":return s(g,8,w,x,c,l,b);case"x":return s(g,16,w,x,c,l,b);case"X":return s(g,16,w,x,c,l,b).toUpperCase();case"u":return s(g,10,w,x,c,l,b);case"i":case"d":return f=+g||0,f=Math.round(f-f%1),h=f<0?"-":v,g=h+o(String(Math.abs(f)),l,"0",!1),i(g,h,x,c,b);case"e":case"E":case"f":case"F":case"g":case"G":return f=+g,h=f<0?"-":v,y=["toExponential","toFixed","toPrecision"]["efg".indexOf(u.toLowerCase())],d=["toString","toUpperCase"]["eEfFgG".indexOf(u)%2],g=h+Math.abs(f)[y](l),i(g,h,x,c,b)[d]();default:return e}};return n.replace(e,p)}},function(e,t,r){"use strict";e.exports=function(e,t){var n=r(8);return n.apply(this,[e].concat(t))}},function(e,t){"use strict";e.exports=function(e,t,r){var n,o,i,s;if(t|=0,n=Math.pow(10,t),e*=n,s=e>0|-(e<0),i=e%1===.5*s,o=Math.floor(e),i)switch(r){case"PHP_ROUND_HALF_DOWN":e=o+(s<0);break;case"PHP_ROUND_HALF_EVEN":e=o+o%2*s;break;case"PHP_ROUND_HALF_ODD":e=o+!(o%2);break;default:e=o+(s>0)}return(i?e:Math.round(e))/n}},function(e,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(){var e,t,n=0,o=0,i=arguments,s=i.length,a=function(e){if("[object Array]"===Object.prototype.toString.call(e))return e;var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t},p=function e(t,n){var o=0,i=0,s=0,p=0,c=0;if(t===n)return 0;if("object"===("undefined"==typeof t?"undefined":r(t))){if("object"===("undefined"==typeof n?"undefined":r(n))){if(t=a(t),n=a(n),c=t.length,p=n.length,p>c)return 1;if(p<c)return-1;for(o=0,i=c;o<i;++o){if(s=e(t[o],n[o]),1===s)return 1;if(s===-1)return-1}return 0}return-1}return"object"===("undefined"==typeof n?"undefined":r(n))?1:isNaN(n)&&!isNaN(t)?0===t?0:t<0?1:-1:isNaN(t)&&!isNaN(n)?0===n?0:n>0?1:-1:n===t?0:n>t?1:-1};if(0===s)throw new Error("At least one value should be passed to max()");if(1===s){if("object"!==r(i[0]))throw new Error("Wrong parameter count for max()");if(e=a(i[0]),0===e.length)throw new Error("Array must contain at least one element for max()")}else e=i;for(t=e[0],n=1,o=e.length;n<o;++n)1===p(t,e[n])&&(t=e[n]);return t}},function(e,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(){var e,t,n=0,o=0,i=arguments,s=i.length,a=function(e){if("[object Array]"===Object.prototype.toString.call(e))return e;var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t},p=function e(t,n){var o=0,i=0,s=0,p=0,c=0;if(t===n)return 0;if("object"===("undefined"==typeof t?"undefined":r(t))){if("object"===("undefined"==typeof n?"undefined":r(n))){if(t=a(t),n=a(n),c=t.length,p=n.length,p>c)return 1;if(p<c)return-1;for(o=0,i=c;o<i;++o){if(s=e(t[o],n[o]),1===s)return 1;if(s===-1)return-1}return 0}return-1}return"object"===("undefined"==typeof n?"undefined":r(n))?1:isNaN(n)&&!isNaN(t)?0===t?0:t<0?1:-1:isNaN(t)&&!isNaN(n)?0===n?0:n>0?1:-1:n===t?0:n>t?1:-1};if(0===s)throw new Error("At least one value should be passed to min()");if(1===s){if("object"!==r(i[0]))throw new Error("Wrong parameter count for min()");if(e=a(i[0]),0===e.length)throw new Error("Array must contain at least one element for min()")}else e=i;for(t=e[0],n=1,o=e.length;n<o;++n)p(t,e[n])===-1&&(t=e[n]);return t}},function(e,t){"use strict";e.exports=function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var r=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,n=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return e.replace(n,"").replace(r,function(e,r){return t.indexOf("<"+r.toLowerCase()+">")>-1?e:""})}},function(e,t){"use strict";e.exports=function(e,t){function r(e,t,r){var n,o=c[t];"undefined"!=typeof o&&(n=o-p.getDay(),0===n?n=7*r:n>0&&"last"===e?n-=7:n<0&&"next"===e&&(n+=7),p.setDate(p.getDate()+n))}function n(e){var t=e.split(" "),n=t[0],o=t[1].substring(0,3),i=/\d+/.test(n),s="ago"===t[2],a=("last"===n?-1:1)*(s?-1:1);if(i&&(a*=parseInt(n,10)),l.hasOwnProperty(o)&&!t[1].match(/^mon(day|\.)?$/i))return p["set"+l[o]](p["get"+l[o]]()+a);if("wee"===o)return p.setDate(p.getDate()+7*a);if("next"===n||"last"===n)r(n,o,a);else if(!i)return!1;return!0}var o,i,s,a,p,c,l,u,f,h,y,d=!1;if(!e)return d;e=e.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();var g=new RegExp(["^(\\d{1,4})","([\\-\\.\\/:])","(\\d{1,2})","([\\-\\.\\/:])","(\\d{1,4})","(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?","(?:\\s([A-Z]+)?)?$"].join(""));if(i=e.match(g),i&&i[2]===i[4])if(i[1]>1901)switch(i[2]){case"-":return i[3]>12||i[5]>31?d:new Date(i[1],parseInt(i[3],10)-1,i[5],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3;case".":return d;case"/":return i[3]>12||i[5]>31?d:new Date(i[1],parseInt(i[3],10)-1,i[5],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3}else if(i[5]>1901)switch(i[2]){case"-":return i[3]>12||i[1]>31?d:new Date(i[5],parseInt(i[3],10)-1,i[1],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3;case".":return i[3]>12||i[1]>31?d:new Date(i[5],parseInt(i[3],10)-1,i[1],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3;case"/":return i[1]>12||i[3]>31?d:new Date(i[5],parseInt(i[1],10)-1,i[3],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3}else switch(i[2]){case"-":return i[3]>12||i[5]>31||i[1]<70&&i[1]>38?d:(a=i[1]>=0&&i[1]<=38?+i[1]+2e3:i[1],new Date(a,parseInt(i[3],10)-1,i[5],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3);case".":return i[5]>=70?i[3]>12||i[1]>31?d:new Date(i[5],parseInt(i[3],10)-1,i[1],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3:i[5]<60&&!i[6]?i[1]>23||i[3]>59?d:(s=new Date,new Date(s.getFullYear(),s.getMonth(),s.getDate(),i[1]||0,i[3]||0,i[5]||0,i[9]||0)/1e3):d;case"/":return i[1]>12||i[3]>31||i[5]<70&&i[5]>38?d:(a=i[5]>=0&&i[5]<=38?+i[5]+2e3:i[5],new Date(a,parseInt(i[1],10)-1,i[3],i[6]||0,i[7]||0,i[8]||0,i[9]||0)/1e3);case":":return i[1]>23||i[3]>59||i[5]>59?d:(s=new Date,new Date(s.getFullYear(),s.getMonth(),s.getDate(),i[1]||0,i[3]||0,i[5]||0)/1e3)}if("now"===e)return null===t||isNaN(t)?(new Date).getTime()/1e3|0:0|t;if(!isNaN(o=Date.parse(e)))return o/1e3|0;if(g=new RegExp(["^([0-9]{4}-[0-9]{2}-[0-9]{2})","[ t]","([0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?)","([\\+-][0-9]{2}(:[0-9]{2})?|z)"].join("")),i=e.match(g),i&&("z"===i[4]?i[4]="Z":i[4].match(/^([+-][0-9]{2})$/)&&(i[4]=i[4]+":00"),!isNaN(o=Date.parse(i[1]+"T"+i[2]+i[4]))))return o/1e3|0;if(p=t?new Date(1e3*t):new Date,c={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},l={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"},f="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)",h="([+-]?\\d+\\s"+f+"|(last|next)\\s"+f+")(\\sago)?",i=e.match(new RegExp(h,"gi")),!i)return d;for(y=0,u=i.length;y<u;y++)if(!n(i[y]))return d;return p.getTime()/1e3}},function(e,t){"use strict";e.exports=function(e,t){var r,n,o=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],i=/\\?(.?)/gi,s=function(e,t){return n[e]?n[e]():t},a=function(e,t){for(e=String(e);e.length<t;)e="0"+e;return e};n={d:function(){return a(n.j(),2)},D:function(){return n.l().slice(0,3)},j:function(){return r.getDate()},l:function(){return o[n.w()]+"day"},N:function(){return n.w()||7},S:function(){var e=n.j(),t=e%10;return t<=3&&1===parseInt(e%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:function(){return r.getDay()},z:function(){var e=new Date(n.Y(),n.n()-1,n.j()),t=new Date(n.Y(),0,1);return Math.round((e-t)/864e5)},W:function(){var e=new Date(n.Y(),n.n()-1,n.j()-n.N()+3),t=new Date(e.getFullYear(),0,4);return a(1+Math.round((e-t)/864e5/7),2)},F:function(){return o[6+n.n()]},m:function(){return a(n.n(),2)},M:function(){return n.F().slice(0,3)},n:function(){return r.getMonth()+1},t:function(){return new Date(n.Y(),n.n(),0).getDate()},L:function(){var e=n.Y();return e%4===0&e%100!==0|e%400===0},o:function(){var e=n.n(),t=n.W(),r=n.Y();return r+(12===e&&t<9?1:1===e&&t>9?-1:0)},Y:function(){return r.getFullYear()},y:function(){return n.Y().toString().slice(-2)},a:function(){return r.getHours()>11?"pm":"am"},A:function(){return n.a().toUpperCase()},B:function(){var e=3600*r.getUTCHours(),t=60*r.getUTCMinutes(),n=r.getUTCSeconds();return a(Math.floor((e+t+n+3600)/86.4)%1e3,3)},g:function(){return n.G()%12||12},G:function(){return r.getHours()},h:function(){return a(n.g(),2)},H:function(){return a(n.G(),2)},i:function(){return a(r.getMinutes(),2)},s:function(){return a(r.getSeconds(),2)},u:function(){return a(1e3*r.getMilliseconds(),6)},e:function(){var e="Not supported (see source code of date() for timezone on how to add support)";throw new Error(e)},I:function(){var e=new Date(n.Y(),0),t=Date.UTC(n.Y(),0),r=new Date(n.Y(),6),o=Date.UTC(n.Y(),6);return e-t!==r-o?1:0},O:function(){var e=r.getTimezoneOffset(),t=Math.abs(e);return(e>0?"-":"+")+a(100*Math.floor(t/60)+t%60,4)},P:function(){var e=n.O();return e.substr(0,3)+":"+e.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-r.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(i,s)},r:function(){return"D, d M Y H:i:s O".replace(i,s)},U:function(){return r/1e3|0}};var p=function(e,t){return r=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),e.replace(i,s)};return p(e,t)}},function(e,t){"use strict";e.exports=function(e){return e!==!1&&(0!==e&&0!==e&&(""!==e&&"0"!==e&&((!Array.isArray(e)||0!==e.length)&&(null!==e&&void 0!==e))))}},function(e,t){e.exports=function(e){"use strict";e.Templates.registerLoader("ajax",function(t,r,n,o){var i,s,a=r.precompiled,p=this.parsers[r.parser]||this.parser.twig;if("undefined"==typeof XMLHttpRequest)throw new e.Error('Unsupported platform: Unable to do ajax requests because there is no "XMLHTTPRequest" implementation');return s=new XMLHttpRequest,s.onreadystatechange=function(){var c=null;4===s.readyState&&(200===s.status||window.cordova&&0==s.status?(e.log.debug("Got template ",s.responseText),c=a===!0?JSON.parse(s.responseText):s.responseText,r.url=t,r.data=c,i=p.call(this,r),"function"==typeof n&&n(i)):"function"==typeof o&&o(s))},s.open("GET",t,!!r.async),s.send(),!!r.async||i})}},function(e,t,r){e.exports=function(e){"use strict";var t,n;try{t=r(19),n=r(20)}catch(e){}e.Templates.registerLoader("fs",function(r,o,i,s){var a,p=null,c=o.precompiled,l=this.parsers[o.parser]||this.parser.twig;if(!t||!n)throw new e.Error('Unsupported platform: Unable to load from file because there is no "fs" or "path" implementation');var u=function(e,t){return e?void("function"==typeof s&&s(e)):(c===!0&&(t=JSON.parse(t)),o.data=t,o.path=o.path||r,a=l.call(this,o),void("function"==typeof i&&i(a)))};if(o.path=o.path||r,o.async)return t.stat(o.path,function(r,n){return r||!n.isFile()?void("function"==typeof s&&s(new e.Error("Unable to find template file "+o.path))):void t.readFile(o.path,"utf8",u)}),!0;try{if(!t.statSync(o.path).isFile())throw new e.Error("Unable to find template file "+o.path)}catch(t){throw new e.Error("Unable to find template file "+o.path)}return p=t.readFileSync(o.path,"utf8"),u(void 0,p),a})}},function(e,t){},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,o="/"===s.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===s(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),s=Math.min(o.length,i.length),a=s,p=0;p<s;p++)if(o[p]!==i[p]){a=p;break}for(var c=[],p=a;p<o.length;p++)c.push("..");return c=c.concat(i.slice(a)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=i(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(t,r(21))},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(u===clearTimeout)return clearTimeout(e);if((u===n||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function s(){d&&h&&(d=!1,h.length?y=h.concat(y):g=-1,y.length&&a())}function a(){if(!d){var e=o(s);d=!0;for(var t=y.length;t;){for(h=y,y=[];++g<t;)h&&h[g].run();g=-1,t=y.length}h=null,d=!1,i(e)}}function p(e,t){this.fun=e,this.array=t}function c(){}var l,u,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{u="function"==typeof clearTimeout?clearTimeout:n}catch(e){u=n}}();var h,y=[],d=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];y.push(new p(e,t)),1!==y.length||d||o(a)},p.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t){e.exports=function(e){"use strict";for(e.logic={},e.logic.type={if_:"Twig.logic.type.if",endif:"Twig.logic.type.endif",for_:"Twig.logic.type.for",endfor:"Twig.logic.type.endfor",
else_:"Twig.logic.type.else",elseif:"Twig.logic.type.elseif",set:"Twig.logic.type.set",setcapture:"Twig.logic.type.setcapture",endset:"Twig.logic.type.endset",filter:"Twig.logic.type.filter",endfilter:"Twig.logic.type.endfilter",shortblock:"Twig.logic.type.shortblock",block:"Twig.logic.type.block",endblock:"Twig.logic.type.endblock",extends_:"Twig.logic.type.extends",use:"Twig.logic.type.use",include:"Twig.logic.type.include",spaceless:"Twig.logic.type.spaceless",endspaceless:"Twig.logic.type.endspaceless",macro:"Twig.logic.type.macro",endmacro:"Twig.logic.type.endmacro",import_:"Twig.logic.type.import",from:"Twig.logic.type.from",embed:"Twig.logic.type.embed",endembed:"Twig.logic.type.endembed"},e.logic.definitions=[{type:e.logic.type.if_,regex:/^if\s+([\s\S]+)$/,next:[e.logic.type.else_,e.logic.type.elseif,e.logic.type.endif],open:!0,compile:function(t){var r=t.match[1];return t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,delete t.match,t},parse:function(t,r,n){var o=this;return e.expression.parseAsync.call(this,t.stack,r).then(function(i){return n=!0,e.lib.boolval(i)?(n=!1,e.parseAsync.call(o,t.output,r)):""}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.elseif,regex:/^elseif\s+([^\s].*)$/,next:[e.logic.type.else_,e.logic.type.elseif,e.logic.type.endif],open:!1,compile:function(t){var r=t.match[1];return t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,delete t.match,t},parse:function(t,r,n){var o=this;return e.expression.parseAsync.call(this,t.stack,r).then(function(i){return n&&e.lib.boolval(i)?(n=!1,e.parseAsync.call(o,t.output,r)):""}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.else_,regex:/^else$/,next:[e.logic.type.endif,e.logic.type.endfor],open:!1,parse:function(t,r,n){var o=e.Promise.resolve("");return n&&(o=e.parseAsync.call(this,t.output,r)),o.then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.endif,regex:/^endif$/,next:[],open:!1},{type:e.logic.type.for_,regex:/^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,next:[e.logic.type.else_,e.logic.type.endfor],open:!0,compile:function(t){var r=t.match[1],n=t.match[2],o=t.match[3],i=null;if(t.key_var=null,t.value_var=null,r.indexOf(",")>=0){if(i=r.split(","),2!==i.length)throw new e.Error("Invalid expression in for loop: "+r);t.key_var=i[0].trim(),t.value_var=i[1].trim()}else t.value_var=r;return t.expression=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack,o&&(t.conditional=e.expression.compile.call(this,{type:e.expression.type.expression,value:o}).stack),delete t.match,t},parse:function(t,r,n){var o,i,s=[],a=0,p=this,c=t.conditional,l=function(e,t){var n=void 0!==c;return{index:e+1,index0:e,revindex:n?void 0:t-e,revindex0:n?void 0:t-e-1,first:0===e,last:n?void 0:e===t-1,length:n?void 0:t,parent:r}},u=function(n,i){var u=e.ChildContext(r);u[t.value_var]=i,t.key_var&&(u[t.key_var]=n),u.loop=l(a,o);var f=void 0===c?e.Promise.resolve(!0):e.expression.parseAsync.call(p,c,u);f.then(function(r){if(r)return e.parseAsync.call(p,t.output,u).then(function(e){s.push(e),a+=1})}).then(function(){delete u.loop,delete u[t.value_var],delete u[t.key_var],e.merge(r,u,!0)})};return e.expression.parseAsync.call(this,t.expression,r).then(function(t){return e.lib.isArray(t)?(o=t.length,e.async.forEach(t,function(e){var t=a;return u(t,e)})):e.lib.isIterable(t)?(t=Array.from(t),o=t.length,e.async.forEach(t,function(e){var t=a;return u(t,e)})):e.lib.is("Object",t)&&(i=void 0!==t._keys?t._keys:Object.keys(t),o=i.length,e.forEach(i,function(e){"_keys"!==e&&u(e,t[e])})),n=0===s.length,{chain:n,output:e.output.call(p,s)}})}},{type:e.logic.type.endfor,regex:/^endfor$/,next:[],open:!1},{type:e.logic.type.set,regex:/^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim(),n=t.match[2],o=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack;return t.key=r,t.expression=o,delete t.match,t},parse:function(t,r,n){var o=t.key;return e.expression.parseAsync.call(this,t.expression,r).then(function(t){return t===r&&(t=e.lib.copy(t)),r[o]=t,{chain:n,context:r}})}},{type:e.logic.type.setcapture,regex:/^set\s+([a-zA-Z0-9_,\s]+)$/,next:[e.logic.type.endset],open:!0,compile:function(e){var t=e.match[1].trim();return e.key=t,delete e.match,e},parse:function(t,r,n){var o=this,i=t.key;return e.parseAsync.call(this,t.output,r).then(function(e){return o.context[i]=e,r[i]=e,{chain:n,context:r}})}},{type:e.logic.type.endset,regex:/^endset$/,next:[],open:!1},{type:e.logic.type.filter,regex:/^filter\s+(.+)$/,next:[e.logic.type.endfilter],open:!0,compile:function(t){var r="|"+t.match[1].trim();return t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,delete t.match,t},parse:function(t,r,n){return e.parseAsync.call(this,t.output,r).then(function(n){var o=[{type:e.expression.type.string,value:n}].concat(t.stack);return e.expression.parseAsync.call(that,o,r)}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.endfilter,regex:/^endfilter$/,next:[],open:!1},{type:e.logic.type.block,regex:/^block\s+([a-zA-Z0-9_]+)$/,next:[e.logic.type.endblock],open:!0,compile:function(e){return e.block=e.match[1].trim(),delete e.match,e},parse:function(t,r,n){var o,i=this,s=e.Promise.resolve(),a=e.indexOf(this.importedBlocks,t.block)>-1,p=this.blocks[t.block]&&e.indexOf(this.blocks[t.block],e.placeholders.parent)>-1;return(void 0===this.blocks[t.block]||a||p||r.loop||t.overwrite)&&(s=t.expression?e.expression.parseAsync.call(this,t.output,r).then(function(t){return e.expression.parseAsync.call(i,{type:e.expression.type.string,value:t},r)}):e.parseAsync.call(this,t.output,r).then(function(t){return e.expression.parseAsync.call(i,{type:e.expression.type.string,value:t},r)}),s=s.then(function(r){a&&i.importedBlocks.splice(i.importedBlocks.indexOf(t.block),1),p?i.blocks[t.block]=e.Markup(i.blocks[t.block].replace(e.placeholders.parent,r)):i.blocks[t.block]=r,i.originalBlockTokens[t.block]={type:t.type,block:t.block,output:t.output,overwrite:!0}})),s.then(function(){return o=i.child.blocks[t.block]?i.child.blocks[t.block]:i.blocks[t.block],{chain:n,output:o}})}},{type:e.logic.type.shortblock,regex:/^block\s+([a-zA-Z0-9_]+)\s+(.+)$/,next:[],open:!0,compile:function(t){return t.expression=t.match[2].trim(),t.output=e.expression.compile({type:e.expression.type.expression,value:t.expression}).stack,t.block=t.match[1].trim(),delete t.match,t},parse:function(t,r,n){for(var o=new Array(arguments.length),i=arguments.length;i-- >0;)o[i]=arguments[i];return e.logic.handler[e.logic.type.block].parse.apply(this,o)}},{type:e.logic.type.endblock,regex:/^endblock(?:\s+([a-zA-Z0-9_]+))?$/,next:[],open:!1},{type:e.logic.type.extends_,regex:/^extends\s+(.+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim();return delete t.match,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o,i=this,s=e.ChildContext(r);return e.expression.parseAsync.call(this,t.stack,r).then(function(t){return i.extend=t,o=t instanceof e.Template?t:i.importFile(t),o.renderAsync(s)}).then(function(){return e.lib.extend(r,s),{chain:n,output:""}})}},{type:e.logic.type.use,regex:/^use\s+(.+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim();return delete t.match,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this;return e.expression.parseAsync.call(this,t.stack,r).then(function(e){return o.importBlocks(e),{chain:n,output:""}})}},{type:e.logic.type.include,regex:/^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,next:[],open:!0,compile:function(t){var r=t.match,n=r[1].trim(),o=void 0!==r[2],i=r[3],s=void 0!==r[4]&&r[4].length;return delete t.match,t.only=s,t.ignoreMissing=o,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack,void 0!==i&&(t.withStack=e.expression.compile.call(this,{type:e.expression.type.expression,value:i.trim()}).stack),t},parse:function(t,r,n){var o,i,s={},a=this,p=e.Promise.resolve();return t.only||(s=e.ChildContext(r)),void 0!==t.withStack&&(p=e.expression.parseAsync.call(this,t.withStack,r).then(function(e){for(o in e)e.hasOwnProperty(o)&&(s[o]=e[o])})),p.then(function(){return e.expression.parseAsync.call(a,t.stack,r)}).then(function(r){if(r instanceof e.Template)i=r;else try{i=a.importFile(r)}catch(e){if(t.ignoreMissing)return"";throw e}return i.renderAsync(s)}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.spaceless,regex:/^spaceless$/,next:[e.logic.type.endspaceless],open:!0,parse:function(t,r,n){return e.parseAsync.call(this,t.output,r).then(function(t){var r=/>\s+</g,o=t.replace(r,"><").trim();return o=e.Markup(o),{chain:n,output:o}})}},{type:e.logic.type.endspaceless,regex:/^endspaceless$/,next:[],open:!1},{type:e.logic.type.macro,regex:/^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:,\s*)?)*)\s*\)$/,next:[e.logic.type.endmacro],open:!0,compile:function(t){for(var r=t.match[1],n=t.match[2].split(/[\s,]+/),o=0;o<n.length;o++)for(var i=0;i<n.length;i++)if(n[o]===n[i]&&o!==i)throw new e.Error("Duplicate arguments for parameter: "+n[o]);return t.macroName=r,t.parameters=n,delete t.match,t},parse:function(t,r,n){var o=this;return this.macros[t.macroName]=function(){for(var r={_self:o.macros},n=0;n<t.parameters.length;n++){var i=t.parameters[n];"undefined"!=typeof arguments[n]?r[i]=arguments[n]:r[i]=void 0}return e.parseAsync.call(o,t.output,r)},{chain:n,output:""}}},{type:e.logic.type.endmacro,regex:/^endmacro$/,next:[],open:!1},{type:e.logic.type.import_,regex:/^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim(),n=t.match[2].trim();return delete t.match,t.expression=r,t.contextName=n,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this,i={chain:n,output:""};return"_self"===t.expression?(r[t.contextName]=this.macros,e.Promise.resolve(i)):e.expression.parseAsync.call(this,t.stack,r).then(function(e){return o.importFile(e||t.expression)}).then(function(e){return r[t.contextName]=e.renderAsync({},{output:"macros"}),i})}},{type:e.logic.type.from,regex:/^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,next:[],open:!0,compile:function(t){for(var r=t.match[1].trim(),n=t.match[2].trim().split(/\s*,\s*/),o={},i=0;i<n.length;i++){var s=n[i],a=s.match(/^([a-zA-Z0-9_]+)\s+as\s+([a-zA-Z0-9_]+)$/);a?o[a[1].trim()]=a[2].trim():s.match(/^([a-zA-Z0-9_]+)$/)&&(o[s]=s)}return delete t.match,t.expression=r,t.macroNames=o,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this,i=e.Promise.resolve(this.macros);return"_self"!==t.expression&&(i=e.expression.parseAsync.call(this,t.stack,r).then(function(e){return o.importFile(e||t.expression)}).then(function(e){return e.renderAsync({},{output:"macros"})})),i.then(function(e){for(var o in t.macroNames)e.hasOwnProperty(o)&&(r[t.macroNames[o]]=e[o]);return{chain:n,output:""}})}},{type:e.logic.type.embed,regex:/^embed\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,next:[e.logic.type.endembed],open:!0,compile:function(t){var r=t.match,n=r[1].trim(),o=void 0!==r[2],i=r[3],s=void 0!==r[4]&&r[4].length;return delete t.match,t.only=s,t.ignoreMissing=o,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack,void 0!==i&&(t.withStack=e.expression.compile.call(this,{type:e.expression.type.expression,value:i.trim()}).stack),t},parse:function(t,r,n){var o,i,s={},a=this,p=e.Promise.resolve();if(!t.only)for(o in r)r.hasOwnProperty(o)&&(s[o]=r[o]);return void 0!==t.withStack&&(p=e.expression.parseAsync.call(this,t.withStack,r).then(function(e){for(o in e)e.hasOwnProperty(o)&&(s[o]=e[o])})),p.then(function(){return e.expression.parseAsync.call(a,t.stack,s)}).then(function(r){if(r instanceof e.Template)i=r;else try{i=a.importFile(r)}catch(e){if(t.ignoreMissing)return"";throw e}return a.blocks={},e.parseAsync.call(a,t.output,s).then(function(){return i.renderAsync(s,{blocks:a.blocks})})}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.endembed,regex:/^endembed$/,next:[],open:!1}],e.logic.handler={},e.logic.extendType=function(t,r){r=r||"Twig.logic.type"+t,e.logic.type[t]=r},e.logic.extend=function(t){if(!t.type)throw new e.Error("Unable to extend logic definition. No type provided for "+t);e.logic.extendType(t.type),e.logic.handler[t.type]=t};e.logic.definitions.length>0;)e.logic.extend(e.logic.definitions.shift());return e.logic.compile=function(t){var r=t.value.trim(),n=e.logic.tokenize.call(this,r),o=e.logic.handler[n.type];return o.compile&&(n=o.compile.call(this,n),e.log.trace("Twig.logic.compile: ","Compiled logic token to ",n)),n},e.logic.tokenize=function(t){var r=null,n=null,o=null,i=null,s=null,a=null,p=null;t=t.trim();for(r in e.logic.handler)for(n=e.logic.handler[r].type,o=e.logic.handler[r].regex,i=o,e.lib.isArray(o)||(i=[o]),s=i.length,a=0;a<s;a++)if(p=i[a].exec(t),null!==p)return e.log.trace("Twig.logic.tokenize: ","Matched a ",n," regular expression of ",p),{type:n,match:p};throw new e.Error("Unable to parse '"+t.trim()+"'")},e.logic.parse=function(t,r,n,o){var i,s,a="",p=!0;if(r=r||{},e.log.debug("Twig.logic.parse: ","Parsing logic token ",t),s=e.logic.handler[t.type],s.parse&&(a=s.parse.call(this,t,r,n)),i=e.Promise.resolve(a),o)return i;if(i.then(function(e){p=!1,a=e}),p)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return a},e}},function(e,t){e.exports=function(e){"use strict";e.Templates.registerParser("source",function(e){return e.data||""})}},function(e,t){e.exports=function(e){"use strict";e.Templates.registerParser("twig",function(t){return new e.Template(t)})}},function(e,t,r){e.exports=function(e){"use strict";return e.path={},e.path.parsePath=function(t,r){var n=null,r=r||"";if("object"==typeof t&&"object"==typeof t.options&&(n=t.options.namespaces),"object"==typeof n&&r.indexOf("::")>0||r.indexOf("@")>=0){for(var o in n)n.hasOwnProperty(o)&&(r=r.replace(o+"::",n[o]),r=r.replace("@"+o,n[o]));return r}return e.path.relativePath(t,r)},e.path.relativePath=function(t,n){var o,i,s,a="/",p=[],n=n||"";if(t.url)o="undefined"!=typeof t.base?t.base+("/"===t.base.charAt(t.base.length-1)?"":"/"):t.url;else if(t.path){var c=r(20),l=c.sep||a,u=new RegExp("^\\.{1,2}"+l.replace("\\","\\\\"));n=n.replace(/\//g,l),void 0!==t.base&&null==n.match(u)?(n=n.replace(t.base,""),o=t.base+l):o=c.normalize(t.path),o=o.replace(l+l,l),a=l}else{if(!t.name&&!t.id||!t.method||"fs"===t.method||"ajax"===t.method)throw new e.Error("Cannot extend an inline template.");o=t.base||t.name||t.id}for(i=o.split(a),i.pop(),i=i.concat(n.split(a));i.length>0;)s=i.shift(),"."==s||(".."==s&&p.length>0&&".."!=p[p.length-1]?p.pop():p.push(s));return p.join(a)},e}},function(e,t){e.exports=function(e){"use strict";return e.tests={empty:function(e){if(null===e||void 0===e)return!0;if("number"==typeof e)return!1;if(e.length&&e.length>0)return!1;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},odd:function(e){return e%2===1},even:function(e){return e%2===0},divisibleby:function(e,t){return e%t[0]===0},defined:function(e){return void 0!==e},none:function(e){return null===e},null:function(e){return this.none(e)},"same as":function(e,t){return e===t[0]},sameas:function(t,r){return console.warn("`sameas` is deprecated use `same as`"),e.tests["same as"](t,r)},iterable:function(t){return t&&(e.lib.is("Array",t)||e.lib.is("Object",t))}},e.test=function(t,r,n){if(!e.tests[t])throw"Test "+t+" is not defined.";return e.tests[t](r,n)},e.test.extend=function(t,r){e.tests[t]=r},e}},function(e,t){e.exports=function(e){"use strict";function t(t,r,n){e.attempt(function(){t(r,n)},n)}function r(e,t,r){var n=[t,r,-2];return e?e[2]==-2?e=[e,n]:e.push(n):e=n,e}var n=0,o=1,i=2;return e.parseAsync=function(t,r){return e.parse.call(this,t,r,!0)},e.expression.parseAsync=function(t,r,n){return e.expression.parse.call(this,t,r,n,!0)},e.logic.parseAsync=function(t,r,n){return e.logic.parse.call(this,t,r,n,!0)},e.Template.prototype.renderAsync=function(e,t){return this.render(e,t,!0)},e.async={},e.isPromise=function(e){return e&&e.then&&"function"==typeof e.then},e.Thenable=function(e,t,r){this.then=e,this._value=r?t:null,this._state=r||n},e.Thenable.prototype.catch=function(e){return this.then(null,e)},e.Thenable.resolvedThen=function(t){if("function"!=typeof t)return e.Promise.resolve(this._value);var r=this;return e.attempt(function(){return e.Promise.resolve(t(r._value))},e.Promise.reject)},e.Thenable.rejectedThen=function(t,r){if("function"!=typeof r)return e.Promise.reject(this._value);var n=this;return e.attempt(function(){return e.Promise.resolve(r(n._value))},e.Promise.reject)},e.Promise=function(n){function s(e){e(h._value)}function a(e,t){t(h._value)}function p(e){c(i,e)}function c(t,r){h._state||(h._value=r,h._state=t,f=t==o?s:a,u&&(u[2]===-2&&(f(u[0],u[1]),u=null),e.forEach(u,function(e){f(e[0],e[1])}),u=null))}function l(r){var n=e.isPromise(r),i=o;return n&&!r._state?t(r.then.bind(r),l,p):(n&&r._state&&(i=r._state,r=r._value),void e.attempt(function(){c(i,r)},p))}var u=null,f=function(e,t){u=r(u,e,t)},h=new e.Thenable(function(t,r){var n="function"==typeof t;if(h._state==o&&!n)return e.Promise.resolve(h._value);if(h._state===o)return e.attempt(function(){return e.Promise.resolve(t(h._value))},e.Promise.reject);var i="function"==typeof r;return e.Promise(function(o,s){f(n?function(r){e.attempt(function(){o(t(r))},s)}:o,i?function(t){e.attempt(function(){o(r(t))},s)}:s)})});return t(n,l,p),h},e.Promise.resolve=function(t){return e.isPromise(t)?t:new e.Thenable(e.Thenable.resolvedThen,t,o)},e.Promise.reject=function(t){return new e.Thenable(e.Thenable.rejectedThen,t,i)},e.Promise.all=function(t){var r=new Array(t.length);return e.async.forEach(t,function(t,n){return e.isPromise(t)?t._state==o?void(r[n]=t._value):t.then(function(e){r[n]=e}):void(r[n]=t)}).then(function(){return r})},e.async.forEach=function(t,r){function n(a){var p=null;do{if(s==i)return e.Promise.resolve();p=r(t[s],s),s++}while(!p||!e.isPromise(p)||p._state==o);return p.then(n)}var i=t.length,s=0;return n()},e}},function(e,t){e.exports=function(e){"use strict";return e.exports={VERSION:e.VERSION},e.exports.twig=function(t){var r=t.id,n={strict_variables:t.strict_variables||!1,autoescape:null!=t.autoescape&&t.autoescape||!1,allowInlineIncludes:t.allowInlineIncludes||!1,rethrow:t.rethrow||!1,namespaces:t.namespaces};if(e.cache&&r&&e.validateId(r),void 0!==t.debug&&(e.debug=t.debug),void 0!==t.trace&&(e.trace=t.trace),void 0!==t.data)return e.Templates.parsers.twig({data:t.data,path:t.hasOwnProperty("path")?t.path:void 0,module:t.module,id:r,options:n});if(void 0!==t.ref){if(void 0!==t.id)throw new e.Error("Both ref and id cannot be set on a twig.js template.");return e.Templates.load(t.ref)}if(void 0!==t.method){if(!e.Templates.isRegisteredLoader(t.method))throw new e.Error('Loader for "'+t.method+'" is not defined.');return e.Templates.loadRemote(t.name||t.href||t.path||r||void 0,{id:r,method:t.method,parser:t.parser||"twig",base:t.base,module:t.module,precompiled:t.precompiled,async:t.async,options:n},t.load,t.error)}return void 0!==t.href?e.Templates.loadRemote(t.href,{id:r,method:"ajax",parser:t.parser||"twig",base:t.base,module:t.module,precompiled:t.precompiled,async:t.async,options:n},t.load,t.error):void 0!==t.path?e.Templates.loadRemote(t.path,{id:r,method:"fs",parser:t.parser||"twig",base:t.base,module:t.module,precompiled:t.precompiled,async:t.async,options:n},t.load,t.error):void 0},e.exports.extendFilter=function(t,r){e.filter.extend(t,r)},e.exports.extendFunction=function(t,r){e._function.extend(t,r)},e.exports.extendTest=function(t,r){e.test.extend(t,r)},e.exports.extendTag=function(t){e.logic.extend(t)},e.exports.extend=function(t){t(e)},e.exports.compile=function(t,r){var n,o=r.filename,i=r.filename;return n=new e.Template({data:t,path:i,id:o,options:r.settings["twig options"]}),function(e){return n.render(e)}},e.exports.renderFile=function(t,r,n){"function"==typeof r&&(n=r,r={}),r=r||{};var o=r.settings||{},i={path:t,base:o.views,load:function(e){n(null,""+e.render(r))}},s=o["twig options"];if(s)for(var a in s)s.hasOwnProperty(a)&&(i[a]=s[a]);e.exports.twig(i)},e.exports.__express=e.exports.renderFile,e.exports.cache=function(t){e.cache=t},e.exports.path=e.path,e.exports.filters=e.filters,e}}])});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(1);

module.exports = function(mark){
  class Node {
    constructor(element, ctx, $, escape=0){
      this.element = element;
      this.ctx = ctx;
      this.$ = $;
      this.scope = this;
      this.update();
      this.escape = escape;
      var initializeChild = this.initializeChild;
      // Only compile further if the element is not a string
      // or has the attribute block
      if(this.name != 'string' && !this.info.attributes.block){
        if(mark.functions.escape.includes(this.name)){
          this.children = element.children().map(function(e){
            return initializeChild(e, ctx, $, 1);
          });
        } else {
          this.children = element.children().map(function(e){
            return initializeChild(e, ctx, $, 0);
          });
        }
      } else {
        this.children = [];
        this.info.leaf = true;
      }
    }
    initializeChild(element, ctx, $, escape){
      return new Node($(element), ctx, $, escape);
    }
    update(){
      this.info = mark.utils.get_element_info(this.element, this.$);
      this.name = this.info.name;
      this.method = this.ctx[this.name];
    }
    evaluate(globals){
      var build = this.build, children = this.children, scope = this.scope;
      return new Promise(function (fulfill, reject){
        Promise.each(children, function(child, i){
          return child.evaluate(globals);
        }).then(function(resolved) {
          try {
            build.call(scope, resolved, globals, function(err, res){
              if(err){
                reject(err);
              } else {
                fulfill(res);
              }
            });
          } catch (e) {
            reject(e);
          }
        }, function(err){
          reject(err);
        });
      });
    }
    build(child_data, globals, cb){
      this.update();
      var method_type = this.method;
      var parameters = Object.assign({}, {globals:globals, child_data:child_data, context:this.ctx}, this.info);
      // Call the method and send response to Template
      // console.log("Call Method: " + method_type);
      if(this.escape != 1){
        mark.utils.call_optional_parameters(method_type.method, this.element, [this.$, this.element, parameters], function(err, method_data){
          if(err) cb(err)
          else {
            parameters.data = method_data;
            parameters.element.data(method_data);
            if(method_type.template){
              if(method_type.template.async){
                var template_output = method_type.template.render(parameters, function(err, template_output){
                  if(!err){
                    parameters.element.empty();
                    parameters.element.text(template_output);
                    cb(null, template_output);
                  } else cb(err);
                });
              } else {
                var template_output = method_type.template.render(parameters);
                parameters.element.empty();
                parameters.element.text(template_output);
                cb(null, template_output);
              }
            } else {
              if (typeof method_data === 'string'){
                parameters.element.text(method_data);
              } else {
                parameters.element.text(JSON.stringify(method_data));
              }
              cb(null, method_data);
            }
          }
        });
      } else {
        cb(null, "");
      }
    }
  }
  mark.tree = Node;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(mark){
  mark.utils = {};
  mark.utils.call_optional_parameters = function(fn, scope, parameters, cb) {
    var supported = fn.length - 1;
    var supported_parameters = [...parameters.slice(0, supported), cb];
    fn.call(scope, ...supported_parameters);
  };
  mark.utils.initial_context = {
    markto:{
      method:function($,cb){
        cb(null, $(this).text());
      }
    }
  };
  mark.utils.encapsulate = (e)=>'<markto>'+e+'</markto>';
  mark.utils.empty_method = {method:(cb)=>{cb()}};
  mark.utils.empty_template = {render:()=>{
    return '';
  }};
  mark.utils.get_element_info = function(element, $){
    return {
      id: element.attr('id'),
      name: element.prop("tagName").toLowerCase(),
      attributes:element.get(0).attribs,
      leaf: element.children().length == 0,
      element:element,
      $:$,
      j:$
    };
  };
  mark.utils.update_object = function(older, newer){
    return Object.assign({}, older, newer);
  };
  mark.utils.update_context = function(context, name, obj){
    context[name] = Object.assign({method:(cb)=>{cb()}}, context[name], obj);
    if(obj.template &&  typeof obj.template === 'string'){
      context[name].template = mark.twig({data:obj.template});
    }
  };
  mark.utils.route_values_exist = function(values, functions, cb){
    functions[values.findIndex((e)=>!!e)](cb);
  };
  mark.utils.is_number = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  mark.utils.is_numeral_object = function(obj){
    return Object.keys(obj).every(mark.utils.is_number);
  }
  mark.utils.convert_numeral_object = function(obj) {
    return Object.keys(obj).map((key)=>obj[key]);
  };

  mark.utils.object_from_tree = function($, element){
    var arr = element.children();
    if(arr.every((e)=>e.attr('id'))){
      var obj = {};
      for (element of arr) {
        obj[element.attr('id')] = element.data();
      }
      return obj;
    } else {
      var data = arr.map((e)=>{
        var temp = e.data();
        if(mark.utils.is_numeral_object(temp)){
          return mark.utils.convert_numeral_object(temp);
        } else return temp;
      });
      if(data.length == 1){
        return data[0];
      } else return data;
    }

  };
  mark.utils.escape_method = function($, e, p, cb){
    return e.html();
  };


};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var cheerio = __webpack_require__(7),
  Promise = __webpack_require__(1),
  fs = __webpack_require__(0);

module.exports = function(mark){
  class Compiler {
    constructor(scope) {
      if(scope){
        this.context = Object.assign(mark.functions, scope);
      } else {
        this.context = mark.functions;
      }
    }
    compile(template){
      if(template.length == 0 || !(/\S/.test(template))){
        return {evaluate:()=>
          new Promise(function(resolve, reject) {
            resolve(template);
          })
        };
      } else {
        var $ = cheerio.load(mark.utils.encapsulate(template), {
          xmlMode:true,
          decodeEntities:true
        });
        return new mark.tree($(':root'), this.context, $);
      }
    }
    render(template, globals = {}){
      var tree = this.compile(template);
      return tree.evaluate(globals);
    }
    extend(name, obj){
      this.context[name] = Object.assign({method:(cb)=>{cb()}}, obj);
      if(obj.template &&  typeof obj.template === 'string'){
        this.context[name].template = mark.twig({data:obj.template});
      }
    }
    update(name, obj){
      this.context[name] = Object.assign({method:(cb)=>{cb()}}, this.context[name], obj);
      if(obj.template &&  typeof obj.template === 'string'){
        this.context[name].template = mark.twig({data:obj.template});
      }
    }
    renderFile(filename, globals = {}){
      var res = fs.readFileSync(filename, 'UTF8');
      return this.render(res,globals);
    }
  }
  mark.compiler = Compiler;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cheerio-iterable");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(0),
  entities = __webpack_require__(9);
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
  __webpack_require__(10)(mark.functions);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("entities");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(context){
  var loadTemplate = function(resource){
    resource.forEach((e)=>{
      context[e[0]] = Object.assign({method:(cb)=>{cb()}}, context[e[0]], {template:e[1]});
    });
  }
  loadTemplate(__webpack_require__(11));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(12).twig; module.exports = [['my_test',twig({data:"\ntest\n"})]];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("twig");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(mark){
  mark.lib = {};
  __webpack_require__(14)(mark.lib);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(0),
  csv = __webpack_require__(15);
module.exports = function(lib){
  lib.csv = {};
  lib.csv.parse_file = function(filename, cb) {
    csv.parse(fs.readFileSync(filename, 'UTF8'), cb);
  };
  lib.csv.parse_string = function(string, cb) {
    csv.parse(string, cb);
  };
  lib.csv.stringify = function(csv_data, cb) {
    csv.stringify(csv_data, cb);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("csv");

/***/ })
/******/ ]);