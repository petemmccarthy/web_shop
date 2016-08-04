import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | product list');

test('visiting /product-list', function(assert) {
  visit('/product-list');

  andThen(function() {
    assert.equal(currentURL(), '/product-list');
  });
});
