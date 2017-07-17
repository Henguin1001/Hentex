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
});
