const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db('recipe');
}

function getById(id) {
  return db('recipe')
    .where({ id })
    .first();
}

function add(recipe) {
  return db('recipe')
    .insert(recipe)
    .then(ids => getById(ids[0]));
}
