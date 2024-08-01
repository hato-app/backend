const knex = require("../knex");

const commentsModel = {
  select: async () => {
    return knex("comment").select("*");
  },
  selectId: async (id) => {
    return knex("comment").select("*").where({ id }).first();
  },
  create: async (card) => {
    return knex("comment").returning("*").insert(id, text, created_at, diabled);
    // how to add user_id, created_at, disabled?
  },
  update: async (id, comment) => {
    return knex("comment").update(id, text, diabled).where({ id });
  },
  
  destroy: async (id) => {
    return knex("comment").del().where({ id });
  },
};
export default commentsModel;