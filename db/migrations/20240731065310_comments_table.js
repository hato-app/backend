/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments();
    table.integer("card_id");
    table
      .foreign("card_id")
      .references("id")
      .inTable("cards")
      .onDelete("CASCADE");
    table.string("text");
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};
