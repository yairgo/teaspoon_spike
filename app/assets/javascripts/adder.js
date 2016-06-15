;(function(jQuery) {
  jQuery.adder = function(el) {
    var self = this;
    self.el = jQuery(el);
    self.leftInput = jQuery(self.el.data('left-input'));
    self.rightInput = jQuery(self.el.data('right-input'));
    self.sumInput = jQuery(self.el.data('sum-input'));

    self.init = function() {
      self.addValues();
      self.leftInput.on('change', self.addValues);
      self.rightInput.on('change', self.addValues);
    };

    self.addValues = function() {
      var leftVal = self.fixInput(self.leftInput);
      var rightVal = self.fixInput(self.rightInput);
      self.sumInput.val(leftVal + rightVal);
    }

    self.fixInput = function(input) {
      var value = parseFloat(input.val());
      if(isNaN(value)) {
        input.val(0);
      };
      return parseFloat(input.val());
    }

    self.init();
  };

  jQuery.fn.adder = function() {
    return this.each(function() {
      new jQuery.adder(this);
    });
  };

})(jQuery);