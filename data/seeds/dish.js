exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' }
      ]);
    });
};

// recipe id 3
// recipe -> recipe name, add ingredient id 1, quantity 4g, add ingredient id 2, quantity 2g

// ingredient id 1 salt
// ingredient 2 sugar
// ingredient 3 flour
