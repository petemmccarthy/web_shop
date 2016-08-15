/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var animalsRouter = express.Router();

  animalsRouter.get('/', function(req, res) {
    res.send({
      'animals': [{
        name: "cat",
        price: 5
      }, {
        name: "dog",
        price: 10
      }, {
        name: "parrot",
        price: 12
      }, {
        name: "hamster",
        price: 15
      }, {
        name: "rabbit",
        price: 8
      }, {
        name: "turtle",
        price: 9
      }]
    });
  });

  animalsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  animalsRouter.get('/:id', function(req, res) {
    res.send({
      'animals': {
        id: req.params.id
      }
    });
  });

  animalsRouter.put('/:id', function(req, res) {
    res.send({
      'animals': {
        id: req.params.id
      }
    });
  });

  animalsRouter.delete('/:id', function(req, res) {
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
  app.use('/api/animals', animalsRouter);
};
