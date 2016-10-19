import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enquiry-form', 'Integration | Component | enquiry form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enquiry-form}}`);
  assert.ok(this.$('.input-title').length, 'First name', 'should show title selection');
  assert.ok(this.$('.firstname').length, 'First name', 'should show first name input');
  assert.ok(this.$('.lastname').length, 'Last name', 'should show last name input');
  assert.ok(this.$('.emailaddress').length, 'Email', 'should show email input');
  assert.ok(this.$('button').length, 'Enquire', 'should show Enquire button');
});
