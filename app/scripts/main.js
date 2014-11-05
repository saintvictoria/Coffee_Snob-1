(function () {

  // Create Instance of Collection
  App.coffees = new App.Collections.Coffees();

  // Fetch any server-side coffees
  App.coffees.fetch().done( function () {
    
    // Create instance of Add View
    new App.Views.AddCoffee();

    // Create instance of List View
    new App.Views.ListCoffee({ collection: App.coffees }); 

  });


}());