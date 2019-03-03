exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('linkIngredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('linkIngredients').insert([
        { recipe_id: 1, ingredient_id: 2, quantity: 2.25 },
        { recipe_id: 1, ingredient_id: 5, quantity: 1.25 },
        { recipe_id: 1, ingredient_id: 8, quantity: 2.25 },
        { recipe_id: 1, ingredient_id: 9, quantity: 0.6 },
        { recipe_id: 2, ingredient_id: 1, quantity: 1.25 },
        { recipe_id: 2, ingredient_id: 2, quantity: 1.25 },
        { recipe_id: 2, ingredient_id: 6, quantity: 2.25 },
        { recipe_id: 2, ingredient_id: 9, quantity: 0.6 },
        { recipe_id: 3, ingredient_id: 2, quantity: 2.25 },
        { recipe_id: 3, ingredient_id: 4, quantity: 1.25 },
        { recipe_id: 5, ingredient_id: 1, quantity: 1.25 },
        { recipe_id: 5, ingredient_id: 2, quantity: 1.25 },
        { recipe_id: 5, ingredient_id: 3, quantity: 2.25 },
        { recipe_id: 5, ingredient_id: 6, quantity: 0.6 },
        { recipe_id: 5, ingredient_id: 9, quantity: 0.6 },
        { recipe_id: 5, ingredient_id: 1, quantity: 2.25 }
      ]);
    });
};
