const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db('dish');
}

async function getById(id) {
  const dish = await db('dish as d')
    .where({ id })
    .first();
  const recipes = await db('recipe as r')
    .select('r.id', 'r.name', 'r.instructions')
    .where('r.dish_id', id)
    .orderBy('r.id');

  return { dish, recipes };
}

function add(dish) {
  return db('dish')
    .insert(dish)
    .then(ids => getById(ids[0]));
}

// select d.id as DishId, d.name as DishName, r.name as RecipeName
// from dish as d
// inner join recipe as r
// where d.id = r.dish_id
// order by DishId
