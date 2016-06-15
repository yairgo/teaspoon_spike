//= require adder
fixture.preload("adder.html");
describe("adder", function() {
  fixture.set("<h2>adder fixture</h2>");
  beforeEach(function() {
    this.fixtures = fixture.load("adder.html", false);
    jQuery('#adder').adder();
    this.leftInput = jQuery('#left-input');
    this.rightInput = jQuery('#right-input');
    this.sumInput = jQuery('#sum-input');

  });
  describe('test this?', function() {
    it('should default values to 0', function() {
      console.log('single');
      expect(this.leftInput.val()).toEqual('0');
      expect(this.rightInput.val()).toEqual('0');
      expect(this.sumInput.val()).toEqual('0');
    });
  });

  describe('adding some numbers', function() {
    beforeAll(function() {
      console.log('describe');
    });
    it('should work on left change', function() {
      console.log('desc 1');
      changeAndTrigger(this.leftInput, 6.8);

      expect(this.sumInput.val()).toEqual('6.8');
    });
    it('should work on right change', function() {
      console.log('desc 2');
      changeAndTrigger(this.rightInput, 6.8);

      expect(this.sumInput.val()).toEqual('6.8');
    });
    it('should work with both values', function() {
      console.log('desc 3');
      changeAndTrigger(this.leftInput, 3.1);
      changeAndTrigger(this.rightInput, 6.8);

      expect(this.sumInput.val()).toEqual('9.9');
    });
  });

  function changeAndTrigger(element, value) {
    element.val(value);
    element.trigger('change');
  };
});

