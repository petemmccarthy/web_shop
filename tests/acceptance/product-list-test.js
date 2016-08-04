import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | product list');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should show the available products', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(this.$('.product').length, 1, "should see the product for sale");
  });
});
