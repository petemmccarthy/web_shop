import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var model = this.modelFor('home.animals');
    return model;
  }

});
