const knex = require("knex");

const sessionsModel = {
  select: async (user) => {
    return knex("users")
      .select("*")
      .where({ username: user.username, password: user.password });
  },
};

module.exports = sessionsModel;
