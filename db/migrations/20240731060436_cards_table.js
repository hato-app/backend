/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cards", function (table) {
    table.increments("id").primary();
    table.integer("category_id");
    table
      .foreign("category_id")
      .references("id")
      .inTable("category")
      .onDelete("SET NULL");
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
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
