/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cards", function (table) {
    table.increments("id").primary();
    table.integer("category_id");
    table.foreign("category_id").references('id').inTable('category');
    table.timestamps(true, true);
    table.string("front_text", 255);
    table.string("back_text", 255);
    table.integer("views");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
