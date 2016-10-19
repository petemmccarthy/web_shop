import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | animals');

test('visiting /animals', function(assert) {
  visit('/animals');

  andThen(function() {
    assert.equal(currentURL(), '/animals');
    assert.equal(find('#animals').length, 1);
    assert.equal(find('#enquiryLink').length, 1);
  });
});

test('selecting animal link', function(assert) {
  visit('/animals');

  andThen(function() {
    click('#enquiryLink a');
  });

  andThen(function() {
    assert.equal(currentURL(), '/animals/enquire');
  });
});
