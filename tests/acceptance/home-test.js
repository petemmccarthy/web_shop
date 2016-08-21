import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.title').length, 1);
    assert.equal(find('#animalsLink').length, 1);
    assert.equal(find('#contactLink').length, 1);
  });
});
