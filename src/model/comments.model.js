const knex = require("../knex");
const { selectByCardId } = require("./likes.model");

const commentsModel = {
  select: async () => {
    return knex("comments").select("*");
  },
  selectId: async (id) => {
    return knex("comments").select("*").where({ id }).first();
  },
  selectByUserId: async (id) => {
    return knex("comments").select("*").where({ user_id: id});
  },
  selectByCardId: async (id) => {
    return knex("comments").select("*").where({ card_id: id });
  },
  create: async (comment) => {
    return knex("comments").insert(comment).returning("*");
  },
  update: async (id, comment) => {
    return knex("comments").update(comment).where({ id });
  },
  destroy: async (id) => {
    return knex("comments").del().where({ id });
  },
};
module.exports = commentsModel;
