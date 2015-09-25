var app = app || {};

$.ajaxSetup({
  headers: {
    "accept": "application/json"
  }
});

app.people = new app.PersonCollection();
app.personPainter = new app.PersonListView({
  collection: app.people
});

app.people.fetch();
