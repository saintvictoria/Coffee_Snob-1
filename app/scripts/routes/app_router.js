(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
      // Light the Fire
      Parse.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:CoffeeID' : 'editCoffee',
      'add': 'addCoffee',
      'sort/:sortby': 'home'
    },

    home: function (sortby) {
      new App.Views.ListCoffee({
         collection: App.coffees, sort: sortby });
    },

    editCoffee: function (CoffeeID) {

      var c = App.coffees.get(CoffeeID);

      new App.Views.SingleCoffee({ coffee: c });
    },
    addCoffee: function (){

      new App.Views.AddCoffee();
    }

  });

}());
