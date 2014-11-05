(function () {

  App.Models.Coffee = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      brand: '',
      comments: '',
      rating: ''
    },

    initialize: function () {
      var t = this.get('name');
      console.log(t + " has been added");
    }

  });

}());
(function () {

  App.Collections.Coffees = Backbone.Collection.extend({
    model: App.Models.Coffee,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/coffee'
  });

}());
(function () {

  App.Views.AddCoffee = Backbone.View.extend({

    el: '#coffeeForm',

    events: {
      'submit #addCoffee' : 'addCoffee'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html($('#addTemp').html());
    },

    addCoffee: function (e) {
      e.preventDefault();
      
      var c = new App.Models.Coffee({
        name: $('#coffee_name').val(),
        brand: $('#coffee_brand').val()
      });

      App.coffees.add(c).save();

    }

  });

}());
(function () {

  App.Views.ListCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'allCoffees',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function () {
      this.render();

      this.collection.on('sync', this.render, this);
      this.collection.on('destroy', this.render, this);

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out 
      this.$el.empty();

      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });

      return this;
    }

  });

}());
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