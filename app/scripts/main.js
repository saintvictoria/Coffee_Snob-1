(function () {


  App.coffees = new App.Collections.Coffees();

  App.coffees.fetch().done( function () {
    
    new App.Views.AddCoffee();   

  });


}());