(function () {

  App.Models.Coffee = Parse.Object.extend({

    className: 'Coffee',

    idAttribute: 'objectId',

    defaults: {
      name: '',
      brand: '',
      comments: '',
      rating: ''
    },

    initialize: function () {
      var t = this.get('name');
      //console.log(t + " has been added");
    }

  });

}());
