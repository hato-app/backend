const knex = require("../knex");

const cardsModel = {
  select: async () => {
    return knex("cards").select("*");
  },
  selectId: async (id) => {
    return knex("cards").select("*").where({ id }).first();
  },
  selectCategoryId: (id) => {
    return knex("cards").select("*").where({ category_id: id });
  },
  selectRandom: async () => {
    return knex("cards").select("*").orderByRaw("RANDOM()").limit(1);
  },
  selectRandomCategoryId: async (id) => {
    return knex("cards")
      .select("*")
      .orderByRaw("RANDOM()")
      .where({ category_id: id })
      .limit(1);
  },
  create: async (card) => {
    return knex("cards").select("*");
  },
  update: async (id, card) => {
    return knex("cards").update(card).where({ id });
  },
  destroy: async (id) => {
    return knex("cards").del().where({ id });
  },
};
module.exports = cardsModel;
