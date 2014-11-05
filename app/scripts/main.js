(function () {


  App.coffees = new App.Collections.Coffees();

  App.coffees.fetch().done( function () {
    console.log(App.coffees);
  });


}());