exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredient').insert([
        { id: 1, name: 'Flour' },
        { id: 2, name: 'Salt' },
        { id: 3, name: 'Pepperoni' },
        { id: 4, name: 'Salmon' },
        { id: 5, name: 'Taco Shells' },
        { id: 6, name: 'Sauce' },
        { id: 7, name: 'Salsa' },
        { id: 8, name: 'Tomato' },
        { id: 9, name: 'Cheese' }
      ]);
    });
};
