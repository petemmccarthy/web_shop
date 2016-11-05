import Ember from 'ember';

export default Ember.Component.extend({
  scroller: Ember.inject.service(),

  didInsertElement() {
    this._super(...arguments);
    this.get('scroller').scrollVertical('#animals', {offset: -100});
  }

});
