import Ember from 'ember';
// import EmberValidations from 'ember-validations';

export default Ember.Component.extend({

  // validations: {
  //   'firstName': {
  //     presence: true,
  //     length: { minimum: 5 }
  //   }
  // },

  store: Ember.inject.service(),
  scroller: Ember.inject.service(),
  classNames: ['enquiry-form'],
  titles: [
    {
      label: 'Mr',
      value: 'Mr'
    },
    {
      label: 'Mrs',
      value: 'Mrs'
    },
    {
      label: 'Ms',
      value: 'Ms'
    },
    {
      label: 'Miss',
      value: 'Miss'
    },
    {
      label: 'Dr',
      value: 'Dr'
    },
    {
      label: 'Sir',
      value: 'Sir'
    },
    {
      label: 'Reverend',
      value: 'Reverend'
    },
    {
      label: 'Dame',
      value: 'Dame'
    },
    {
      label: 'Lady',
      value: 'Lady'
    },
    {
      label: 'Lord',
      value: 'Lord'
    },
    {
      label: 'Professor',
      value: 'Professor'
    }
  ],

  animals: Ember.computed('animals', function() {
    return this.get('store').findAll('animal');
  }),

  renderSummary: false,

  didInsertElement() {
    this.get('scroller').scrollVertical('#details', {offset: -90});
  },

  actions: {
    saveDetails() {
      this.set('renderSummary', true);
    }
  }

});
