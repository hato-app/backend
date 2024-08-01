const knex = require("../knex");

const commentsModel = {
  select: async () => {
    return knex("comments").select("*");
  },
  selectId: async (id) => {
    return knex("comments").select("*").where({ id }).first();
  },
  create: async (comment) => {
    return knex("comments").insert(comment).returning("*");
  },
  update: async (id, comment) => {
    return knex("comments").update(comment).where({ id });
  },

  destroy: async (id) => {
    return knex("comments").del().where({ id } );
  },
};
module.exports = commentsModel;
