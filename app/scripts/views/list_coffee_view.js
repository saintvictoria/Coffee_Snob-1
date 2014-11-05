(function () {

  App.Views.ListCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'allCoffees',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function () {
      this.render();

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);

    },

    render: function () {
      var self = this;

      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });

      return this;
    }

  });

}());