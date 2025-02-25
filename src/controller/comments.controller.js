const commentsModel = require("../model/comments.model");
const { showByCardId } = require("./likes.controller");

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
  showByUserId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await commentsModel.selectByUserId(id);
    res.status(200);
    res.json(results);
  },
  showByCardId: async (req, res) => {
    const id = Number(req.params.id);
    const results = await commentsModel.selectByCardId(id);
    res.status(200);
    res.json(results);
  },
  create: async (req, res) => {
    const comment = {
      user_id: req.body.user_id,
      card_id: req.body.card_id,
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
  // showByReported: async (req, res) => {
  //   const result = await commentsModel.selectReportedComments();
  //   res.status(200);
  //   res.json(result);
  // },
};

module.exports = commentsController;
