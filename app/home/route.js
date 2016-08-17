import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showAnimals () {
      this.transitionTo('home.animals');
    },
    showContact () {
      this.transitionTo('home.contact');
    }
  }

});
