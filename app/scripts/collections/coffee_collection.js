(function () {

  App.Collections.Coffees = Backbone.Collection.extend({
    model: App.Models.Coffee,
    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/viccoffee'
  });

}());
