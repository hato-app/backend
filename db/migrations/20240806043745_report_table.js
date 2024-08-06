/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("cards_report", function (table) {
      table.integer("card_id").notNullable();
      table.integer("user_id").notNullable();
      table.unique(["user_id", "card_id"]);
      table.foreign("card_id").references("cards.id").onDelete("CASCADE").onUpdate("CASCADE");
      table.foreign("user_id").references("users.id").onDelete("CASCADE").onUpdate("CASCADE");
    }),
    
    knex.schema.createTable("comments_report", function (table) {
      table.integer("comment_id").notNullable();
      table.integer("user_id").notNullable();
      table.unique(["comment_id", "user_id"]);
      table.foreign("comment_id").references("comments.id").onDelete("CASCADE").onUpdate("CASCADE");
      table.foreign("user_id").references("users.id").onDelete("CASCADE").onUpdate("CASCADE");
    }),

    knex.schema.alterTable("cards", function (table) {
      table.boolean("flag_report").notNullable().defaultTo(false);
    }),

    knex.schema.alterTable("comments", function (table) {
      table.boolean("flag_report").notNullable().defaultTo(false);
    }),
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("cards_report"),
    knex.schema.dropTable("comments_report"),
  ])
};
