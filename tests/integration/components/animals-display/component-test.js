import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('animals-display', 'Integration | Component | animals display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{animals-display}}`);

  assert.ok(this.$('.animals').length, 'should render the animals display');
  assert.equal(this.$().text().trim(), 'Choose from one of these beauties!');
});
