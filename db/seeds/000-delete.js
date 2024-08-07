/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("ALTER SEQUENCE public. cards_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE public. users_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE public. comments_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE public. category_id_seq RESTART WITH 1");

  await knex("cards_likes").del();
  await knex("cards_dislikes").del();
  await knex("comments").del();
  await knex("cards").del();
  await knex("users").del();
  await knex("category").del();
  await knex("cards_report").del();
  await knex("comments_report").del();
};
