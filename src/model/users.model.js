const knex = require("../knex");

const usersModel = {
  select: async () => {
    return knex("users").select("*");
  },
  selectId: async (id) => {
    return {};
  },
  create: async (user) => {
    return knex("users").insert(user);

  },
  update: async (id, user) => {
    return 0;
  },
  delete: async (id) => {
    return 0;
  },
};

module.exports = usersModel;
