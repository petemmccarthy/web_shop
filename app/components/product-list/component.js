import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product'],
  products: [{
    name: 'cat',
    price: 5
  }, {
    name: 'dog',
    price: 10
  }, {
    name: 'parrot',
    price: 12
  }, {
    name: 'hamster',
    price: 15
  }, {
    name: 'rabbit',
    price: 8
  }]
});
