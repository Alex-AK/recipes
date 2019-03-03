exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table) {
    table.increments();
    table
      .string('name', 128)
      .unique()
      .notNullable();
    table
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dish')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');
    table.text('instructions').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
