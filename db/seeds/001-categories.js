/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {
      id: "1",
      category_name: "jokes",
    },
    {
      id: "2",
      category_name: "trivia",
    },
    {
      id: "3",
      category_name: "whatever",
    }
  ]);
};
