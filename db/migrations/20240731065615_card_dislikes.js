/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cards_dislikes", function (table) {
    table.integer("user_id");
    table.integer("card_id");
    table.foreign("user_id").references("id").inTable("users");
    table.foreign("card_id").references("id").inTable("cards");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cards_dislikes");
};
