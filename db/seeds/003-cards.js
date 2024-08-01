/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cards").del();
  await knex("cards").insert([
    {
      id: 1,
      user_id: 1,
      category_id: "1",
      front_text: "What do you call a pony with a cough?",
      back_text: "A little horse",
      views: 0,
    },
    {
      id: 2,
      category_id: "1",
      user_id: 2,
      front_text: "What did one hat say to the other?",
      back_text: "You wait here. I'll go on a head.",
      views: 0,
    },
    {
      id: 3,
      user_id: 3,
      category_id: "1",
      front_text: "What do you call a magic dog?",
      back_text: "A labracadabrador.",
      views: 0,
    },
    {
      id: 4,
      user_id: 4,
      category_id: "1",
      front_text: "Why can’t you hear a pterodactyl go to the bathroom?",
      back_text: "Because the “P” is silent.",
      views: 0,
    },
    {
      id: 5,
      user_id: 5,
      category_id: "1",
      front_text: "What did the pirate say when he turned 80?",
      back_text: "Aye matey.",
      views: 0,
    },
    {
      id: 6,
      user_id: 6,
      category_id: "2",
      front_text: "Who directed the 1994 film 'Pulp Fiction'?",
      back_text: "Quentin Tarantino",
      views: 0,
    },
    {
      id: 7,
      user_id: 7,
      category_id: "2",
      front_text: "What is the name of the city 'The Simpsons' is set in?",
      back_text: "Springfield",
      views: 0,
    },
    {
      id: 8,
      user_id: 8,
      category_id: "2",
      front_text: "What was Elvis Presley's middle name?",
      back_text: "Aaron",
      views: 0,
    },
    {
      id: 9,
      user_id: 9,
      category_id: "2",
      front_text: "Which sport has a penalty shot?",
      back_text: "Soccer/Football",
      views: 0,
    },
    {
      id: 10,
      user_id: 10,
      category_id: "2",
      front_text: "Who, as of 2024, currently owns X, formerly Twitter?",
      back_text: "Elon Musk",
      views: 0,
    },
  ]);
};
