Application.Router.create(module, {
  home: function() {
    var view = this.view('hello-world/index');
    this.setView(view);
  }
});
