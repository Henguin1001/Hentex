var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var util = require('util');
var Compiler = require('../index.js');

describe('Functions', function() {
  describe('Template Tag', function() {
    it('should render a plain template', function() {
      var c = new Compiler();
      var res = c.render('<template name="test">testdata</template><test/>');
      return res.should.eventually.equal('testdata');
    });
    it('should render a template with attributes', function() {
      var c = new Compiler();
      var res = c.render('<template name="test">{{attributes.value}}</template><test value="testdata"/>');
      return res.should.eventually.equal('testdata');
    });
    it('should render two templates', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo</template><template name="bar">bar</template><foo/><bar/>');
      return res.should.eventually.equal('foobar');
    });
    it('should render a template with children', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo</template><template name="test">{% for child in element.children() %}v:{{child.text()}}{% endfor %}</template><test><foo/><foo/></test>');
      return res.should.eventually.equal('v:foov:foo');
    });
    it('should load templates separately', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo</template><template name="bar">bar</template>').then(()=>c.render('<foo/><bar/>'));
      return res.should.eventually.equal('foobar');
    });
  });

  describe('set', function(){
    it('should set a value in scope', function() {
      var c = new Compiler();
      c.extend("scope",{
        method:function($, e, cb){
          cb(null, $(this).parent().data('scope'));
        }
      });
      var res = c.render('<set key="name" value="test"/><scope/>');
      return res.should.eventually.equal('{"name":"test"}');
    });
  });
  describe('include', function(){
    it('should load external templates', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo</template>').then(()=>c.render('<include src="./test/template.xml"/>'));
      return res.should.eventually.equal('foo\n');
    });
  });
  describe('json', function(){
    it('should parse data', function() {
      var c = new Compiler();
      var res = c.render('<template name="print">{{element.children().data()|json_encode()}}</template><print><json decode>{"name":"henry"}</json></print>');
      return res.should.eventually.equal('{"name":"henry"}');
    });
    it('should stringify data', function() {
      var c = new Compiler();
      // console.log("encode now");
      var res = c.render('<json encode><json decode>{"name":"henry"}</json></json>');
      return res.should.eventually.equal('{"name":"henry"}');
    });
    it('should stringify multiple data', function() {
      var c = new Compiler();
      var res = c.render('<json encode><json decode>{"name":"henry"}</json><json decode>{"name":"henry"}</json></json>');
      return res.should.eventually.equal('[{"name":"henry"},{"name":"henry"}]');
    });
    it('should stringify multiple named data', function() {
      var c = new Compiler();
      var res = c.render('<json encode><json id="user1" decode>{"name":"henry"}</json><json id="user2" decode>{"name":"henry"}</json></json>');
      return res.should.eventually.equal('{"user1":{"name":"henry"},"user2":{"name":"henry"}}');
    });
  });
  describe('CSV', function(){
    it('should parse a simple csv string', function() {
      var c = new Compiler();
      var res = c.render('<csv>1,2,3</csv>');
      return res.should.eventually.equal('1,2,3\n');
    });
    it('should parse a simple csv string', function() {
      var c = new Compiler();
      var res = c.render('<json encode><csv>1,2,3</csv></json>');
      return res.should.eventually.equal('[["1","2","3"]]');
    });
  });
});
