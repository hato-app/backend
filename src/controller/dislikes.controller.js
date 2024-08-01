const dislikesModel = require("../model/dislikes.model");

const dislikesController = {
  index: async (req, res) => {
    const results = await dislikesModel.select();
    res.status(200);
    res.json(results);
  },
    showByCardId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await dislikesModel.selectByCardId(id);
    res.status(200);
    res.json(results);
  },
  create: async (req, res) => {
    const dislikes = {
      user_id: req.body.user_id,
      card_id: req.body.card_id,
    }; 
    const results = await dislikesModel.create(dislikes);
    res.status(200);
    res.json(results);
  },
  destroyByCardId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await dislikesModel.destroyByCardId(id);
    res.status(200);
    res.json(results);
  }
};

module.exports = dislikesController;
