/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: "1",
      username: "gustabo" ,
      password: "gussy" ,
    },
    {
      id: "2",
      username: "sushee" ,
      password: "pls" ,
    },
    {
      id: "3",
      username: "sujin" ,
      password: "cho7" ,
    },
    {
      id: "4",
      username: "brandon" ,
      password: "spencer" ,
    },
    {
      id: "5",
      username: "filipo" ,
      password: "itsaship" ,
    },
    {
      id: "6",
      username: "supercar88" ,
      password: "walnutboy12" ,
    },
    {
      id: "7",
      username: "briango" ,
      password: "gobrian" ,
    },
    {
      id: "8",
      username: "gigachad" ,
      password: "amongus" ,
    },
    {
      id: "9",
      username: "riven42" ,
      password: "gragas24" ,
    },
    {
      id: "10",
      username: "cc35enjoyer" ,
      password: "cc35enjoyer" ,
    }
  ]);
};
