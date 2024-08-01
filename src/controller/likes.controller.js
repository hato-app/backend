// const likesModel = require("../model/likes.model");

// const likesController = {
//   indexByCardId: async (req, res) => {
//     const results = await likesModel.select();
//     res.status(200);
//     res.json(results);
//   },
//   showByUserId: async (req, res) => {
//     const id = Number(req.params.user_id);
//     const results = await likesModel.selectByUserId(id);
//     res.status(200);
//     res.json(results);
//   },
//   showByCardId: async (req, res) => {
//     const id = Number(req.params.card_id);
//     const results = await likesModel.selectByCardId(id);
//     res.status(200);
//     res.json(results);
//   }
// };

// module.exports = likesController;
