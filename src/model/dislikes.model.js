const knex = require("../knex");

const dislikesModel = {
  select: async () => {
    return knex("cards_dislikes").select("*");
  },
  selectByCardId: async (id) => {
    return knex("cards_dislikes").select("*").where({ card_id:id });
  },
  create: async (likes) => {
    return knex("cards_dislikes").insert(likes).returning("*");
  },
  destroyByCardId: async (id) => {
    return knex("cards_dislikes").del().where({ card_id:id } );
  }
};
module.exports = dislikesModel;
