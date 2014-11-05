(function () {

  App.Views.SingleCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'coffeeSingle',

    events: {},

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.coffee.toJSON()));

    }

  });

}());