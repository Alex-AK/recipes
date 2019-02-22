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

  const holder = { dish, recipes };

  return holder;
  // return db('dish as d')
  //   .join('recipe as r', 'r.dish_id', '=', `d.${id}`)
  //   .select('r.name as recipe, r.id as id')
  //   .where('d.id', id)
  //   .groupBy('r.id');
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
