/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments_report').del()
  await knex('comments_report').insert([
    {comment_id: 1, user_id: 1},
    {comment_id: 1, user_id: 2},
    {comment_id: 1, user_id: 3},
    {comment_id: 5, user_id: 1},
    {comment_id: 5, user_id: 2},
    {comment_id: 5, user_id: 3},
    {comment_id: 6, user_id: 1},
    {comment_id: 6, user_id: 2},
    {comment_id: 6, user_id: 3},
  ]);
  await knex('cards_report').del()
  await knex('cards_report').insert([
    {card_id: 1, user_id: 1},
    {card_id: 1, user_id: 2},
    {card_id: 1, user_id: 3},
    {card_id: 5, user_id: 1},
    {card_id: 5, user_id: 2},
    {card_id: 5, user_id: 3},
    {card_id: 6, user_id: 1},
    {card_id: 6, user_id: 2},
    {card_id: 6, user_id: 3},
  ]);
};
