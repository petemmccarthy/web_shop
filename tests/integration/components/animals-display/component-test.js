import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('animals-display', 'Integration | Component | animals display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{animals-display}}`);

  assert.ok(this.$('.animals').length, 'should render the display animals component');
  assert.equal(this.$().text().trim(), 'Choose from one of these beauties!');
});

test('it displays all the animals', function (assert) {
  let mockAnimals = [{
    name: 'dog',
    price: '100',
    comment: 'woof'
  }, {
    name: 'cat',
    price: '10',
    comment: 'meow'
  }];

  this.set('animals', mockAnimals);
  this.render(hbs`{{animals-display animals=animals}}`);

  assert.equal(this.$('div.animal').length, mockAnimals.length, 'should show all available animals');
});

test('animal details are displayed', function (assert) {
  let mockAnimal = [{
    name: 'dog',
    price: '100',
    comment: 'woof'
  }],

  mockAnimalImageSRC = '/assets/images/' + mockAnimal[0].name + '.png',
  mockNameAndPrice = mockAnimal[0].name + ' £' + mockAnimal[0].price,
  mockAnimalComment = '\"' + mockAnimal[0].comment + '\"';

  this.set('animals', mockAnimal);
  this.render(hbs`{{animals-display animals=animals}}`);

  assert.equal(this.$('img').attr('src'), mockAnimalImageSRC, 'should dispaly a picture of the correct animal');
  assert.equal(this.$('p').first().text().trim(), mockNameAndPrice, 'should dispaly animals name and price');
  assert.equal(this.$('i').first().text().trim(), mockAnimalComment, 'should display animals comment');
});

test('each animal displays an enquire link', function(assert) {
  let mockAnimals = [{
    name: 'dog',
    price: '100',
    comment: 'woof'
  }, {
    name: 'cat',
    price: '10',
    comment: 'meow'
  }];

  this.set('animals', mockAnimals);
  this.render(hbs`{{animals-display animals=animals}}`);

  assert.equal(this.$('p#enquiryLink').length, mockAnimals.length, 'each animal has an enquire link');
});
