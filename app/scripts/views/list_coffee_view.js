(function () {

  App.Views.ListCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'allCoffees',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();
      this.collection.sort();

      if(this.options.sort !== undefined) {

      var local_collection = this.collection.sortBy( function(model){
        return model.get(self.options.sort);
      });
      _.each(local_collection, function (c) {
        self.$el.append(self.template(c.toJSON()));
      })
    } else {
      this.collection.sort();
      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });
    }

      return this;
    }

  });

}());
