const sessionsModel = require("../model/sessions.model");

const sessionsController = {
  create: async (req, res) => {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };
    const results = await sessionsModel.select(user);
    if (results.length) {
      req.session.user = results;
      res.status(200);
      res.json();
    } else {
        
    }
  },
  destroy: async (req, res) => {
    req.session.destroy();
    res.status(200);
    res.json();
  },
};

module.exports = sessionsController;
