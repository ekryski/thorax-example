Thorax.configure({
  scope: exports,
  layout: '.layout'
});

$(document).ready(function() {
  exports.initBackboneLoader();
  Backbone.history.start();
});
