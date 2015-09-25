var app = app || {};

app.PersonListView = Backbone.View.extend({
  el: $('#people_list'),
  initialize: function(){
    this.listenTo( this.collection, 'add', this.render );
  },
  render: function(){
    this.$el.empty();
    var view;
    var people = this.collection.models;
    for (var i = 0; i < people.length; i++){
      view = new app.PersonView ({
        model: people[i]
      });
      view.render();
      this.$el.append( view.$el );
    }
  }
});
