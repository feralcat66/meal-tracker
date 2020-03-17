const { Router } = require('express');
const Recipe = require('../models/Recipe');

module.exports = Router()
  .post('/', (req, res, next) => {
    Recipe
      .create(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Recipe
      .findById(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Recipe
      .find()
      .then(recipe => res.send(recipe))
      .catch(next);
  });
