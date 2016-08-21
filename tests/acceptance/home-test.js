import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
