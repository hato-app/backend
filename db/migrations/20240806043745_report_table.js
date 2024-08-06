/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("cards_report", function (table) {
      table.integer("card_id").notNullable();
      table.integer("user_id").notNullable();
    }),

    knex.schema.createTable("comments_report", function (table) {
      table.integer("comment_id").notNullable();
      table.integer("user_id").notNullable();
    }),

    knex.schema.alterTable("cards", function (table) {
      table.boolean("flag_report").notNullable();
    }),

    knex.schema.alterTable("comments", function (table) {
      table.boolean("flag_report").notNullable();
    }),
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
