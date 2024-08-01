const cardsModel = require("../model/cards.model");

const cardsController = {
  index: async (req, res) => {
    const results = await cardsModel.select();
    res.status(200);
    res.json(results);
  },
  show: async (req, res) => {
    const id = Number(req.params.id);
    const results = await cardsModel.selectId(id);
    res.status(200);
    res.json(results);
  },
  showRandom: async (req, res) => {
    const results = await cardsModel.selectRandom();
    res.status(200);
    res.json(results);
  },
  showByCategory: async (req, res) => {
    const id = Number(req.params.id);
    const results = await cardsModel.selectCategory(id);
    res.status(200);
    res.json(results);
  },
  create: async (req, res) => {
    const card = {
      front_text: req.body.front_text,
      back_text: req.body.back_text,
      category_id: req.body.category_id,
      user_id: req.body.user_id,
    };
    const results = await cardsModel.create(card);
    res.status(200);
    res.json(results);
  },
  update: async (req, res) => {
    const id = Number(req.params.id);
    const card = {
      front_text: req.body.front_text,
      back_text: req.body.back_text,
      category_id: req.body.category_id,
      updated_at: new Date().toISOString(),
    };
    const results = await cardsModel.update(id, card);
    res.status(200);
    res.json(results);
  },
  destroy: async (req, res) => {
    const id = Number(req.params.id);
    const results = await cardsModel.destroy(id);
    res.status(200);
    res.json(results);
  },
};

module.exports = cardsController;
