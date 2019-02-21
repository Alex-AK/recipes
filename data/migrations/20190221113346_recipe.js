exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function() {
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
    table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');
    table
      .integer('quantity')
      .unsigned()
      .notNullable();
    table.text('instructions').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
