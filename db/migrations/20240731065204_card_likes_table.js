/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cards_likes", function (table) {
    table.integer("user_id").notNullable();
    table.integer("card_id").notNullable();
    table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.foreign("card_id").references("id").inTable("cards").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cards_likes");
};
