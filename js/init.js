Thorax.configure({
  scope: exports,
  layout: '.layout'
});

$(document).ready(function() {
  if (exports && exports.initBackboneLoader) {
    exports.initBackboneLoader();
  }
  Backbone.history.start();
});

//TODO: remove
if (!exports.moduleMap) { 
  exports.moduleMap = function(){}
}
