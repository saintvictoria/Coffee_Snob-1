(function () {

  App.Views.SingleCoffee = Parse.View.extend({

    tagName: 'ul',
    className: 'coffeeSingle',

    events: {
      'submit #updateCoffee' : 'updateCoffee',
      'click #delete' : 'deleteCoffee',
      'submit #addComment': 'addComment'
    },

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      $('#coffeeForm').empty();

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.coffee.toJSON()));

            var commentTemplate = _.template($('#commentTemp').html());
      var comments_query = new Parse.Query(App.Models.Comment);
      comments_query.equalTo('parent', this.options.coffee);

      this.$el.append('<h2>Comments</h2><ul class="comments"></ul>');

      comments_query.find({
        success: function (results) {

          _.each(results, function(comment) {
            $('ul.comments').append(commentTemplate(comment.toJSON()));
          })

        }
      })

    },

    addComment: function (e) {
      e.preventDefault();

      var comment = new App.Models.Comment({

        commentText: $('#commentText').val(),
        parent: this.options.coffee

      });

      comment.save(null, {
        success: function () {
          console.log('Comment has been added');
          App.router.navigate('', {trigger: true});
        }
      });

    },

    updateCoffee: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.coffee.set({
        name: $('#update_name').val(),
        brand: $('#update_brand').val(),
        rating: $('input[name="rating"]:checked').val()
      });

      // Save Instance
      this.options.coffee.save();

      // TODO - Check on promise
      App.router.navigate('', {trigger: true});

    },

    deleteCoffee: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.coffee.destroy();

      // Go home ET
      App.router.navigate('', {trigger: true});

    }

  });

}());
