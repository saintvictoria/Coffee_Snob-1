(function () {

  App.Collections.Coffees = Backbone.Collection.extend({
    model: App.Models.Coffee,
    comparator: function(model){
      return -model.get('rating');
    },
    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/viccoffee'
  });

}());
