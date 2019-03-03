exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', function(table) {
    table.increments();
    table
      .string('name', 55)
      .unique()
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};
