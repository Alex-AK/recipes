exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('dish').insert([
        { id: 1, name: 'Tacos' },
        { id: 2, name: 'Pizza' },
        { id: 3, name: 'Salmon' }
      ]);
    });
};

// recipe id 3
// recipe -> recipe name, add ingredient id 1, quantity 4g, add ingredient id 2, quantity 2g

// ingredient id 1 salt
// ingredient 2 sugar
// ingredient 3 flour
