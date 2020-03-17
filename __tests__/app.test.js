require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a new recipe with POST', () => {
    return request(app)
      .post('/api/v1/recipes')
      .send({
        name: 'scrambled eggs',
        ingredients: [
          { name: 'eggs, milk, butter, salt,pepper', measurements: '3 eggs, 1.5 tbsp milk, 1 tsp butter to coat pan, a dash of salt and pepper' }
        ]
      });
  });
});


