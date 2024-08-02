const knex = require("../knex");

const likesModel = {
  select: async () => {
    return knex("cards_likes").select("*");
  },
  selectByCardId: async (id) => {
    return knex("cards_likes").select("*").where({ card_id: id });
  },
  create: async (likes) => {
    return knex("cards_likes").insert(likes).returning("*");
  },
  destroyByUserId: async (id) => {
    return knex("cards_likes").del().where({ user_id: id });
  },
  destroyByCardId: async (id) => {
    return knex("cards_likes").del().where({ card_id: id });
  },
};
module.exports = likesModel;
