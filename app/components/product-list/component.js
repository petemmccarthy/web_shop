import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product'],
  products: [{
    name: 'cat',
    price: 5
  }, {
    name: 'dog',
    price: 10
  }]
});
