import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('animal');
  },

  setupController: function(controller, model) {
    controller.set('animals', model);
  }

});
