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
  showRandomByCategory: async (req, res) => {
    const id = Number(req.params.id);
    const results = await cardsModel.selectRandomCategoryId(id);
    res.status(200);
    res.json(results);
  },
  showByCategory: async (req, res) => {
    const id = Number(req.params.id);
    const results = await cardsModel.selectCategoryId(id);
    res.status(200);
    res.json(results);
  },
  showByUserId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await cardsModel.selectByUserId(id);
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
    const card = req.body.card;
    card.updated_at = new Date().toISOString();
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
  showByReported: async (req, res) => {
    const result = await cardsModel.selectReportedCards();
    res.status(200);
    res.json(result);
  },
};

module.exports = cardsController;
