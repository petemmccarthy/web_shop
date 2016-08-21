/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var animalsRouter = express.Router();

  animalsRouter.get('/animals', function(req, res) {
    res.send({
      'animals': [
        {
          "id": 0,
          "name": "Bluebird",
          "price": 5,
          "comment": "small but big personality"
        }, {
          "id": 1,
          "name": "Chick",
          "price": 10,
          "comment": "cheeky litle chappy"
        }, {
          "id": 2,
          "name": "Cockerel",
          "price": 12,
          "comment": "a little cocky"
        }, {
          "id": 3,
          "name": "Hound",
          "price": 15,
          "comment": "not too ruff"
        }, {
          "id": 4,
          "name": "Elephant",
          "price": 8,
          "comment": "never forgets"
        }, {
          "id": 5,
          "name": "Emu",
          "price": 9,
          "comment": "windmill fan"
        }, {
          "id": 6,
          "name": "Dog",
          "price": 5,
          "comment": "loves a tummy tickle"
        }, {
          "id": 7,
          "name": "Lion",
          "price": 10,
          "comment": "roaring good fun"
        }, {
          "id": 8,
          "name": "Monkey",
          "price": 12,
          "comment": "cheeky litle chappy"
        }, {
          "id": 9,
          "name": "Owl",
          "price": 15,
          "comment": "will keep you up"
        }, {
          "id": 10,
          "name": "Robin",
          "price": 8,
          "comment": "behave kids"
        }, {
          "id": 11,
          "name": "Squirrel",
          "price": 9,
          "comment": "drive you nuts"
        }
      ]
    });
  });

  animalsRouter.post('/animals', function(req, res) {
    res.status(201).end();
  });

  animalsRouter.get('/animals:id', function(req, res) {
    res.send({
      'animals': {
        id: req.params.id
      }
    });
  });

  animalsRouter.put('/animals:id', function(req, res) {
    res.send({
      'animals': {
        id: req.params.id
      }
    });
  });

  animalsRouter.delete('/animals:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/animals', require('body-parser').json());
  app.use('/animals', animalsRouter);
};
