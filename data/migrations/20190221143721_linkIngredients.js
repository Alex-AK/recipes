exports.up = function(knex, Promise) {
  return knex.schema.createTable('linkIngredients', function(table) {
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
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
      .float('quantity', 2)
      .unsigned()
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('linkIngredients');
};
