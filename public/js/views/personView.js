var app = app || {};

app.PersonView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render)
  },
  tagName: 'tr',
  className: 'person',
  template: _.template( $('#person-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events: {
    'click button.remove': 'removePerson',
  },
  removePerson: function(){
    this.model.destroy();
      this.$el.remove();
  }
});
