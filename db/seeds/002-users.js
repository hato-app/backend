/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    {
      username: "gustabo" ,
      password: "gussy" ,
    },
    {
      username: "sushee" ,
      password: "pls" ,
    },
    {
      username: "sujin" ,
      password: "cho7" ,
    },
    {
      username: "brandon" ,
      password: "spencer" ,
    },
    {
      username: "filipo" ,
      password: "itsaship" ,
    },
    {
      username: "supercar88" ,
      password: "walnutboy12" ,
    },
    {
      username: "briango" ,
      password: "gobrian" ,
    },
    {
      username: "gigachad" ,
      password: "amongus" ,
    },
    {
      username: "riven42" ,
      password: "gragas24" ,
    },
    {
      username: "cc35enjoyer" ,
      password: "cc35enjoyer" ,
    }
  ]);
};
