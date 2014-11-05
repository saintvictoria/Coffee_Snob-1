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
      console.log('Added');
    }

  });

}());