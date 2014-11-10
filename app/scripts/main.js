Parse.initialize("ZIF4afMwMqZq0qC4EH4nieNUFlH85MbFMhaJg9Vo", "MGwktO9k3abBBjh8gvNlO9F4zZLcJHiDYNX72ezy");

(function () {

  // Create Instance of Collection
  App.coffees = new App.Collections.Coffees();

  // Fetch any server-side coffees
  App.coffees.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


}());
