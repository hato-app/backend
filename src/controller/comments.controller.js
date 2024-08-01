const commentsModel = require("../model/comments.model");

const commentsController = {
  index: async (req, res) => {
    const results = await commentsModel.select();
    res.status(200);
    res.json(results);
  },
  show: async (req, res) => {
    const id = Number(req.params.id);
    const results = await commentsModel.selectId(id);
    res.status(200);
    res.json(results);
  },
  create: async (req, res) => {
    const id = Number(req.params.id);
    const comment = {
      text: req.body.text,
      created_at: new Date().toISOString(),
    };
    const results = await commentsModel.create(comment);
    res.status(200);
    res.json(results);
  },
  update: async (req, res) => {
    const id = Number(req.params.id);
    const comment = {
      text: req.body.text,
      updated_at: new Date().toISOString(),
    };
    const results = await commentsModel.update(id, comment);
    res.status(200);
    res.json(results);
  },
  destroy: async (req, res) => {
    const id = Number(req.params.id);
    const results = await commentsModel.destroy(id);
    res.status(200);
    res.json(results);
  },
};

module.exports = cardsController;
