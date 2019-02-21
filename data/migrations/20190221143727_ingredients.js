exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', function(table) {
    table.increments();
    table
      .string('name')
      .unique()
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredient');
};
