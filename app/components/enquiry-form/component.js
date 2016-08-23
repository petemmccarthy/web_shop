import Ember from 'ember';

export default Ember.Component.extend({
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

  actions: {
    selectTitle(value, component) {
      this.set('model.title', value);
    }
  }

});
