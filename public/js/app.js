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



$('.create-person').on('submit', function(e){
  e.preventDefault();
  var data = $(this).serializeJSON();
  var emailInput = $('#email').val();
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(data);
    if(emailInput.match(emailFormat))  {
      app.people.create(data);
        $('.email').css('background-color', '#C0C0C0');
        $('.email').css('color', 'darkgreen');
        this.reset();
    }  else  {
      $('.email').css('background-color', 'red');
      alert("You have entered an invalid email address!");
      $('#email').focus();
    }
});
