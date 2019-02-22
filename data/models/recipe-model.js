const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db('dish as d')
    .join('recipe as r')
    .select('r.id', 'r.name as recipe', 'd.name as dishName')
    .groupBy('r.id')
    .orderBy('r.id');
}

async function getById(id) {
  const recipe = await db('recipe')
    .where(`dish_id`, '=', id)
    .select('name', 'instructions');
  const dish = await db('dish')
    .where({ id })
    .select('name');

  return { dish, recipe };
}

function add(recipe) {
  return db('recipe')
    .insert(recipe)
    .then(ids => getById(ids[0]));
}
