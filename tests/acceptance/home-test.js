import { test } from 'qunit';
import moduleForAcceptance from 'web-shop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('home page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.title').length, 1);
    assert.equal(find('#animalsLink').length, 1);
    assert.equal(find('#contactLink').length, 1);

  });
});

test('visiting contact link', function(assert) {
  visit('/');

  andThen(function() {
    click('#animalsLink a');
  });

  andThen(function() {
    assert.equal(currentURL(), '/animals');
  });
});

test('visiting contact link', function(assert) {
  visit('/');

  andThen(function() {
    click('#contactLink a');
  });

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});
