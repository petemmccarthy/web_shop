import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enquiry-form', 'Integration | Component | enquiry form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enquiry-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enquiry-form}}
      template block text
    {{/enquiry-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});