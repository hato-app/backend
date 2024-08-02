const likesModel = require("../model/likes.model");

const likesController = {
  index: async (req, res) => {
    const results = await likesModel.select();
    res.status(200);
    res.json(results);
  },
  showByCardId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await likesModel.selectByCardId(id);
    res.status(200);
    res.json(results);
  },
  create: async (req, res) => {
    const likes = {
      user_id: req.body.user_id,
      card_id: req.body.card_id,
    };
    const results = await likesModel.create(likes);
    res.status(200);
    res.json(results);
  },
  destroyByUserId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await likesModel.destroyByCardId(id);
    res.status(200);
    res.json(results);
  },
  destroyByCardId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await likesModel.destroyByCardId(id);
    res.status(200);
    res.json(results);
  },
};

module.exports = likesController;
