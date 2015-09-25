var app = app || {};

app.Person = Backbone.Model.extend({
  defaults: {
    name: '',
    email: ''
  }
});
