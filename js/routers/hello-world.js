Application.Router.create(module, {
  index: function() {
    var view = this.view('hello-world/index');
    this.setView(view);
  }
});
