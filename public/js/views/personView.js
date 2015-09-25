var app = app || {};

app.PersonView = Backbone.View.extend({
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
    'click .remove': 'removePerson',
  },

  removePerson: function(){
    this.model.destroy();
    this.$el.toggle('explode');
    setTimeout(function(){
      this.$el.remove();
    }, 1000);
  }
});
