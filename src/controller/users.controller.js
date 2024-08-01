const usersModel = require("../model/users.model");

const usersController = {
  index: async (req, res) => {
    const results = await usersModel.select();
    res.status(200);
    res.json(results);
  },
  show: async (req, res) => {
    const id = Number(req.params.id);
    const results = await usersModel.selectId(id);
    res.status(200);
    res.json(results);
  },
  create: async (req, res) => {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };
    const results = await usersModel.create(user);
    res.status(200);
    res.json(results);
  },
  update: async (req, res) => {
    const id = Number(req.params.id);
    const user = {};

    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }

    if (Object.keys(user)) {
      user.updated_at = new Date().toISOString();
    }

    const results = await usersModel.update(id, user);
    res.status(200);
    res.json(results);
  },
  destroy: async (req, res) => {
    const id = Number(req.params.id);
    const results = await usersModel.delete(id);
    res.status(200);
    res.json(results);
  },
};

module.exports = usersController;
