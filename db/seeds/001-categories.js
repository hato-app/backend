/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').insert([
    {
      category_name: "jokes",
    },
    {
      category_name: "trivia",
    },
    {
      category_name: "whatever",
    }
  ]);
};
