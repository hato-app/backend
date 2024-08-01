const cardsController = require("./controller/cards.controller");
const usersController = require("./controller/users.controller");
const commentsController = require("./controller/comments.controller");
const likesController = require("./controller/likes.controller");

const knex = require("./knex");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json("Hato Api");
});

app.get("/cards", cardsController.index);
app.get("/cards/:id", cardsController.show);
app.get("/cards/category/:id", cardsController.showByCategory);
app.post("/cards", cardsController.create);
app.patch("/cards/:id", cardsController.update);
app.delete("/cards/:id", cardsController.destroy);

app.get("/users", usersController.index);
app.get("/users/:id", usersController.show);
app.post("/users", usersController.create);
app.patch("/users/:id", usersController.update);
app.delete("/users/:id", usersController.destroy);

app.get("/comments", commentsController.index);
app.get("/comments/:id", commentsController.show);
app.post("/comments", commentsController.create);
app.patch("/comments/:id", commentsController.update);
app.delete("/comments/:id", commentsController.destroy);

app.get("/likes/cards", likesController.index);
// app.get("/likes/users", likesController.indexByUserId);
// app.get("/likes/users/:id", likesController.showByUserId);
// app.get("/likes/cards/:id", likesController.showByCardId);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
