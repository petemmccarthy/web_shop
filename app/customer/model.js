import DS from 'ember-data';

export default DS.Model.extend({
  selectedAnimal: DS.attr('string'),
  title: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string')
});
