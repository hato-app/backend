const knex = require("../knex");

const cardsModel = {
  select: async () => {
    return knex("card").select("*");
  },
  selectId: async (id) => {
    return knex("card").select("*").where({ id }).first();
  },
  create: async (card) => {
    return knex("card").insert(id, user_id, category_id, created_date, front_text, back_text, views).returning("*"); 
    //views 0 when it's created? where the category_id, user_id added from?
  },
  update: async (id, card) => {
    return knex("card").update(id, user_id, category_id, front_text, back_text, views).where({ id });
  },
  
  destroy: async (id) => {
    return knex("card").del().where({ id });
  },
};
export default cardsModel;