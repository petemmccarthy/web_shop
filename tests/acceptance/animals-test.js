import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | animals');

test('visiting /animals', function(assert) {
  visit('/animals');

  andThen(function() {
    assert.equal(currentURL(), '/animals');
    assert.equal(find('#animals').length, 1);
  });
});
