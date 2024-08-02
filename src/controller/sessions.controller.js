const sessionsModel = require("../model/sessions.model");

const sessionsController = {
  index: async (req, res) => {
    if (req.session.user) {
      res.status(200);
      res.json();
    }
    res.status(401);
    res.json();
  },
  create: async (req, res) => {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };
    const results = await sessionsModel.select(user);
    if (results.length) {
      req.session.user = true;
      res.status(200);
      res.json();
    } else {
      res.status(401);
      res.json();
    }
  },
  destroy: async (req, res) => {
    req.session.destroy();
    res.status(200);
    res.json();
  },
};

module.exports = sessionsController;