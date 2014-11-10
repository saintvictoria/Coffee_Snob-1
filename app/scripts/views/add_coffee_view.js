(function () {

  App.Views.AddCoffee = Parse.View.extend({

    events: {
      'submit #addCoffee' : 'addCoffee'
    },

    initialize: function () {
      this.render();

      $('#coffeeList').html(this.$el);
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

      c.save(null, {
        success: function(){
          App.coffees.add(c);
          App.router.navigate('', {trigger: true});
        }
      })

      /*App.coffees.add(c).save(null, {
        success: function() {
          $('#addCoffee')[0].reset();
           App.router.navigate('', { trigger: true });
        }
       });
      */


    }

  });

}());
