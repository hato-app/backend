const knex = require("../knex");

const cardsModel = {
  select: async () => {
    return knex("cards").select("*");
  },
  selectCategoryId: (id) => {
    return knex("cards").select("*").where({ category_id: id });
  },
  selectByUserId: (id) => {
    return knex("cards").select("*").where({ user_id: id });
  },
  selectId: async (id) => {
    return knex("cards").select("*").where({ id }).first();
  },
  selectRandom: async () => {
    return knex("cards").select("*").orderByRaw("RANDOM()").limit(1).first();
  },
  selectRandomCategoryId: async (id) => {
    return knex("cards")
      .select("*")
      .orderByRaw("RANDOM()")
      .where({ category_id: id })
      .limit(1);
  },
  create: async (card) => {
    return knex("cards").insert(card).returning("*");
  },
  update: async (id, card) => {
    return knex("cards").update(card).where({ id });
  },
  destroy: async (id) => {
    return knex("cards").del().where({ id });
  },
};
module.exports = cardsModel;
