console.log("...loaded");

var app = app || {};

app.PersonCollection = Backbone.Collection.extend({
  model: app.Person,
  url: '/api/people'
});
