(function () {

  App.Collections.Coffees = Backbone.Collection.extend({
    model: App.Model.Coffee,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/coffee'
  });

}());