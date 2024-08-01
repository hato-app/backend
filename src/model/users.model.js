const knex = require("../knex");

const usersModel = {
  select: async () => {
    return knex("users").select("*");
  },
  selectId: async (id) => {
    return knex("users").select("*").where({ id });
  },
  create: async (user) => {
    return knex("users").insert(user).returning("*");
  },
  update: async (id, user) => {
    return knex("users").update(user).where({ id }).returning("*");
  },
  delete: async (id) => {
    return knex("users").del().where({ id });
  },
};

module.exports = usersModel;
